# Velocity Motors — Sports Car Dealership

![Velocity Motors](https://imgix.cosmicjs.com/f5856950-a455-11ed-81f2-f50e185dd248-NRQV-hBF10M.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A premium sports car dealership website built with Next.js 16 and Cosmic. Showcases exotic vehicles, professional automotive services, and the dealership team — all powered by dynamic content from your Cosmic bucket.

## Features

- 🏎️ **Dynamic Car Inventory** — Browse exotic cars with availability filtering
- 📄 **Car Detail Pages** — Individual pages with full specs, pricing, and imagery
- 🔧 **Services Showcase** — Display dealership services with starting prices
- 👥 **Team Profiles** — Meet the experts with photos, bios, and roles
- ⚡ **Server-Side Rendering** — Fast loads with Next.js 16 App Router
- 📱 **Fully Responsive** — Seamless experience on all devices
- 🎨 **Dark Luxury Theme** — Premium aesthetic with red accent highlights

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=699e85cf841e75cad4da83f9&clone_repository=699e8faf546307d872ee9cd1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Sports car dealership with cars, services, team"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [Cosmic](https://www.cosmicjs.com) — Headless CMS for content management ([Docs](https://www.cosmicjs.com/docs))
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [TypeScript 5](https://www.typescriptlang.org/) — Type-safe JavaScript

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) runtime installed
- A [Cosmic](https://www.cosmicjs.com) account with the sports car dealership bucket

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd velocity-motors

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Cosmic credentials

# Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

### Fetching all cars

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: cars } = await cosmic.objects
  .find({ type: 'cars' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a single car by slug

```typescript
const { object: car } = await cosmic.objects
  .findOne({ type: 'cars', slug: 'porsche-911-turbo-s' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching services

```typescript
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses three Cosmic object types:

| Object Type | Fields | Description |
|-------------|--------|-------------|
| **Cars** | model, year, price, mileage, availability, overview, featured_image | Vehicle inventory |
| **Services** | service_name, description, starting_price, service_image | Dealership services |
| **Team** | full_name, role, bio, email, headshot | Staff members |

All content is managed through the [Cosmic dashboard](https://app.cosmicjs.com) and fetched server-side for optimal performance.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add your environment variables (COSMIC_BUCKET_SLUG, COSMIC_READ_KEY, COSMIC_WRITE_KEY)
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import on [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->