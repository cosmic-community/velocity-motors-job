import type { Metadata } from 'next'
import Link from 'next/link'
import { getTeam, getServices, getAboutPage } from '@/lib/cosmic'
import type { AboutStat, AboutValue } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'About Us — Velocity Motors',
  description:
    'Learn about Velocity Motors — our story, mission, and the passionate team behind Los Angeles\u2019 premier exotic sports car dealership.',
}

// Default fallback content when Cosmic object is not yet created
const defaultStats: AboutStat[] = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Cars Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Concierge Support' },
]

const defaultValues: AboutValue[] = [
  {
    title: 'Trust & Transparency',
    description:
      'Every vehicle comes with a full history report and honest appraisal. No hidden fees, no surprises — just straightforward dealings.',
  },
  {
    title: 'Performance First',
    description:
      "We obsess over every detail — from engine specs to interior stitching. If it doesn\u2019t meet our standard, it doesn\u2019t make the floor.",
  },
  {
    title: 'Client-Centric',
    description:
      'Your dream car journey is personal. Our concierge approach means dedicated attention from first enquiry to long-term ownership support.',
  },
]

// SVG icons for the values section
const valueIcons = [
  // Shield / Trust
  <svg
    key="trust"
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
  </svg>,
  // Lightning / Performance
  <svg
    key="performance"
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
  </svg>,
  // People / Client
  <svg
    key="client"
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
  </svg>,
]

// Changed: Helper to safely split heading text with period separator
function splitHeadingByPeriod(heading: string): { before: string; after: string } | null {
  const parts = heading.split('.')
  const firstPart = parts[0]
  if (!firstPart || parts.length < 2) return null
  const afterPart = parts.slice(1).join('.').trim()
  if (!afterPart) return null
  return { before: firstPart, after: afterPart }
}

// Changed: Helper to safely split heading text by last word
function splitHeadingByLastWord(heading: string): { before: string; lastWord: string } | null {
  const words = heading.split(' ')
  if (words.length < 2) return null
  const lastWord = words[words.length - 1]
  if (!lastWord) return null
  const before = words.slice(0, -1).join(' ')
  return { before, lastWord }
}

export default async function AboutPage() {
  const [team, services, aboutPage] = await Promise.all([
    getTeam(),
    getServices(),
    getAboutPage(),
  ])

  // Use Cosmic content with fallbacks
  const heroTagline = aboutPage?.metadata?.hero_tagline || 'About Us'
  const heroHeading =
    aboutPage?.metadata?.hero_heading ||
    'Fueled by Passion. Driven by Excellence.'
  const heroDescription =
    aboutPage?.metadata?.hero_description ||
    'Velocity Motors was founded with a single mission: to connect enthusiasts with the world\u2019s most extraordinary machines. Based in Los Angeles, we curate a hand-picked selection of exotic and high-performance sports cars, backed by expert servicing and a team that lives and breathes automotive culture.'

  const stats: AboutStat[] =
    aboutPage?.metadata?.stats && aboutPage.metadata.stats.length > 0
      ? aboutPage.metadata.stats
      : defaultStats

  const storyHeading =
    aboutPage?.metadata?.story_heading || 'From Showroom Floor to Open Road'
  const storyContent =
    aboutPage?.metadata?.story_content ||
    'What started as a small boutique garage in downtown LA has grown into one of Southern California\u2019s most respected exotic car dealerships. Our founder\u2019s childhood obsession with speed and design became the blueprint for Velocity Motors.\n\nEvery vehicle in our inventory is personally inspected, road-tested, and certified before it reaches our showroom. We don\u2019t just sell cars \u2014 we match drivers with machines that reflect their personality and ambition.\n\nToday, we continue to raise the bar with world-class servicing, a growing team of automotive experts, and a client experience that\u2019s as refined as the cars we sell.'

  const storyImageUrl =
    aboutPage?.metadata?.story_image?.imgix_url ||
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7'
  const yearFounded = aboutPage?.metadata?.year_founded || '2009'

  const values: AboutValue[] =
    aboutPage?.metadata?.values && aboutPage.metadata.values.length > 0
      ? aboutPage.metadata.values
      : defaultValues

  const ctaHeading = aboutPage?.metadata?.cta_heading || 'Visit Our Showroom'
  const ctaAddress =
    aboutPage?.metadata?.cta_address ||
    '1200 Motorsport Drive, Los Angeles, CA 90015'
  const ctaHours =
    aboutPage?.metadata?.cta_hours || 'Mon – Sat: 9 AM – 7 PM'
  const ctaPhone = aboutPage?.metadata?.cta_phone || '+1 (555) 987-6543'

  // Split story content by double newlines into paragraphs
  const storyParagraphs = storyContent
    .split('\n\n')
    .filter((p) => p.trim().length > 0)

  // Changed: Use safe heading split helpers
  const heroSplit = splitHeadingByPeriod(heroHeading)
  const ctaSplit = splitHeadingByLastWord(ctaHeading)

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero / Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
            {heroTagline}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            {/* Changed: Use safe split helper instead of direct array access */}
            {heroSplit ? (
              <>
                {heroSplit.before}.{' '}
                <span className="text-brand-red">
                  {heroSplit.after}
                </span>
              </>
            ) : (
              heroHeading
            )}
          </h1>
          <p className="text-brand-muted text-lg sm:text-xl leading-relaxed">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-brand-dark-surface border-y border-brand-dark-border py-12 sm:py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl sm:text-4xl font-black text-white">
                  {stat.value}
                </p>
                <p className="text-brand-muted text-sm mt-1">{stat.label}</p>
              </div>
            ))}
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
              {storyHeading}
            </h2>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              {storyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-dark-card border border-brand-dark-border">
              <img
                src={`${storyImageUrl}?w=800&h=600&fit=crop&auto=format,compress`}
                alt="Luxury sports car in a modern showroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brand-red rounded-xl p-4 sm:p-5 shadow-lg">
              <p className="text-white font-black text-2xl sm:text-3xl">
                {yearFounded}
              </p>
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
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6 sm:p-8"
            >
              <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4">
                {valueIcons[index % valueIcons.length]}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {value.title}
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
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
            {/* Changed: Use safe split helper instead of direct array access */}
            {ctaSplit ? (
              <>
                {ctaSplit.before}{' '}
                <span className="text-brand-red">
                  {ctaSplit.lastWord}
                </span>
              </>
            ) : (
              ctaHeading
            )}
          </h2>
          <p className="text-brand-muted text-lg mb-4 max-w-2xl mx-auto">
            {ctaAddress}
          </p>
          <p className="text-brand-muted mb-8">
            {ctaHours} &bull; {ctaPhone}
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