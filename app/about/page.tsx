import type { Metadata } from 'next'
import Link from 'next/link'
import { getTeam, getServices } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'About Us — Velocity Motors',
  description:
    'Learn about Velocity Motors — our story, mission, and the passionate team behind Los Angeles\u2019 premier exotic sports car dealership.',
}

export default async function AboutPage() {
  const [team, services] = await Promise.all([getTeam(), getServices()])

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero / Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Fueled by Passion.{' '}
            <span className="text-brand-red">Driven by Excellence.</span>
          </h1>
          <p className="text-brand-muted text-lg sm:text-xl leading-relaxed">
            Velocity Motors was founded with a single mission: to connect
            enthusiasts with the world&apos;s most extraordinary machines. Based in
            Los Angeles, we curate a hand-picked selection of exotic and
            high-performance sports cars, backed by expert servicing and a team
            that lives and breathes automotive culture.
          </p>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-brand-dark-surface border-y border-brand-dark-border py-12 sm:py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">15+</p>
              <p className="text-brand-muted text-sm mt-1">Years of Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">500+</p>
              <p className="text-brand-muted text-sm mt-1">Cars Delivered</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">98%</p>
              <p className="text-brand-muted text-sm mt-1">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">24/7</p>
              <p className="text-brand-muted text-sm mt-1">Concierge Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              From Showroom Floor to Open Road
            </h2>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>
                What started as a small boutique garage in downtown LA has grown
                into one of Southern California&apos;s most respected exotic car
                dealerships. Our founder&apos;s childhood obsession with speed and
                design became the blueprint for Velocity Motors.
              </p>
              <p>
                Every vehicle in our inventory is personally inspected,
                road-tested, and certified before it reaches our showroom.
                We don&apos;t just sell cars — we match drivers with machines that
                reflect their personality and ambition.
              </p>
              <p>
                Today, we continue to raise the bar with world-class servicing,
                a growing team of automotive experts, and a client experience
                that&apos;s as refined as the cars we sell.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-dark-card border border-brand-dark-border">
              <img
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop&auto=format,compress"
                alt="Luxury sports car in a modern showroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brand-red rounded-xl p-4 sm:p-5 shadow-lg">
              <p className="text-white font-black text-2xl sm:text-3xl">2009</p>
              <p className="text-white/80 text-xs sm:text-sm font-medium">
                Year Founded
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
            What Drives Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Our Core Values
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-brand-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Trust &amp; Transparency</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Every vehicle comes with a full history report and honest
              appraisal. No hidden fees, no surprises — just straightforward
              dealings.
            </p>
          </div>
          <div className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-brand-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Performance First</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              We obsess over every detail — from engine specs to interior
              stitching. If it doesn&apos;t meet our standard, it doesn&apos;t make the
              floor.
            </p>
          </div>
          <div className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6 sm:p-8">
            <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-brand-red"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Client-Centric</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Your dream car journey is personal. Our concierge approach means
              dedicated attention from first enquiry to long-term ownership
              support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      {services.length > 0 && (
        <section className="bg-brand-dark-surface py-20 sm:py-28 mb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
                What We Offer
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Our Services
              </h2>
              <p className="mt-4 text-brand-muted max-w-xl mx-auto">
                Beyond sales, we provide a comprehensive suite of automotive
                services to keep your machine at its peak.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const imgUrl = service.metadata?.service_image?.imgix_url
                return (
                  <div
                    key={service.id}
                    className="bg-brand-dark-card border border-brand-dark-border rounded-2xl overflow-hidden card-hover"
                  >
                    {imgUrl && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={`${imgUrl}?w=600&h=340&fit=crop&auto=format,compress`}
                          alt={service.metadata?.service_name || service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {service.metadata?.service_name || service.title}
                      </h3>
                      {service.metadata?.description && (
                        <p className="text-brand-muted text-sm leading-relaxed line-clamp-3">
                          {service.metadata.description}
                        </p>
                      )}
                      {service.metadata?.starting_price && (
                        <p className="text-brand-red font-semibold text-sm mt-3">
                          From ${service.metadata.starting_price}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
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
      )}

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
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
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">👥</span>
            <p className="text-brand-muted text-lg">
              Team profiles coming soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => {
              const headshot = member.metadata?.headshot?.imgix_url
              return (
                <div
                  key={member.id}
                  className="bg-brand-dark-card border border-brand-dark-border rounded-2xl overflow-hidden card-hover"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-brand-dark-surface">
                    {headshot ? (
                      <img
                        src={`${headshot}?w=600&h=450&fit=crop&auto=format,compress`}
                        alt={member.metadata?.full_name || member.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-5xl">👤</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-white font-bold text-lg">
                      {member.metadata?.full_name || member.title}
                    </h3>
                    {member.metadata?.role && (
                      <p className="text-brand-red text-sm font-medium mt-0.5">
                        {member.metadata.role}
                      </p>
                    )}
                    {member.metadata?.bio && (
                      <p className="text-brand-muted text-sm leading-relaxed mt-3 line-clamp-3">
                        {member.metadata.bio}
                      </p>
                    )}
                    {member.metadata?.email && (
                      <a
                        href={`mailto:${member.metadata.email}`}
                        className="inline-block text-brand-muted hover:text-white text-xs mt-3 transition-colors"
                      >
                        {member.metadata.email}
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/team"
            className="inline-flex items-center px-6 py-3 border border-brand-dark-border text-white hover:bg-white/5 font-semibold rounded-lg transition-colors text-sm"
          >
            Full Team Page
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark-surface py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Visit Our <span className="text-brand-red">Showroom</span>
          </h2>
          <p className="text-brand-muted text-lg mb-4 max-w-2xl mx-auto">
            1200 Motorsport Drive, Los Angeles, CA 90015
          </p>
          <p className="text-brand-muted mb-8">
            Mon – Sat: 9 AM – 7 PM &bull; +1 (555) 987-6543
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cars"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-red hover:bg-brand-red-light text-white font-bold rounded-lg transition-colors text-base"
            >
              Explore Inventory
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-brand-dark-border text-white hover:bg-white/5 font-bold rounded-lg transition-colors text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}