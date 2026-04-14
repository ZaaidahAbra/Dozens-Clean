# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### Dozens Bakery (`artifacts/dozens-bakery`)
- **Type**: React + Vite (frontend-only, no backend)
- **Preview path**: `/`
- **Stack**: React, TypeScript, Tailwind CSS, Lucide Icons, Wouter
- **Features**:
  - Full-page bakery website with hero, product menu, about, hours, contact sections
  - WhatsApp cart system — aggregates items and opens pre-filled WhatsApp link to +27640059855
  - Product catalog with 17 items across 3 categories (Sweet Packs, Cakes & Loaves, Bakery Staples)
  - Search and category filter on menu
  - "Fresh" / "Frozen" tags per product
  - Opening hours display with live "Open/Closed" status
  - Google Maps embed for Unit 5, 98a Bofors Circle, Epping 2, Cape Town
  - Contact section with Call and WhatsApp buttons
  - "Proudly Reopened" corner ribbon badge
  - LocalBusiness JSON-LD schema for SEO
  - Full SEO meta tags (Open Graph, Twitter Card, Geo)
  - Barlow Condensed bold font for headings, Inter for body
  - Brand colors: Golden #FBB03B, Chocolate #3C2415, Cream #FDF5E6
  - Mobile-first responsive design
