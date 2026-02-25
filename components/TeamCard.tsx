import type { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  const { full_name, role, bio, email, headshot } = member.metadata

  return (
    <article className="group bg-brand-dark-card border border-brand-dark-border rounded-2xl overflow-hidden card-hover text-center">
      {/* Headshot */}
      <div className="relative aspect-[3/4] overflow-hidden">
        {headshot ? (
          <img
            src={`${headshot.imgix_url}?w=600&h=800&fit=crop&auto=format,compress`}
            alt={full_name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={300}
            height={400}
          />
        ) : (
          <div className="w-full h-full bg-brand-dark-surface flex items-center justify-center">
            <span className="text-6xl">👤</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-card via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 -mt-12 relative z-10">
        <h3 className="text-white font-bold text-xl mb-1">{full_name}</h3>
        <p className="text-brand-red font-medium text-sm mb-3">{role}</p>
        {bio && (
          <p className="text-brand-muted text-sm leading-relaxed mb-4">
            {bio}
          </p>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-1.5 text-brand-muted hover:text-brand-red text-sm transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            {email}
          </a>
        )}
      </div>
    </article>
  )
}