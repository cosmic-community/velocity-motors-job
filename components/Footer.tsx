import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark border-t border-brand-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white font-black text-lg">
                V
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Velocity<span className="text-brand-red">Motors</span>
              </span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed mb-5">
              Premium exotic sports cars. Performance services. Expert team.
            </p>
            {/* Social media links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-lg bg-brand-dark-surface border border-brand-dark-border flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-red/50 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-lg bg-brand-dark-surface border border-brand-dark-border flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-red/50 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="w-9 h-9 rounded-lg bg-brand-dark-surface border border-brand-dark-border flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-red/50 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on YouTube"
                className="w-9 h-9 rounded-lg bg-brand-dark-surface border border-brand-dark-border flex items-center justify-center text-brand-muted hover:text-white hover:border-brand-red/50 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cars"
                  className="text-brand-muted hover:text-white text-sm transition-colors"
                >
                  Car Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-brand-muted hover:text-white text-sm transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-brand-muted hover:text-white text-sm transition-colors"
                >
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-brand-muted hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-muted hover:text-white text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              {/* Changed: Added Terms link */}
              <li>
                <Link
                  href="/terms"
                  className="text-brand-muted hover:text-white text-sm transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-brand-muted text-sm">
              <li>info@velocitymotors.com</li>
              <li>+1 (555) 987-6543</li>
              <li>Mon – Sat: 9 AM – 7 PM</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Location
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              1200 Motorsport Drive
              <br />
              Los Angeles, CA 90015
            </p>
          </div>
        </div>

        <div className="border-t border-brand-dark-border mt-10 pt-8 text-center">
          <p className="text-brand-muted text-sm">
            © {currentYear} Velocity Motors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}