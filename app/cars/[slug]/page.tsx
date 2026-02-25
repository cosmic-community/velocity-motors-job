// app/cars/[slug]/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCarBySlug, getCars } from '@/lib/cosmic'
import AvailabilityBadge from '@/components/AvailabilityBadge'

interface CarDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: CarDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const car = await getCarBySlug(slug)

  if (!car) {
    return { title: 'Car Not Found — Velocity Motors' }
  }

  return {
    title: `${car.metadata.model} — Velocity Motors`,
    description: car.metadata.overview || `${car.metadata.year} ${car.metadata.model} for sale at Velocity Motors.`,
  }
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

export default async function CarDetailPage({ params }: CarDetailPageProps) {
  const { slug } = await params
  const car = await getCarBySlug(slug)

  if (!car) {
    notFound()
  }

  const { model, year, price, mileage, availability, overview, featured_image } =
    car.metadata

  // Get other cars for suggestions
  const allCars = await getCars()
  const otherCars = allCars.filter((c) => c.slug !== slug).slice(0, 2)

  return (
    <div className="pt-20 sm:pt-24 pb-20">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/cars"
          className="inline-flex items-center gap-1.5 text-brand-muted hover:text-white text-sm transition-colors"
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
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Inventory
        </Link>
      </div>

      {/* Hero Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative aspect-[16/7] rounded-2xl overflow-hidden bg-brand-dark-card">
          {featured_image ? (
            <img
              src={`${featured_image.imgix_url}?w=1400&h=612&fit=crop&auto=format,compress`}
              alt={model}
              className="w-full h-full object-cover"
              width={1400}
              height={612}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-7xl">🏎️</span>
            </div>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-start gap-3 mb-4">
              <AvailabilityBadge availability={availability} size="md" />
              <span className="text-brand-muted text-sm bg-brand-dark-surface px-3 py-1.5 rounded-full border border-brand-dark-border">
                {year}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              {model}
            </h1>

            {overview && (
              <div className="mb-8">
                <h2 className="text-white font-semibold text-lg mb-3">
                  Overview
                </h2>
                <p className="text-brand-muted leading-relaxed text-base">
                  {overview}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6 sticky top-28">
              <p className="text-brand-red font-black text-3xl mb-6">
                {formatPrice(price)}
              </p>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-brand-dark-border">
                  <span className="text-brand-muted text-sm">Year</span>
                  <span className="text-white font-semibold">{year}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-brand-dark-border">
                  <span className="text-brand-muted text-sm">Model</span>
                  <span className="text-white font-semibold">{model}</span>
                </div>
                {mileage !== undefined && mileage !== null && (
                  <div className="flex justify-between items-center py-3 border-b border-brand-dark-border">
                    <span className="text-brand-muted text-sm">Mileage</span>
                    <span className="text-white font-semibold">
                      {formatMileage(mileage)} mi
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3">
                  <span className="text-brand-muted text-sm">Status</span>
                  <AvailabilityBadge availability={availability} />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:info@velocitymotors.com"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-light text-white font-semibold rounded-lg transition-colors text-sm"
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
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Inquire Now
                </a>
                <a
                  href="tel:+15559876543"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-brand-dark-border text-white hover:bg-white/5 font-semibold rounded-lg transition-colors text-sm"
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
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Cars */}
        {otherCars.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-black text-white mb-6">
              Other Cars You May Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherCars.map((otherCar) => {
                const img = otherCar.metadata.featured_image
                return (
                  <Link
                    key={otherCar.id}
                    href={`/cars/${otherCar.slug}`}
                    className="group flex gap-4 bg-brand-dark-card border border-brand-dark-border rounded-xl p-4 hover:border-brand-red/30 transition-colors"
                  >
                    <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      {img ? (
                        <img
                          src={`${img.imgix_url}?w=256&h=192&fit=crop&auto=format,compress`}
                          alt={otherCar.metadata.model}
                          className="w-full h-full object-cover"
                          width={128}
                          height={96}
                        />
                      ) : (
                        <div className="w-full h-full bg-brand-dark-surface flex items-center justify-center">
                          <span className="text-2xl">🏎️</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-white font-bold group-hover:text-brand-red transition-colors">
                        {otherCar.metadata.model}
                      </h3>
                      <p className="text-brand-muted text-sm">
                        {otherCar.metadata.year}
                      </p>
                      <p className="text-brand-red font-bold mt-1">
                        {formatPrice(otherCar.metadata.price)}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}