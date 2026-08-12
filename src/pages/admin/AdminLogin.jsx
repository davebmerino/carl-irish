import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Lock, User, Loader2 } from "lucide-react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
console.log(API);

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // try {
    //   const response = await axios.post(`${API}/admin/login`, {
    //     username,
    //     password,
    //   });

    //   localStorage.setItem("access_token", response.data.access_token);
    // } catch (err) {
    //   setError(err.response?.data?.detail || "Login failed. Please try again.");
    // } finally {
    //   setLoading(false);
    // }

    try {
      const response = await axios.post(`${API}/admin/login`, {
        username,
        password,
      });

      // Save JWT
      localStorage.setItem("access_token", response.data.access_token);

      // console.log("Saved token:", localStorage.getItem("access_token"));

      // Go to admin dashboard
      // console.log("Navigating to /admin");
      navigate("/admin");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.detail || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-wedding-cream">
      <div className="grain-overlay fixed inset-0 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl border border-wedding-secondary/30">
          <div className="text-center mb-8">
            <div className="bg-wedding-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-wedding-primary fill-wedding-primary" />
            </div>
            <h1
              className="font-playfair text-3xl font-semibold text-wedding-deep mb-2"
              data-testid="admin-login-title">
              Admin Login
            </h1>
            <p className="font-manrope text-wedding-soft text-sm">
              Sign in to manage your wedding invitations
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && (
              <div
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 font-manrope text-sm"
                data-testid="login-error">
                {error}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block font-manrope text-wedding-main font-medium mb-2 text-sm">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-wedding-soft" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-wedding-secondary rounded-lg focus:border-wedding-primary focus:outline-none text-wedding-deep font-manrope transition-colors"
                    placeholder="Enter username"
                    data-testid="username-input"
                  />
                </div>
              </div>

              <div>
                <label className="block font-manrope text-wedding-main font-medium mb-2 text-sm">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-wedding-soft" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-wedding-secondary rounded-lg focus:border-wedding-primary focus:outline-none text-wedding-deep font-manrope transition-colors"
                    placeholder="Enter password"
                    data-testid="password-input"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-wedding-primary text-white py-3 rounded-lg font-medium tracking-wide hover:bg-wedding-main transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              data-testid="login-button">
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-wedding-secondary/50 text-center">
            <button
              onClick={() => navigate("/")}
              className="font-manrope text-sm text-wedding-soft hover:text-wedding-primary transition-colors"
              data-testid="back-to-home">
              ← Back to Wedding Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
