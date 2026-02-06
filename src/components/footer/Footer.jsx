import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer
        className="relative bg-wedding-deep text-white py-12 px-4"
        data-testid="footer">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Logo/Title */}
            <div className="flex justify-center items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-wedding-warm fill-wedding-warm" />
              <span className="font-script text-3xl">Our Wedding</span>
            </div>

            {/* Divider */}
            <div className="h-px w-32 bg-wedding-soft/30 mx-auto mb-6"></div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-wedding-warm/20 hover:bg-wedding-warm/30 p-3 rounded-full transition-colors"
                data-testid="social-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-wedding-warm/20 hover:bg-wedding-warm/30 p-3 rounded-full transition-colors"
                data-testid="social-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-wedding-warm/20 hover:bg-wedding-warm/30 p-3 rounded-full transition-colors"
                data-testid="social-twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="font-manrope text-wedding-secondary text-sm">
              © 2026 Carl & Irish. All rights reserved.
            </p>
            <p className="font-manrope text-wedding-secondary text-sm mt-2">
              Made with{" "}
              <Heart className="inline w-4 h-4 text-wedding-warm fill-wedding-warm" />{" "}
              for our special day
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
