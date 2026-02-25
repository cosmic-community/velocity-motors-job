// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type?: string;
  created_at?: string;
  modified_at?: string;
}

// Availability select-dropdown values (EXACT from content model)
export type AvailabilityKey = 'in_stock' | 'sold' | 'incoming';
export type AvailabilityValue = 'In Stock' | 'Sold' | 'Incoming';

export interface AvailabilityField {
  key: AvailabilityKey;
  value: AvailabilityValue;
}

// Car object type
export interface Car extends CosmicObject {
  metadata: {
    model: string;
    year: number;
    price: number;
    mileage?: number;
    availability: AvailabilityField;
    overview?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Service object type
export interface Service extends CosmicObject {
  metadata: {
    service_name: string;
    description: string;
    starting_price?: number;
    service_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Team member object type
export interface TeamMember extends CosmicObject {
  metadata: {
    full_name: string;
    role: string;
    bio?: string;
    email?: string;
    headshot?: {
      url: string;
      imgix_url: string;
    };
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Single object response
export interface CosmicSingleResponse<T> {
  object: T;
}