import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { service_name, description, starting_price, service_image } =
    service.metadata

  return (
    <article className="group bg-brand-dark-card border border-brand-dark-border rounded-2xl overflow-hidden card-hover">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        {service_image ? (
          <img
            src={`${service_image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={service_name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={225}
          />
        ) : (
          <div className="w-full h-full bg-brand-dark-surface flex items-center justify-center">
            <span className="text-4xl">🔧</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-card/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-bold text-xl mb-2 group-hover:text-brand-red transition-colors">
          {service_name}
        </h3>
        <p className="text-brand-muted text-sm leading-relaxed mb-4">
          {description}
        </p>
        {starting_price !== undefined && starting_price !== null && (
          <div className="flex items-center gap-2">
            <span className="text-brand-muted text-sm">Starting from</span>
            <span className="text-brand-red font-bold text-lg">
              {formatPrice(starting_price)}
            </span>
          </div>
        )}
      </div>
    </article>
  )
}