import Link from "next/link";
import { Sparkles } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/readings", label: "Readings" },
    { href: "/ueber-elfi", label: "Über Elfi" },
    { href: "/blog", label: "Blog" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  legal: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/agb", label: "AGB" },
  ],
  social: [
    { href: "https://tiktok.com/@elfenorakel", label: "TikTok" },
    { href: "https://youtube.com/@elfenorakel", label: "YouTube" },
    { href: "https://instagram.com/elfenorakel", label: "Instagram" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-[var(--bg-secondary)] border-t border-[var(--glass-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--gold)]" />
              <span className="text-xl font-semibold text-gradient-gold">
                Elfenorakel
              </span>
            </Link>
            <p className="text-[var(--text-muted)] text-sm">
              Ehrliche Readings und spirituelle Guidance mit Elfi Christina Riethmüller.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">
              Rechtliches
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">
              Social Media
            </h4>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--glass-border)]">
          <p className="text-center text-[var(--text-muted)] text-sm">
            © {new Date().getFullYear()} Elfenorakel · Elfi Christina Riethmüller
          </p>
        </div>
      </div>
    </footer>
  );
};
