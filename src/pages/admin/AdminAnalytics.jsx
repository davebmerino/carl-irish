import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  LogOut,
  ArrowLeft,
  Users,
  Mail,
  Eye,
  Send,
  TrendingUp,
  Loader2,
  Calendar,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminAnalytics = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [invites, setInvites] = useState([]);
  const [rsvps, setRsvps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [datePreset, setDatePreset] = useState("all");

  const token = localStorage.getItem("admin_token");
  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    if (!token) {
      navigate("/adminlogin");
      return;
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [statsRes, invitesRes, rsvpsRes] = await Promise.all([
        axios.get(`${API}/admin/stats`, authHeader),
        axios.get(`${API}/admin/invites`, authHeader),
        axios.get(`${API}/admin/rsvp`, authHeader),
      ]);
      setStats(statsRes.data);
      setInvites(invitesRes.data);
      setRsvps(rsvpsRes.data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem("admin_token");
        navigate("/adminlogin");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    navigate("/adminlogin");
  };

  const applyDatePreset = (preset) => {
    setDatePreset(preset);
    const now = new Date();
    if (preset === "all") {
      setDateFrom("");
      setDateTo("");
    } else if (preset === "7days") {
      const from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      setDateFrom(from.toISOString().split("T")[0]);
      setDateTo(now.toISOString().split("T")[0]);
    } else if (preset === "30days") {
      const from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      setDateFrom(from.toISOString().split("T")[0]);
      setDateTo(now.toISOString().split("T")[0]);
    } else if (preset === "90days") {
      const from = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
      setDateFrom(from.toISOString().split("T")[0]);
      setDateTo(now.toISOString().split("T")[0]);
    }
  };

  // Filter data by date range
  const inDateRange = (dateStr) => {
    if (!dateFrom && !dateTo) return true;
    if (!dateStr) return false;
    const date = new Date(dateStr);
    if (dateFrom && date < new Date(dateFrom)) return false;
    if (dateTo) {
      const endDate = new Date(dateTo);
      endDate.setHours(23, 59, 59);
      if (date > endDate) return false;
    }
    return true;
  };

  const filteredInvites = useMemo(
    () => invites.filter((i) => inDateRange(i.created_at)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [invites, dateFrom, dateTo],
  );

  const filteredRsvps = useMemo(
    () => rsvps.filter((r) => inDateRange(r.timestamp)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [rsvps, dateFrom, dateTo],
  );

  // Use filtered data for all calculations
  const displayInvites = filteredInvites;
  const displayRsvps = filteredRsvps;

  // Calculate stats from filtered data
  const totalComing = displayRsvps.reduce((sum, r) => {
    let count = r.primary_guest.status === "coming" ? 1 : 0;
    count += (r.additional_guests || []).filter(
      (g) => g.status === "coming",
    ).length;
    return sum + count;
  }, 0);

  const totalNotComing = displayRsvps.reduce((sum, r) => {
    let count = r.primary_guest.status === "not_coming" ? 1 : 0;
    count += (r.additional_guests || []).filter(
      (g) => g.status === "not_coming",
    ).length;
    return sum + count;
  }, 0);

  const filteredStats = {
    total_invites: displayInvites.length,
    responded: displayInvites.filter((i) => i.has_responded).length,
    opened: displayInvites.filter((i) => (i.opened_count || 0) > 0).length,
    emails_sent: displayInvites.filter((i) => i.email_sent).length,
    total_rsvps: displayRsvps.length,
  };

  const responseRate =
    filteredStats.total_invites > 0
      ? Math.round(
          (filteredStats.responded / filteredStats.total_invites) * 100,
        )
      : 0;

  const openRate =
    filteredStats.emails_sent > 0
      ? Math.round((filteredStats.opened / filteredStats.emails_sent) * 100)
      : 0;

  // Chart data
  const rsvpPieData = [
    { name: "Attending", value: totalComing, color: "#6B7F63" },
    { name: "Not Attending", value: totalNotComing, color: "#B8A67D" },
  ];

  const invitesPieData = [
    { name: "Responded", value: stats?.responded || 0, color: "#6B7F63" },
    {
      name: "Pending",
      value: (stats?.total_invites || 0) - (stats?.responded || 0),
      color: "#E8E6DC",
    },
  ];

  const emailStatusData = [
    { name: "Emails Sent", value: stats?.emails_sent || 0, color: "#8B9D83" },
    {
      name: "Not Sent",
      value: (stats?.total_invites || 0) - (stats?.emails_sent || 0),
      color: "#E8E6DC",
    },
  ];

  // Top opened invites
  const topOpened = [...invites]
    .filter((i) => i.opened_count > 0)
    .sort((a, b) => b.opened_count - a.opened_count)
    .slice(0, 8)
    .map((i) => ({
      name: i.name.length > 15 ? i.name.substring(0, 15) + "..." : i.name,
      opens: i.opened_count,
    }));

  // RSVPs over time (by date)
  const rsvpsByDate = {};
  rsvps.forEach((r) => {
    const date = new Date(r.timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    rsvpsByDate[date] = (rsvpsByDate[date] || 0) + 1;
  });
  const rsvpTrend = Object.entries(rsvpsByDate).map(([date, count]) => ({
    date,
    count,
  }));

  if (loading) {
    return (
      <div className="min-h-screen bg-wedding-cream flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-wedding-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wedding-cream">
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-wedding-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/admin")}
                className="flex items-center gap-2 text-wedding-main hover:text-wedding-primary transition-colors font-manrope text-sm"
                data-testid="back-to-dashboard">
                <ArrowLeft className="w-4 h-4" />
                Dashboard
              </button>
              <div className="h-6 w-px bg-wedding-secondary"></div>
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-wedding-primary fill-wedding-primary" />
                <span className="font-playfair text-xl font-semibold text-wedding-deep">
                  Analytics
                </span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-wedding-main hover:text-wedding-primary transition-colors font-manrope text-sm"
              data-testid="logout-button">
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="font-playfair text-3xl font-semibold text-wedding-deep mb-2">
            Wedding Analytics
          </h1>
          <p className="font-manrope text-wedding-soft">
            Track your invitations, responses, and engagement
          </p>
        </div>

        {/* Date Range Filter */}
        <div className="bg-white rounded-xl p-4 shadow-lg border border-wedding-secondary/30 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-2 text-wedding-deep">
              <Calendar className="w-5 h-5 text-wedding-primary" />
              <span className="font-manrope font-medium text-sm">
                Date Range:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "All Time" },
                { key: "7days", label: "Last 7 Days" },
                { key: "30days", label: "Last 30 Days" },
                { key: "90days", label: "Last 90 Days" },
                { key: "custom", label: "Custom" },
              ].map((preset) => (
                <button
                  key={preset.key}
                  onClick={() => applyDatePreset(preset.key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-manrope font-medium transition-colors ${
                    datePreset === preset.key
                      ? "bg-wedding-primary text-white"
                      : "bg-wedding-cream text-wedding-main hover:bg-wedding-primary/10"
                  }`}
                  data-testid={`preset-${preset.key}`}>
                  {preset.label}
                </button>
              ))}
            </div>
            {(datePreset === "custom" || (dateFrom && dateTo)) && (
              <div className="flex items-center gap-2 ml-auto">
                <input
                  type="date"
                  value={dateFrom}
                  onChange={(e) => {
                    setDateFrom(e.target.value);
                    setDatePreset("custom");
                  }}
                  className="px-3 py-1.5 border border-wedding-secondary rounded-lg text-sm font-manrope text-wedding-deep focus:border-wedding-primary focus:outline-none"
                  data-testid="date-from"
                />
                <span className="font-manrope text-sm text-wedding-soft">
                  to
                </span>
                <input
                  type="date"
                  value={dateTo}
                  onChange={(e) => {
                    setDateTo(e.target.value);
                    setDatePreset("custom");
                  }}
                  className="px-3 py-1.5 border border-wedding-secondary rounded-lg text-sm font-manrope text-wedding-deep focus:border-wedding-primary focus:outline-none"
                  data-testid="date-to"
                />
              </div>
            )}
          </div>
          {(dateFrom || dateTo) && (
            <div className="mt-3 pt-3 border-t border-wedding-secondary/50 text-xs font-manrope text-wedding-soft">
              Showing data{" "}
              {dateFrom
                ? `from ${new Date(dateFrom).toLocaleDateString()}`
                : ""}{" "}
              {dateTo ? `to ${new Date(dateTo).toLocaleDateString()}` : ""}
              {` • ${displayInvites.length} invite(s), ${displayRsvps.length} RSVP(s)`}
            </div>
          )}
        </div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30">
            <div className="bg-wedding-primary/10 p-3 rounded-full w-fit mb-2">
              <Users className="w-6 h-6 text-wedding-primary" />
            </div>
            <p className="font-manrope text-sm text-wedding-soft mb-1">
              Total Invites
            </p>
            <p
              className="font-playfair text-4xl font-semibold text-wedding-deep"
              data-testid="stat-total-invites">
              {filteredStats.total_invites}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30">
            <div className="bg-wedding-primary/10 p-3 rounded-full w-fit mb-2">
              <Send className="w-6 h-6 text-wedding-primary" />
            </div>
            <p className="font-manrope text-sm text-wedding-soft mb-1">
              Emails Sent
            </p>
            <p
              className="font-playfair text-4xl font-semibold text-wedding-deep"
              data-testid="stat-emails-sent">
              {filteredStats.emails_sent}
            </p>
            <p className="font-manrope text-xs text-wedding-soft mt-1">
              {filteredStats.total_invites > 0
                ? Math.round(
                    (filteredStats.emails_sent / filteredStats.total_invites) *
                      100,
                  )
                : 0}
              % of invites
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30">
            <div className="bg-wedding-primary/10 p-3 rounded-full w-fit mb-2">
              <Eye className="w-6 h-6 text-wedding-primary" />
            </div>
            <p className="font-manrope text-sm text-wedding-soft mb-1">
              Invites Opened
            </p>
            <p
              className="font-playfair text-4xl font-semibold text-wedding-deep"
              data-testid="stat-opened">
              {filteredStats.opened}
            </p>
            <p className="font-manrope text-xs text-wedding-soft mt-1">
              {openRate}% open rate
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30">
            <div className="bg-wedding-primary/10 p-3 rounded-full w-fit mb-2">
              <Mail className="w-6 h-6 text-wedding-primary" />
            </div>
            <p className="font-manrope text-sm text-wedding-soft mb-1">RSVPs</p>
            <p
              className="font-playfair text-4xl font-semibold text-wedding-deep"
              data-testid="stat-rsvps">
              {filteredStats.total_rsvps}
            </p>
            <p className="font-manrope text-xs text-wedding-soft mt-1">
              {responseRate}% response rate
            </p>
          </div>
        </div>

        {/* Attendance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30 text-center">
            <p className="font-manrope text-sm text-wedding-soft mb-2 uppercase tracking-wider">
              Attending
            </p>
            <p
              className="font-playfair text-5xl font-semibold text-wedding-primary"
              data-testid="attending-count">
              {totalComing}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30 text-center">
            <p className="font-manrope text-sm text-wedding-soft mb-2 uppercase tracking-wider">
              Not Attending
            </p>
            <p className="font-playfair text-5xl font-semibold text-wedding-warm">
              {totalNotComing}
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30 text-center">
            <p className="font-manrope text-sm text-wedding-soft mb-2 uppercase tracking-wider">
              Awaiting Response
            </p>
            <p className="font-playfair text-5xl font-semibold text-wedding-soft">
              {filteredStats.total_invites - filteredStats.responded}
            </p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* RSVP Attendance Pie Chart */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30">
            <h3 className="font-playfair text-xl font-semibold text-wedding-deep mb-4">
              Attendance Breakdown
            </h3>
            {totalComing + totalNotComing === 0 ? (
              <div className="h-64 flex items-center justify-center text-wedding-soft font-manrope">
                No RSVP data yet
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={rsvpPieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value">
                    {rsvpPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Response Status Pie Chart */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30">
            <h3 className="font-playfair text-xl font-semibold text-wedding-deep mb-4">
              Response Status
            </h3>
            {filteredStats.total_invites === 0 ? (
              <div className="h-64 flex items-center justify-center text-wedding-soft font-manrope">
                No invites yet
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={invitesPieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value">
                    {invitesPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Email Delivery + Top Opened */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30">
            <h3 className="font-playfair text-xl font-semibold text-wedding-deep mb-4">
              Email Delivery Status
            </h3>
            {filteredStats.total_invites === 0 ? (
              <div className="h-64 flex items-center justify-center text-wedding-soft font-manrope">
                No invites yet
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={emailStatusData}>
                  <XAxis
                    dataKey="name"
                    stroke="#4A5D45"
                    style={{ fontFamily: "Manrope", fontSize: 12 }}
                  />
                  <YAxis
                    stroke="#4A5D45"
                    style={{ fontFamily: "Manrope", fontSize: 12 }}
                  />
                  <Tooltip />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {emailStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30">
            <h3 className="font-playfair text-xl font-semibold text-wedding-deep mb-4">
              Most Engaged Guests
            </h3>
            {topOpened.length === 0 ? (
              <div className="h-64 flex items-center justify-center text-wedding-soft font-manrope">
                No opens tracked yet
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={topOpened}
                  layout="vertical"
                  margin={{ left: 20 }}>
                  <XAxis
                    type="number"
                    stroke="#4A5D45"
                    style={{ fontFamily: "Manrope", fontSize: 12 }}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    stroke="#4A5D45"
                    style={{ fontFamily: "Manrope", fontSize: 11 }}
                    width={100}
                  />
                  <Tooltip />
                  <Bar dataKey="opens" fill="#8B9D83" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* RSVP Timeline */}
        {rsvpTrend.length > 0 && (
          <div className="bg-white rounded-xl p-6 shadow-lg border border-wedding-secondary/30 mb-8">
            <h3 className="font-playfair text-xl font-semibold text-wedding-deep mb-4">
              <TrendingUp className="w-5 h-5 inline mr-2 text-wedding-primary" />
              RSVP Submissions Over Time
            </h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={rsvpTrend}>
                <XAxis
                  dataKey="date"
                  stroke="#4A5D45"
                  style={{ fontFamily: "Manrope", fontSize: 12 }}
                />
                <YAxis
                  stroke="#4A5D45"
                  style={{ fontFamily: "Manrope", fontSize: 12 }}
                  allowDecimals={false}
                />
                <Tooltip />
                <Bar dataKey="count" fill="#6B7F63" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Detailed Guest List */}
        <div className="bg-white rounded-xl shadow-lg border border-wedding-secondary/30 overflow-hidden">
          <div className="p-6 border-b border-wedding-secondary">
            <h3 className="font-playfair text-xl font-semibold text-wedding-deep">
              Individual Guest Tracking
            </h3>
          </div>
          {displayInvites.length === 0 ? (
            <div className="p-12 text-center text-wedding-soft font-manrope">
              No guests in selected range
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-wedding-cream">
                  <tr>
                    <th className="text-left py-3 px-4 font-playfair font-semibold text-wedding-deep text-sm">
                      Guest
                    </th>
                    <th className="text-center py-3 px-4 font-playfair font-semibold text-wedding-deep text-sm">
                      Email Sent
                    </th>
                    <th className="text-center py-3 px-4 font-playfair font-semibold text-wedding-deep text-sm">
                      Opens
                    </th>
                    <th className="text-center py-3 px-4 font-playfair font-semibold text-wedding-deep text-sm">
                      Last Opened
                    </th>
                    <th className="text-center py-3 px-4 font-playfair font-semibold text-wedding-deep text-sm">
                      RSVP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayInvites.map((invite) => (
                    <tr
                      key={invite.id}
                      className="border-b border-wedding-secondary/30 hover:bg-wedding-cream/50">
                      <td className="py-3 px-4">
                        <div className="font-manrope font-medium text-wedding-deep">
                          {invite.name}
                        </div>
                        {invite.email && (
                          <div className="font-manrope text-xs text-wedding-soft">
                            {invite.email}
                          </div>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {invite.email_sent ? (
                          <span className="text-green-600 text-sm font-manrope">
                            ✓ Sent
                          </span>
                        ) : (
                          <span className="text-wedding-soft text-sm font-manrope">
                            —
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`font-manrope font-semibold ${invite.opened_count > 0 ? "text-wedding-primary" : "text-wedding-soft"}`}>
                          {invite.opened_count || 0}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-sm font-manrope text-wedding-soft">
                        {invite.last_opened
                          ? new Date(invite.last_opened).toLocaleDateString()
                          : "—"}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {invite.has_responded ? (
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                            Responded
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-wedding-warm/20 text-wedding-warm text-xs font-medium">
                            Pending
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
