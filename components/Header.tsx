import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-brand-dark/80 backdrop-blur-md border-b border-brand-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-red rounded-lg flex items-center justify-center text-white font-black text-lg sm:text-xl group-hover:bg-brand-red-light transition-colors">
              V
            </div>
            <span className="text-white font-bold text-lg sm:text-xl tracking-tight">
              Velocity<span className="text-brand-red">Motors</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/cars"
              className="px-3 py-2 text-sm font-medium text-brand-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Cars
            </Link>
            <Link
              href="/services"
              className="px-3 py-2 text-sm font-medium text-brand-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Services
            </Link>
            <Link
              href="/team"
              className="px-3 py-2 text-sm font-medium text-brand-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-brand-muted hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}