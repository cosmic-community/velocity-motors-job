import { createBucketClient } from '@cosmicjs/sdk'
import type { Car, Service, TeamMember } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging',
})

// Helper for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// About page types
export interface AboutStat {
  value: string
  label: string
}

export interface AboutValue {
  title: string
  description: string
}

export interface AboutPage {
  id: string
  title: string
  slug: string
  metadata: {
    hero_tagline: string
    hero_heading: string
    hero_description: string
    stats: AboutStat[]
    story_heading: string
    story_content: string
    story_image?: {
      url: string
      imgix_url: string
    }
    year_founded: string
    values: AboutValue[]
    cta_heading: string
    cta_address: string
    cta_hours: string
    cta_phone: string
  }
}

// Terms page types
export interface TermsSection {
  heading: string
  body: string
}

export interface TermsPage {
  id: string
  title: string
  slug: string
  metadata: {
    page_title: string
    last_updated: string
    intro: string
    sections: TermsSection[]
  }
}

// Fetch all cars
export async function getCars(): Promise<Car[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'cars' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Car[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch cars')
  }
}

// Fetch a single car by slug
export async function getCarBySlug(slug: string): Promise<Car | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'cars', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as Car
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch car')
  }
}

// Fetch all services
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Service[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch services')
  }
}

// Fetch all team members
export async function getTeam(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as TeamMember[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}

// Fetch the About page singleton
export async function getAboutPage(): Promise<AboutPage | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'about-page', slug: 'about' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as AboutPage
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch about page')
  }
}

// Changed: Added function to fetch the Terms page singleton
export async function getTermsPage(): Promise<TermsPage | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'terms-page', slug: 'terms' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as TermsPage
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch terms page')
  }
}