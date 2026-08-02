import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  LogOut,
  Users,
  Mail,
  Plus,
  Copy,
  Trash2,
  Check,
  X,
  Loader2,
  Upload,
  Send,
  BarChart3,
  Download,
  CheckCircle,
  Circle,
} from "lucide-react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("invites");
  const [invites, setInvites] = useState([]);
  const [rsvps, setRsvps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [sendingEmailId, setSendingEmailId] = useState(null);
  const [csvImporting, setCsvImporting] = useState(false);
  const [importMessage, setImportMessage] = useState("");
  const [sendingAll, setSendingAll] = useState(false);
  const [sendAllMessage, setSendAllMessage] = useState("");
  const [newGuest, setNewGuest] = useState({
    name: "",
    email: "",
    contact: "",
    number_of_guests: 1,
    notes: "",
  });

  const token = localStorage.getItem("admin_token");
  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    if (!token) {
      navigate("/adminlogin");
      return;
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [invitesRes, rsvpsRes] = await Promise.all([
        axios.get(`${API}/admin/invites`, authHeader),
        axios.get(`${API}/admin/rsvp`, authHeader),
      ]);
      setInvites(invitesRes.data);
      setRsvps(rsvpsRes.data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("admin_token");
        navigate("/adminlogin");
      }
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/adminlogin");
  };

  const handleAddGuest = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/admin/invites`, newGuest, authHeader);
      setShowAddModal(false);
      setNewGuest({
        name: "",
        email: "",
        contact: "",
        number_of_guests: 1,
        notes: "",
      });
      fetchData();
    } catch (err) {
      console.error("Error adding guest:", err);
      alert("Failed to add guest");
    }
  };

  const handleDeleteInvite = async (id) => {
    if (!window.confirm("Are you sure you want to delete this invite?")) return;
    try {
      await axios.delete(`${API}/admin/invites/${id}`, authHeader);
      fetchData();
    } catch (err) {
      console.error("Error deleting invite:", err);
    }
  };

  const handleToggleMarkSent = async (id, currentStatus) => {
    const action = currentStatus ? "unmark" : "mark";
    if (
      !window.confirm(
        `${action === "mark" ? "Mark this invite as sent?" : "Unmark this invite as sent?"} Use this to track invites you sent manually (SMS, WhatsApp, in person, etc.)`,
      )
    )
      return;
    try {
      await axios.patch(`${API}/admin/invites/${id}/mark-sent`, {}, authHeader);
      fetchData();
    } catch (err) {
      console.error("Error toggling mark sent:", err);
      alert("Failed to update status");
    }
  };

  const handleSendAll = async () => {
    const guestsWithEmail = invites.filter((i) => i.email && !i.email_sent);
    if (guestsWithEmail.length === 0) {
      alert(
        "No guests to send emails to. All guests either have no email or already received an invite.",
      );
      return;
    }
    if (
      !window.confirm(
        `Send invitation emails to ${guestsWithEmail.length} guest(s)? This may take a few moments.`,
      )
    )
      return;

    setSendingAll(true);
    setSendAllMessage("");
    try {
      const response = await axios.post(
        `${API}/admin/invites/send-all`,
        { frontend_url: window.location.origin, only_unsent: true },
        authHeader,
      );
      const { sent, failed } = response.data;
      setSendAllMessage(
        `✓ Sent ${sent} invitation(s)${failed > 0 ? `, ${failed} failed` : ""}`,
      );
      fetchData();
    } catch (err) {
      console.error("Error sending all emails:", err);
      setSendAllMessage("Failed to send emails. Please try again.");
    } finally {
      setSendingAll(false);
      setTimeout(() => setSendAllMessage(""), 8000);
    }
  };

  const copyInviteUrl = (id) => {
    const url = `${window.location.origin}/${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSendEmail = async (inviteId, guestEmail) => {
    if (!guestEmail) {
      alert("This guest has no email address. Please add one first.");
      return;
    }
    if (!window.confirm(`Send invitation email to ${guestEmail}?`)) return;

    setSendingEmailId(inviteId);
    try {
      await axios.post(
        `${API}/admin/invites/${inviteId}/send-email`,
        { frontend_url: window.location.origin },
        authHeader,
      );
      alert(`Invitation sent successfully to ${guestEmail}!`);
    } catch (err) {
      console.error("Error sending email:", err);
      alert(err.response?.data?.detail || "Failed to send email");
    } finally {
      setSendingEmailId(null);
    }
  };

  const handleCSVImport = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setCsvImporting(true);
    setImportMessage("");

    try {
      const text = await file.text();
      const lines = text.split("\n").filter((line) => line.trim());

      if (lines.length < 2) {
        setImportMessage(
          "CSV file must have a header row and at least one data row",
        );
        setCsvImporting(false);
        return;
      }

      // Parse header - expected: name, email, contact, number_of_guests, notes
      const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
      const invites = [];

      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",").map((v) => v.trim());
        const invite = {
          name: "",
          email: "",
          contact: "",
          number_of_guests: 1,
          notes: "",
        };

        headers.forEach((header, idx) => {
          const value = values[idx] || "";
          if (header === "name") invite.name = value;
          else if (header === "email") invite.email = value;
          else if (
            header === "contact" ||
            header === "phone" ||
            header === "number"
          )
            invite.contact = value;
          else if (header === "number_of_guests" || header === "guests")
            invite.number_of_guests = parseInt(value) || 1;
          else if (header === "notes") invite.notes = value;
        });

        if (invite.name) invites.push(invite);
      }

      if (invites.length === 0) {
        setImportMessage("No valid guests found in CSV");
        setCsvImporting(false);
        return;
      }

      await axios.post(`${API}/admin/invites/bulk`, invites, authHeader);
      setImportMessage(`✓ Successfully imported ${invites.length} guest(s)`);
      fetchData();
    } catch (err) {
      console.error("Error importing CSV:", err);
      setImportMessage("Failed to import CSV. Please check the format.");
    } finally {
      setCsvImporting(false);
      event.target.value = ""; // Reset file input
      setTimeout(() => setImportMessage(""), 5000);
    }
  };

  const totalComing = rsvps.reduce((sum, r) => {
    let count = r.primary_guest.status === "coming" ? 1 : 0;
    count += (r.additional_guests || []).filter(
      (g) => g.status === "coming",
    ).length;
    return sum + count;
  }, 0);

  const escapeCSV = (val) => {
    if (val === null || val === undefined) return "";
    const str = String(val);
    if (str.includes(",") || str.includes('"') || str.includes("\n")) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  const downloadCSV = (filename, csvContent) => {
    const blob = new Blob(["\ufeff" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const exportRSVPsToCSV = () => {
    if (rsvps.length === 0) {
      alert("No RSVPs to export");
      return;
    }

    const headers = [
      "Submission Date",
      "Guest Name",
      "Email",
      "Contact",
      "Status",
      "Type",
      "Related To",
    ];
    const rows = [headers.map(escapeCSV).join(",")];

    rsvps.forEach((rsvp) => {
      const timestamp = new Date(rsvp.timestamp).toLocaleString();
      // Primary guest
      rows.push(
        [
          timestamp,
          rsvp.primary_guest.name,
          rsvp.primary_guest.email,
          rsvp.primary_guest.contact,
          rsvp.primary_guest.status === "coming" ? "Coming" : "Not Coming",
          "Primary",
          "",
        ]
          .map(escapeCSV)
          .join(","),
      );

      // Additional guests
      (rsvp.additional_guests || []).forEach((guest) => {
        rows.push(
          [
            timestamp,
            guest.name,
            guest.email,
            guest.contact,
            guest.status === "coming" ? "Coming" : "Not Coming",
            "Additional",
            rsvp.primary_guest.name,
          ]
            .map(escapeCSV)
            .join(","),
        );
      });
    });

    const dateStr = new Date().toISOString().split("T")[0];
    downloadCSV(`wedding-rsvps-${dateStr}.csv`, rows.join("\n"));
  };

  const exportInvitesToCSV = () => {
    if (invites.length === 0) {
      alert("No invites to export");
      return;
    }

    const headers = [
      "Name",
      "Email",
      "Contact",
      "Number of Guests",
      "Notes",
      "Status",
      "Email Sent",
      "Opens",
      "Invite URL",
    ];
    const rows = [headers.map(escapeCSV).join(",")];

    invites.forEach((invite) => {
      rows.push(
        [
          invite.name,
          invite.email || "",
          invite.contact || "",
          invite.number_of_guests || 1,
          invite.notes || "",
          invite.has_responded ? "Responded" : "Pending",
          invite.email_sent ? "Yes" : "No",
          invite.opened_count || 0,
          `${window.location.origin}/${invite.id}`,
        ]
          .map(escapeCSV)
          .join(","),
      );
    });

    const dateStr = new Date().toISOString().split("T")[0];
    downloadCSV(`wedding-invites-${dateStr}.csv`, rows.join("\n"));
  };

  return (
    <div className="min-h-screen bg-wedding-cream">
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-wedding-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-wedding-primary fill-wedding-primary" />
              <span className="font-playfair text-xl font-semibold text-wedding-deep">
                Admin Dashboard
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/admin/analytics")}
                className="flex items-center gap-2 text-wedding-main hover:text-wedding-primary transition-colors font-manrope text-sm"
                data-testid="analytics-link">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-wedding-main hover:text-wedding-primary transition-colors font-manrope text-sm"
                data-testid="logout-button">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-manrope text-sm text-wedding-soft mb-1">
                  Total Invites
                </p>
                <p
                  className="font-playfair text-3xl font-semibold text-wedding-deep"
                  data-testid="stat-total-invites">
                  {invites.length}
                </p>
              </div>
              <div className="bg-wedding-primary/10 p-3 rounded-full">
                <Users className="w-6 h-6 text-wedding-primary" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-manrope text-sm text-wedding-soft mb-1">
                  RSVPs Received
                </p>
                <p
                  className="font-playfair text-3xl font-semibold text-wedding-deep"
                  data-testid="stat-rsvps">
                  {rsvps.length}
                </p>
              </div>
              <div className="bg-wedding-primary/10 p-3 rounded-full">
                <Mail className="w-6 h-6 text-wedding-primary" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-manrope text-sm text-wedding-soft mb-1">
                  Guests Attending
                </p>
                <p
                  className="font-playfair text-3xl font-semibold text-wedding-deep"
                  data-testid="stat-attending">
                  {totalComing}
                </p>
              </div>
              <div className="bg-wedding-primary/10 p-3 rounded-full">
                <Check className="w-6 h-6 text-wedding-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-wedding-secondary/30 overflow-hidden">
          <div className="flex border-b border-wedding-secondary">
            <button
              onClick={() => setActiveTab("invites")}
              className={`flex-1 py-4 px-6 font-manrope font-medium transition-colors ${
                activeTab === "invites"
                  ? "text-wedding-primary border-b-2 border-wedding-primary bg-wedding-primary/5"
                  : "text-wedding-soft hover:text-wedding-primary"
              }`}
              data-testid="tab-invites">
              Invites
            </button>
            <button
              onClick={() => setActiveTab("rsvps")}
              className={`flex-1 py-4 px-6 font-manrope font-medium transition-colors ${
                activeTab === "rsvps"
                  ? "text-wedding-primary border-b-2 border-wedding-primary bg-wedding-primary/5"
                  : "text-wedding-soft hover:text-wedding-primary"
              }`}
              data-testid="tab-rsvps">
              RSVP Submissions
            </button>
          </div>

          <div className="p-6">
            {loading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 text-wedding-primary animate-spin" />
              </div>
            ) : activeTab === "invites" ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-playfair text-2xl font-semibold text-wedding-deep">
                    Guest Invites
                  </h2>
                  <div className="flex flex-row gap-2">
                    <button
                      onClick={exportInvitesToCSV}
                      className="flex items-center gap-2 bg-white border-2 border-wedding-primary text-wedding-primary px-4 py-2 rounded-lg hover:bg-wedding-primary/10 transition-colors font-manrope text-sm"
                      data-testid="export-invites-button">
                      <Download className="w-4 h-4" />
                      <span className="hidden sm:inline">Export</span>
                    </button>
                    <button
                      onClick={handleSendAll}
                      disabled={sendingAll}
                      className="flex items-center gap-2 bg-wedding-warm text-white px-4 py-2 rounded-lg hover:bg-wedding-warm/90 transition-colors font-manrope text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      data-testid="send-all-button">
                      {sendingAll ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />{" "}
                          <span className="hidden sm:inline">Send to All</span>
                        </>
                      )}
                    </button>
                    <label
                      className="flex items-center gap-2 bg-white border-2 border-wedding-primary text-wedding-primary px-4 py-2 rounded-lg hover:bg-wedding-primary/10 transition-colors font-manrope text-sm cursor-pointer"
                      data-testid="csv-import-label">
                      {csvImporting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />{" "}
                          Importing...
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4" />{" "}
                          <span className="hidden sm:inline">Import CSV</span>
                        </>
                      )}
                      <input
                        type="file"
                        accept=".csv"
                        onChange={handleCSVImport}
                        className="hidden"
                        disabled={csvImporting}
                        data-testid="csv-import-input"
                      />
                    </label>
                    <button
                      onClick={() => setShowAddModal(true)}
                      className="flex items-center gap-2 bg-wedding-primary text-white px-4 py-2 rounded-lg hover:bg-wedding-main transition-colors font-manrope text-sm"
                      data-testid="add-guest-button">
                      <Plus className="w-4 h-4" />
                      <span className="hidden sm:inline">Add Guest</span>
                    </button>
                  </div>
                </div>

                {sendAllMessage && (
                  <div
                    className={`mb-4 p-3 rounded-lg text-sm font-manrope ${sendAllMessage.startsWith("✓") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
                    data-testid="send-all-message">
                    {sendAllMessage}
                  </div>
                )}

                {importMessage && (
                  <div
                    className={`mb-4 p-3 rounded-lg text-sm font-manrope ${importMessage.startsWith("✓") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
                    data-testid="import-message">
                    {importMessage}
                  </div>
                )}

                <div className="mb-4 p-3 bg-wedding-primary/5 border border-wedding-primary/20 rounded-lg text-xs font-manrope text-wedding-main">
                  <strong>CSV Format:</strong> name, email, contact,
                  number_of_guests, notes (header row required)
                </div>

                {invites.length === 0 ? (
                  <div className="text-center py-12 text-wedding-soft font-manrope">
                    No invites yet. Click &quot;Add Guest&quot; to create your
                    first invite.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-wedding-secondary">
                          <th className="text-left py-3 px-4 font-playfair font-semibold text-wedding-deep">
                            Name
                          </th>
                          <th className="text-left py-3 px-4 font-playfair font-semibold text-wedding-deep">
                            Contact
                          </th>
                          <th className="text-left py-3 px-4 font-playfair font-semibold text-wedding-deep">
                            Guests
                          </th>
                          <th className="text-left py-3 px-4 font-playfair font-semibold text-wedding-deep">
                            Status
                          </th>
                          <th className="text-left py-3 px-4 font-playfair font-semibold text-wedding-deep">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {invites.map((invite) => (
                          <tr
                            key={invite.id}
                            className="border-b border-wedding-secondary/30 hover:bg-wedding-cream/50"
                            data-testid={`invite-row-${invite.id}`}>
                            <td className="py-3 px-4 font-manrope text-wedding-deep font-medium">
                              {invite.name}
                            </td>
                            <td className="py-3 px-4 font-manrope text-wedding-main text-sm">
                              {invite.email && <div>{invite.email}</div>}
                              {invite.contact && (
                                <div className="text-wedding-soft">
                                  {invite.contact}
                                </div>
                              )}
                            </td>
                            <td className="py-3 px-4 font-manrope text-wedding-main">
                              {invite.number_of_guests}
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex flex-col gap-1">
                                {invite.has_responded ? (
                                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium w-fit">
                                    <Check className="w-3 h-3" /> Responded
                                  </span>
                                ) : (
                                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-wedding-warm/20 text-wedding-warm text-xs font-medium w-fit">
                                    Pending
                                  </span>
                                )}
                                {invite.email_sent && (
                                  <span
                                    className="inline-flex items-center gap-1 text-xs text-wedding-soft"
                                    title={
                                      invite.email_sent_at
                                        ? `Sent: ${new Date(invite.email_sent_at).toLocaleDateString()}${invite.manually_marked ? " (manually marked)" : ""}`
                                        : ""
                                    }>
                                    <Send className="w-3 h-3" />{" "}
                                    {invite.manually_marked
                                      ? "Marked sent"
                                      : "Email sent"}
                                  </span>
                                )}
                                {invite.opened_count > 0 && (
                                  <span
                                    className="inline-flex items-center gap-1 text-xs text-wedding-soft"
                                    title={
                                      invite.last_opened
                                        ? `Last: ${new Date(invite.last_opened).toLocaleString()}`
                                        : ""
                                    }>
                                    👁 Opened {invite.opened_count}x
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex gap-2">
                                <button
                                  onClick={() => copyInviteUrl(invite.id)}
                                  className="flex items-center gap-1 px-3 py-1.5 bg-wedding-primary/10 text-wedding-primary rounded hover:bg-wedding-primary/20 transition-colors text-sm font-medium"
                                  data-testid={`copy-url-${invite.id}`}>
                                  {copiedId === invite.id ? (
                                    <>
                                      <Check className="w-3 h-3" /> Copied!
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" /> Copy Link
                                    </>
                                  )}
                                </button>
                                <button
                                  onClick={() =>
                                    handleSendEmail(invite.id, invite.email)
                                  }
                                  disabled={
                                    sendingEmailId === invite.id ||
                                    !invite.email
                                  }
                                  className="flex items-center gap-1 px-3 py-1.5 bg-wedding-warm/10 text-wedding-warm rounded hover:bg-wedding-warm/20 transition-colors text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                                  data-testid={`send-email-${invite.id}`}
                                  title={
                                    !invite.email
                                      ? "No email on file"
                                      : "Send invitation email"
                                  }>
                                  {sendingEmailId === invite.id ? (
                                    <>
                                      <Loader2 className="w-3 h-3 animate-spin" />{" "}
                                      Sending...
                                    </>
                                  ) : (
                                    <>
                                      <Send className="w-3 h-3" /> Send Email
                                    </>
                                  )}
                                </button>
                                <button
                                  onClick={() =>
                                    handleToggleMarkSent(
                                      invite.id,
                                      invite.email_sent,
                                    )
                                  }
                                  className={`flex items-center gap-1 px-3 py-1.5 rounded transition-colors text-sm font-medium ${
                                    invite.email_sent
                                      ? "bg-green-100 text-green-700 hover:bg-green-200"
                                      : "bg-wedding-soft/10 text-wedding-soft hover:bg-wedding-soft/20"
                                  }`}
                                  data-testid={`mark-sent-${invite.id}`}
                                  title={
                                    invite.email_sent
                                      ? "Unmark as sent"
                                      : "Mark as sent (for invites sent manually via SMS, WhatsApp, etc.)"
                                  }>
                                  {invite.email_sent ? (
                                    <>
                                      <CheckCircle className="w-3 h-3" /> Sent
                                    </>
                                  ) : (
                                    <>
                                      <Circle className="w-3 h-3" /> Mark Sent
                                    </>
                                  )}
                                </button>
                                <button
                                  onClick={() => handleDeleteInvite(invite.id)}
                                  className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                                  data-testid={`delete-invite-${invite.id}`}>
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </>
            ) : (
              <>
                <h2 className="font-playfair text-2xl font-semibold text-wedding-deep mb-6">
                  RSVP Submissions
                </h2>
                <div className="flex justify-end mb-4">
                  <button
                    onClick={exportRSVPsToCSV}
                    className="flex items-center gap-2 bg-wedding-primary text-white px-4 py-2 rounded-lg hover:bg-wedding-main transition-colors font-manrope text-sm"
                    data-testid="export-rsvps-button">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Export to CSV</span>
                  </button>
                </div>
                {rsvps.length === 0 ? (
                  <div className="text-center py-12 text-wedding-soft font-manrope">
                    No RSVP submissions yet.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {rsvps.map((rsvp) => (
                      <div
                        key={rsvp.id}
                        className="border border-wedding-secondary rounded-lg p-4"
                        data-testid={`rsvp-row-${rsvp.id}`}>
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-playfair text-lg font-semibold text-wedding-deep">
                              {rsvp.primary_guest.name}
                            </h3>
                            <p className="font-manrope text-sm text-wedding-soft">
                              {rsvp.primary_guest.email} •{" "}
                              {rsvp.primary_guest.contact}
                            </p>
                          </div>
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                              rsvp.primary_guest.status === "coming"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}>
                            {rsvp.primary_guest.status === "coming" ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <X className="w-3 h-3" />
                            )}
                            {rsvp.primary_guest.status === "coming"
                              ? "Coming"
                              : "Not Coming"}
                          </span>
                        </div>

                        {rsvp.additional_guests &&
                          rsvp.additional_guests.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-wedding-secondary/50">
                              <p className="font-manrope text-xs text-wedding-soft mb-2 uppercase tracking-wider">
                                Additional Guests
                              </p>
                              <div className="space-y-2">
                                {rsvp.additional_guests.map((guest, idx) => (
                                  <div
                                    key={idx}
                                    className="flex justify-between items-center text-sm">
                                    <div>
                                      <span className="font-manrope font-medium text-wedding-deep">
                                        {guest.name}
                                      </span>
                                      <span className="font-manrope text-wedding-soft ml-2">
                                        {guest.email}
                                      </span>
                                    </div>
                                    <span
                                      className={`text-xs px-2 py-1 rounded-full ${
                                        guest.status === "coming"
                                          ? "bg-green-50 text-green-600"
                                          : "bg-red-50 text-red-600"
                                      }`}>
                                      {guest.status === "coming"
                                        ? "Coming"
                                        : "Not Coming"}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                        <p className="font-manrope text-xs text-wedding-soft mt-3">
                          Submitted: {new Date(rsvp.timestamp).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {showAddModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          data-testid="add-guest-modal">
          <div className="bg-white rounded-xl p-6 md:p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-playfair text-2xl font-semibold text-wedding-deep">
                Add New Guest
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-wedding-soft hover:text-wedding-deep">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddGuest} className="space-y-4">
              <div>
                <label className="block font-manrope text-wedding-main font-medium mb-2 text-sm">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={newGuest.name}
                  onChange={(e) =>
                    setNewGuest({ ...newGuest, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border-2 border-wedding-secondary rounded-lg focus:border-wedding-primary focus:outline-none font-manrope"
                  placeholder="Guest full name"
                  data-testid="guest-name-input"
                />
              </div>

              <div>
                <label className="block font-manrope text-wedding-main font-medium mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  value={newGuest.email}
                  onChange={(e) =>
                    setNewGuest({ ...newGuest, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-wedding-secondary rounded-lg focus:border-wedding-primary focus:outline-none font-manrope"
                  placeholder="guest@example.com"
                  data-testid="guest-email-input"
                />
              </div>

              <div>
                <label className="block font-manrope text-wedding-main font-medium mb-2 text-sm">
                  Contact Number
                </label>
                <input
                  type="tel"
                  value={newGuest.contact}
                  onChange={(e) =>
                    setNewGuest({ ...newGuest, contact: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-wedding-secondary rounded-lg focus:border-wedding-primary focus:outline-none font-manrope"
                  placeholder="+1 (123) 456-7890"
                  data-testid="guest-contact-input"
                />
              </div>

              <div>
                <label className="block font-manrope text-wedding-main font-medium mb-2 text-sm">
                  Number of Guests
                </label>
                <input
                  type="number"
                  value={newGuest.number_of_guests}
                  onChange={(e) =>
                    setNewGuest({
                      ...newGuest,
                      number_of_guests: parseInt(e.target.value) || 1,
                    })
                  }
                  min="1"
                  className="w-full px-4 py-2 border-2 border-wedding-secondary rounded-lg focus:border-wedding-primary focus:outline-none font-manrope"
                  data-testid="guest-count-input"
                />
              </div>

              <div>
                <label className="block font-manrope text-wedding-main font-medium mb-2 text-sm">
                  Notes (Optional)
                </label>
                <textarea
                  value={newGuest.notes}
                  onChange={(e) =>
                    setNewGuest({ ...newGuest, notes: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-2 border-2 border-wedding-secondary rounded-lg focus:border-wedding-primary focus:outline-none font-manrope resize-none"
                  placeholder="Any notes about this guest..."
                  data-testid="guest-notes-input"
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 border-2 border-wedding-secondary text-wedding-main rounded-lg hover:bg-wedding-cream transition-colors font-manrope"
                  data-testid="cancel-add-guest">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-wedding-primary text-white rounded-lg hover:bg-wedding-main transition-colors font-manrope"
                  data-testid="save-guest-button">
                  Add Guest
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
