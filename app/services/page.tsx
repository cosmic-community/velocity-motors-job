import type { Metadata } from 'next'
import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Services — Velocity Motors',
  description:
    'Performance tuning, detailing, inspections, and more. Expert services for exotic sports cars.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our Services
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl">
            From performance tuning to ceramic coating, our experts deliver
            specialized care for the world&apos;s finest automobiles.
          </p>
        </div>

        {/* Services Grid */}
        {services.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">🔧</span>
            <p className="text-brand-muted text-lg">
              Service details coming soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-brand-dark-card border border-brand-dark-border rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Need a Custom Service?
          </h2>
          <p className="text-brand-muted max-w-lg mx-auto mb-6">
            We offer bespoke packages tailored to your specific vehicle and
            requirements. Get in touch to discuss your needs.
          </p>
          <a
            href="mailto:info@velocitymotors.com"
            className="inline-flex items-center px-6 py-3 bg-brand-red hover:bg-brand-red-light text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}