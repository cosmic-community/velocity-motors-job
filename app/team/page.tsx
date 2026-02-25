import type { Metadata } from 'next'
import { getTeam } from '@/lib/cosmic'
import TeamCard from '@/components/TeamCard'

export const metadata: Metadata = {
  title: 'Our Team — Velocity Motors',
  description:
    'Meet the passionate team behind Velocity Motors. Sales, service, and marketing experts.',
}

export default async function TeamPage() {
  const team = await getTeam()

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
            The Experts
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl">
            Our team brings decades of combined experience in luxury
            automotive sales, service, and marketing. We&apos;re here to make your
            ownership experience extraordinary.
          </p>
        </div>

        {/* Team Grid */}
        {team.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">👥</span>
            <p className="text-brand-muted text-lg">
              Team profiles coming soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}

        {/* Join CTA */}
        <div className="mt-16 bg-brand-dark-card border border-brand-dark-border rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Interested in Joining Our Team?
          </h2>
          <p className="text-brand-muted max-w-lg mx-auto mb-6">
            We&apos;re always looking for passionate automotive professionals. Reach
            out to learn about current openings.
          </p>
          <a
            href="mailto:careers@velocitymotors.com"
            className="inline-flex items-center px-6 py-3 bg-brand-red hover:bg-brand-red-light text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}