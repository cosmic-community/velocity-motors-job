import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Velocity Motors',
  description:
    'Get in touch with the Velocity Motors team. We are here to help with inventory, services, and concierge requests.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed: Added contact page header */}
        <div className="mb-12 text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
            Let&apos;s Talk
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Contact Velocity Motors
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Tell us what you&apos;re looking for and our team will respond within one
            business day.
          </p>
        </div>

        {/* Changed: Added content grid for contact info + form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-2">Showroom</h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                1200 Motorsport Drive
                <br />
                Los Angeles, CA 90015
              </p>
            </div>

            <div className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-2">Call or Email</h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                +1 (555) 987-6543
                <br />
                info@velocitymotors.com
              </p>
            </div>

            <div className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-2">Hours</h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                Mon – Sat: 9 AM – 7 PM
                <br />
                Sunday: By appointment
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-black text-white mb-2">Send a Message</h2>
              <p className="text-brand-muted text-sm mb-6">
                Share your questions, preferred models, or service needs.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}