import Link from 'next/link'

interface HeroSectionProps {
  imageUrl: string
  title: string
  subtitle: string
}

export default function HeroSection({ imageUrl, title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative h-[85vh] sm:h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${imageUrl}?w=1920&h=1080&fit=crop&auto=format,compress`}
          alt="Hero car"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="gradient-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-brand-muted mb-8 max-w-lg">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/cars"
              className="inline-flex items-center px-6 py-3 bg-brand-red hover:bg-brand-red-light text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
            >
              View Inventory
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors text-sm sm:text-base"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}