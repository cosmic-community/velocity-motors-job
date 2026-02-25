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
            <p className="text-brand-muted text-sm leading-relaxed">
              Premium exotic sports cars. Performance services. Expert team.
            </p>
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