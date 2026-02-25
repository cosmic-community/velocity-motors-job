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