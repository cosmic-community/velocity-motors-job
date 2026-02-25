import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <span className="text-7xl block mb-6">🏎️</span>
        <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
          404
        </h1>
        <p className="text-brand-muted text-lg mb-8">
          This page has left the showroom. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-brand-red hover:bg-brand-red-light text-white font-semibold rounded-lg transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}