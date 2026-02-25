import type { AvailabilityField } from '@/types'

interface AvailabilityBadgeProps {
  availability: AvailabilityField
  size?: 'sm' | 'md'
}

export default function AvailabilityBadge({
  availability,
  size = 'sm',
}: AvailabilityBadgeProps) {
  const baseClasses =
    size === 'sm'
      ? 'px-2.5 py-1 text-xs font-semibold rounded-full'
      : 'px-3.5 py-1.5 text-sm font-semibold rounded-full'

  let colorClasses = ''

  switch (availability.key) {
    case 'in_stock':
      colorClasses = 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
      break
    case 'incoming':
      colorClasses = 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
      break
    case 'sold':
      colorClasses = 'bg-red-500/20 text-red-400 border border-red-500/30'
      break
    default:
      colorClasses = 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
  }

  return (
    <span className={`${baseClasses} ${colorClasses} inline-flex items-center gap-1.5`}>
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          availability.key === 'in_stock'
            ? 'bg-emerald-400'
            : availability.key === 'incoming'
              ? 'bg-amber-400'
              : 'bg-red-400'
        }`}
      />
      {availability.value}
    </span>
  )
}