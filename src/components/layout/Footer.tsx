import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Scale, FileText, Users } from "lucide-react";

const footerLinks = {
  blog: [
    { href: "/blog/wprowadzenie-do-pre-pack", label: "Czym jest Pre-Pack?" },
    { href: "/blog/podstawy-prawne", label: "Podstawy prawne" },
    { href: "/blog/pre-pack-na-swiecie", label: "Pre-Pack na świecie" },
    { href: "/blog/statystyki", label: "Statystyki" },
  ],
  informacje: [
    { href: "/#o-pre-pack", label: "O procedurze" },
    { href: "/#faq", label: "FAQ" },
    { href: "/kontakt", label: "Kontakt" },
  ],
};

const features = [
  { icon: Scale, label: "Zgodność z prawem" },
  { icon: FileText, label: "Dokumentacja" },
  { icon: Users, label: "Ochrona wierzycieli" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                <span className="font-heading font-bold text-white text-lg">P</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                PrePack
                <span className="text-brand-500">.pl</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Kompleksowy przewodnik po procedurze przygotowanej likwidacji w Polsce.
              Pomagamy zrozumieć proces i podjąć właściwe decyzje.
            </p>
            <div className="flex flex-wrap gap-4">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 text-xs text-slate-400"
                >
                  <feature.icon className="w-4 h-4 text-brand-500" />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">
              Artykuły
            </h4>
            <ul className="space-y-3">
              {footerLinks.blog.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-brand-400 hover:text-brand-300 transition-colors font-medium"
                >
                  Zobacz wszystkie →
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">
              Informacje
            </h4>
            <ul className="space-y-3">
              {footerLinks.informacje.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:kontakt@prepack.pl"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>kontakt@prepack.pl</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+48123456789"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+48 123 456 789</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>
                    ul. Przykładowa 123
                    <br />
                    00-001 Warszawa
                  </span>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-full transition-colors"
            >
              Napisz do nas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-wide py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} PrePack.pl. Wszelkie prawa zastrzeżone.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">
                Polityka prywatności
              </Link>
              <Link href="/regulamin" className="hover:text-white transition-colors">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
