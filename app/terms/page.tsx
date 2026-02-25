import type { Metadata } from 'next'
import Link from 'next/link'
import { getTermsPage } from '@/lib/cosmic'
import type { TermsSection } from '@/lib/cosmic'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Velocity Motors',
  description:
    'Read the terms and conditions for Velocity Motors — covering vehicle sales, services, website usage, and more.',
}

// Default fallback content when Cosmic object is not yet created
const defaultIntro =
  'Welcome to Velocity Motors. By accessing our website, visiting our showroom, or using any of our services, you agree to be bound by the following terms and conditions. Please read them carefully before proceeding.'

const defaultSections: TermsSection[] = [
  {
    heading: 'General',
    body: 'These Terms & Conditions ("Terms") govern your use of the Velocity Motors website, showroom, and all related services. By engaging with any of our offerings, you acknowledge that you have read, understood, and agree to be bound by these Terms. Velocity Motors reserves the right to update or modify these Terms at any time without prior notice. Your continued use of our services following any changes constitutes acceptance of the revised Terms.',
  },
  {
    heading: 'Vehicle Sales',
    body: 'All vehicles listed on our website or displayed in our showroom are subject to availability. Pricing is accurate at the time of publication but may change without notice. A completed purchase agreement and applicable deposit are required to reserve any vehicle. Velocity Motors makes every effort to ensure accurate descriptions and imagery; however, minor variations may occur. All sales are final unless otherwise agreed upon in writing.',
  },
  {
    heading: 'Service & Maintenance',
    body: 'Service appointments are scheduled based on availability. Velocity Motors provides estimated completion times and costs; however, actual timelines and pricing may vary depending on the scope of work discovered during inspection. Customers will be notified of any additional work required before it is performed. Velocity Motors is not liable for delays caused by parts availability or unforeseen mechanical issues.',
  },
  {
    heading: 'Website Usage',
    body: 'All content on this website — including text, images, logos, and design — is the property of Velocity Motors and protected by applicable intellectual property laws. You may not reproduce, distribute, or otherwise use any content without prior written consent. We make no guarantees regarding the uninterrupted availability of the website and reserve the right to modify or discontinue any feature at any time.',
  },
  {
    heading: 'Limitation of Liability',
    body: 'To the fullest extent permitted by law, Velocity Motors shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website, services, or vehicles. Our total liability for any claim shall not exceed the amount paid by you for the specific product or service giving rise to the claim.',
  },
  {
    heading: 'Privacy',
    body: 'Velocity Motors respects your privacy and is committed to protecting your personal information. Any data collected through our website or during business interactions will be handled in accordance with applicable data protection laws. We do not sell or share your personal information with third parties except as necessary to fulfill our services or as required by law.',
  },
  {
    heading: 'Contact',
    body: 'If you have any questions or concerns regarding these Terms & Conditions, please contact us at info@velocitymotors.com or visit our showroom at 1200 Motorsport Drive, Los Angeles, CA 90015. Our team is available Monday through Saturday, 9 AM to 7 PM.',
  },
]

export default async function TermsPage() {
  const termsPage = await getTermsPage()

  // Use Cosmic content with fallbacks
  const pageTitle = termsPage?.metadata?.page_title || 'Terms & Conditions'
  const lastUpdated = termsPage?.metadata?.last_updated || new Date().toISOString().split('T')[0]
  const intro = termsPage?.metadata?.intro || defaultIntro

  const sections: TermsSection[] =
    termsPage?.metadata?.sections && termsPage.metadata.sections.length > 0
      ? termsPage.metadata.sections
      : defaultSections

  // Format the date for display
  const formattedDate = new Date(lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="mb-8">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wider mb-2">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {pageTitle}
          </h1>
          <p className="text-brand-muted text-sm">
            Last updated: {formattedDate}
          </p>
        </div>

        {/* Intro */}
        <p className="text-brand-muted text-lg leading-relaxed">
          {intro}
        </p>
      </section>

      {/* Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-brand-dark-card border border-brand-dark-border rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-red/10 text-brand-red rounded-lg flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <div>
                  <h2 className="text-white font-bold text-lg sm:text-xl mb-3">
                    {section.heading}
                  </h2>
                  <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
                    {section.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark-surface border border-brand-dark-border rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-brand-muted max-w-lg mx-auto mb-6">
            If you need clarification on any of our terms, our team is happy to
            help. Reach out anytime.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-brand-red hover:bg-brand-red-light text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}