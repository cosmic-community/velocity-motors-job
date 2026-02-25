import Link from 'next/link'
import type { Car } from '@/types'
import AvailabilityBadge from '@/components/AvailabilityBadge'

interface CarCardProps {
  car: Car
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price)
}

function formatMileage(mileage: number): string {
  return new Intl.NumberFormat('en-US').format(mileage)
}

export default function CarCard({ car }: CarCardProps) {
  const { model, year, price, mileage, availability, featured_image } = car.metadata

  return (
    <Link href={`/cars/${car.slug}`} className="group block">
      <article className="bg-brand-dark-card border border-brand-dark-border rounded-2xl overflow-hidden card-hover">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          {featured_image ? (
            <img
              src={`${featured_image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={model}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width={400}
              height={250}
            />
          ) : (
            <div className="w-full h-full bg-brand-dark-surface flex items-center justify-center">
              <span className="text-4xl">🏎️</span>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <AvailabilityBadge availability={availability} />
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <h3 className="text-white font-bold text-lg leading-tight group-hover:text-brand-red transition-colors">
                {model}
              </h3>
              <p className="text-brand-muted text-sm mt-0.5">{year}</p>
            </div>
            <p className="text-brand-red font-bold text-lg whitespace-nowrap">
              {formatPrice(price)}
            </p>
          </div>

          {mileage !== undefined && mileage !== null && (
            <div className="flex items-center gap-1.5 text-brand-muted text-sm">
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              {formatMileage(mileage)} miles
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}