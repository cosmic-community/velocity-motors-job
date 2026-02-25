import Link from 'next/link'
import { getCars, getServices, getTeam } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import CarCard from '@/components/CarCard'
import ServiceCard from '@/components/ServiceCard'
import TeamCard from '@/components/TeamCard'

export default async function HomePage() {
  const [cars, services, team] = await Promise.all([
    getCars(),
    getServices(),
    getTeam(),
  ])

  // Pick a featured car image for the hero
  const heroCar = cars[0]
  const heroImage =
    heroCar?.metadata?.featured_image?.imgix_url ||
    'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&h=1080&fit=crop'

  return (
    <>
      {/* Hero */}
      <HeroSection
        imageUrl={heroImage}
        title="Drive Your Dream."
        subtitle="Curated exotic sports cars, expert servicing, and a team that lives and breathes performance."
      />

      {/* Featured Cars */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
                Inventory
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Featured Cars
              </h2>
            </div>
            <Link
              href="/cars"
              className="text-brand-muted hover:text-white text-sm font-medium transition-colors hidden sm:inline-flex items-center gap-1"
            >
              View all
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {cars.length === 0 ? (
            <p className="text-brand-muted text-center py-12">
              No cars available at the moment. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/cars"
              className="inline-flex items-center gap-1 text-brand-red font-semibold text-sm"
            >
              View all cars
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-brand-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Our Services
            </h2>
            <p className="mt-4 text-brand-muted max-w-xl mx-auto">
              From performance tuning to showroom-level detailing, we keep your
              exotic car in peak condition.
            </p>
          </div>

          {services.length === 0 ? (
            <p className="text-brand-muted text-center py-12">
              No services available at the moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 border border-brand-dark-border text-white hover:bg-white/5 font-semibold rounded-lg transition-colors text-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
              The Experts
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Meet Our Team
            </h2>
            <p className="mt-4 text-brand-muted max-w-xl mx-auto">
              Passionate professionals dedicated to delivering an exceptional
              ownership experience.
            </p>
          </div>

          {team.length === 0 ? (
            <p className="text-brand-muted text-center py-12">
              Team information coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/team"
              className="inline-flex items-center px-6 py-3 border border-brand-dark-border text-white hover:bg-white/5 font-semibold rounded-lg transition-colors text-sm"
            >
              Meet Everyone
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-brand-dark-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Find Your Next
            <span className="text-brand-red"> Supercar</span>?
          </h2>
          <p className="text-brand-muted text-lg mb-8 max-w-2xl mx-auto">
            Visit our showroom or browse our curated inventory online. Our team
            is ready to help you find the perfect machine.
          </p>
          <Link
            href="/cars"
            className="inline-flex items-center px-8 py-4 bg-brand-red hover:bg-brand-red-light text-white font-bold rounded-lg transition-colors text-base"
          >
            Explore Inventory
          </Link>
        </div>
      </section>
    </>
  )
}