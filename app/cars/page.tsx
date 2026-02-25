import type { Metadata } from 'next'
import { getCars } from '@/lib/cosmic'
import CarCard from '@/components/CarCard'

export const metadata: Metadata = {
  title: 'Car Inventory — Velocity Motors',
  description:
    'Browse our curated collection of exotic sports cars. Porsche, Ferrari, Lamborghini, and more.',
}

export default async function CarsPage() {
  const cars = await getCars()

  // Separate by availability
  const inStock = cars.filter((c) => c.metadata.availability.key === 'in_stock')
  const incoming = cars.filter((c) => c.metadata.availability.key === 'incoming')
  const sold = cars.filter((c) => c.metadata.availability.key === 'sold')

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
            Inventory
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our Cars
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl">
            Each vehicle in our collection is hand-selected for performance,
            heritage, and condition. Explore what&apos;s available.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-brand-dark-card border border-brand-dark-border rounded-xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400">
              {inStock.length}
            </p>
            <p className="text-brand-muted text-sm mt-1">In Stock</p>
          </div>
          <div className="bg-brand-dark-card border border-brand-dark-border rounded-xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-black text-amber-400">
              {incoming.length}
            </p>
            <p className="text-brand-muted text-sm mt-1">Incoming</p>
          </div>
          <div className="bg-brand-dark-card border border-brand-dark-border rounded-xl p-4 text-center">
            <p className="text-2xl sm:text-3xl font-black text-red-400">
              {sold.length}
            </p>
            <p className="text-brand-muted text-sm mt-1">Sold</p>
          </div>
        </div>

        {/* All Cars */}
        {cars.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl mb-4 block">🏎️</span>
            <p className="text-brand-muted text-lg">
              No cars in inventory right now. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}