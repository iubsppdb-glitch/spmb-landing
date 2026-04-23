import { FOOTER, SITE_CONFIG } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-premium">
                <span className="text-white font-display font-bold text-base">
                  {SITE_CONFIG.schoolShortName.slice(0, 2)}
                </span>
              </div>
              <div>
                <div className="font-display font-bold text-white">{SITE_CONFIG.schoolName}</div>
                <div className="text-dark-muted text-xs">Est. 1995</div>
              </div>
            </div>
            <p className="text-dark-muted text-sm leading-relaxed mb-5">{FOOTER.tagline}</p>

            {/* Social links */}
            <div className="flex gap-3">
              {FOOTER.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-primary flex items-center justify-center text-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {FOOTER.quick_links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-dark-muted text-sm hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Kontak
            </h4>
            <ul className="space-y-3">
              {FOOTER.contact_links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-dark-muted hover:text-white text-sm transition-colors duration-200 group"
                  >
                    <span className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-primary flex items-center justify-center text-xs transition-all duration-200 flex-shrink-0">
                      {link.icon}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Address */}
            <div className="mt-5 pt-5 border-t border-white/5">
              <p className="text-dark-muted text-xs leading-relaxed">
                📍 {SITE_CONFIG.address}
              </p>
            </div>
          </div>

          {/* CTA block */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              SPMB {SITE_CONFIG.year}
            </h4>
            <div className="bg-white/5 rounded-3xl p-5 space-y-4">
              <div className="text-center">
                <div className="text-3xl mb-2">🎓</div>
                <p className="text-white font-semibold text-sm mb-1">Pendaftaran Terbuka</p>
                <p className="text-dark-muted text-xs">Hingga 31 Agustus 2025</p>
              </div>
              <a
                href={SITE_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-4 rounded-2xl bg-secondary text-white font-bold text-sm text-center shadow-gold hover:bg-secondary-light transition-all duration-300 hover:-translate-y-0.5"
              >
                Daftar Sekarang
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-4 rounded-2xl border border-white/15 text-dark-muted hover:text-white hover:border-white/30 font-medium text-sm text-center transition-all duration-300"
              >
                💬 Tanya via WA
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dark-muted text-xs">{FOOTER.copyright}</p>
          <div className="flex items-center gap-4 text-xs text-dark-muted">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Kebijakan Privasi
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Syarat & Ketentuan
            </a>
            <span>·</span>
            <span className="text-accent">Made with ❤️ for SMBN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
