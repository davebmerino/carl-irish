import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/home", label: "Details" },
    { path: "/rsvp", label: "RSVP" },
  ];
  return (
    <nav
      className="relative bg-white/90 backdrop-blur-md shadow-sm z-50"
      data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
            data-testid="nav-logo">
            <Heart className="w-6 h-6 text-wedding-warm fill-wedding-warm" />
            <span className="font-script text-2xl text-wedding-deep">
              Our Wedding
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-manrope font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-wedding-warm"
                    : "text-wedding-main hover:text-wedding-warm"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-wedding-main hover:text-wedding-warm transition-colors"
            data-testid="mobile-menu-button">
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg"
          data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-manrope font-medium py-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-wedding-warm"
                    : "text-wedding-main hover:text-wedding-warm"
                }`}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
