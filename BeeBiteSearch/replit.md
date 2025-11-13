# BeeBite.com - Affiliate Marketing Platform

## Overview

BeeBite.com is a friendly, bee-themed affiliate marketing website that connects users with top services across multiple verticals (real estate, insurance, income tax). The platform features a clean vertical directory homepage that lists all service categories. Each vertical page displays 3 carefully selected partners styled as authentic Google search results (blue clickable title links, green URLs, gray descriptions). Clicks generate affiliate revenue through partner links.

The application is a static React-based frontend with minimal backend infrastructure, designed for straightforward deployment and maintenance.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing library)
- **Styling**: Tailwind CSS with Shadcn UI component library
- **Build Tool**: Vite
- **State Management**: TanStack React Query for data fetching

**Design System:**
- Custom bee-themed branding with warm yellow/amber color palette
- Google-inspired search interface for familiarity and trust
- Typography: Poppins for headings/brand, Inter for body text
- Responsive design with mobile-first approach
- Consistent spacing using Tailwind's spacing scale

**Page Structure:**
- Homepage (`/`): Hero section with bee mascot, tagline, and vertical directory listing all categories with descriptions
- Vertical Landing Pages (`/realestate`, `/insurance`, `/incometax`): Sticky header, curated partner results styled as Google search results (blue links, green URLs, gray descriptions), footer
- 404 Page: Standard error handling

**Component Architecture:**
- Reusable UI components built with Radix UI primitives (via Shadcn)
- Custom components: 
  - `BeeHero`: Vertical directory homepage with category listings
  - `PageHeader`: Sticky header with category breadcrumb
  - `PageFooter`: Site footer with links and copyright
  - `ResultCard`: Google-style search results (blue title links #1a0dab, green URLs #006621, gray descriptions)
- Comprehensive UI component library imported from Shadcn (buttons, cards, dialogs, forms, etc.)

### Backend Architecture

**Server Implementation:**
- Minimal Express.js server primarily for development and static file serving
- Vite dev server middleware integration for hot module replacement during development
- Production build serves static files from `dist/public`

**Storage Layer:**
- In-memory storage implementation (`MemStorage` class) for user management
- Database schema defined using Drizzle ORM with PostgreSQL dialect
- Users table with UUID primary keys, username, and password fields
- Note: Current implementation uses memory storage; database integration is configured but not actively used

**API Design:**
- RESTful API structure (routes configured but minimal implementation)
- Storage interface pattern for CRUD operations
- Prepared for future database integration via Drizzle ORM

### Build & Deployment

**Build Process:**
- Client: Vite builds React application to `dist/public`
- Server: esbuild bundles Express server to `dist/index.js`
- Environment: NODE_ENV controls development vs production behavior

**Development Workflow:**
- `npm run dev`: Runs development server with HMR
- `npm run build`: Creates production builds for client and server
- `npm run start`: Runs production server
- `npm run db:push`: Pushes database schema changes (Drizzle Kit)

**Path Aliases:**
- `@/`: Maps to `client/src/`
- `@shared/`: Maps to `shared/`
- `@assets/`: Maps to `attached_assets/`

## External Dependencies

### UI Component Library
- **Radix UI**: Headless UI component primitives providing accessibility and behavior
- **Shadcn UI**: Pre-styled component library built on Radix UI with Tailwind CSS
- **Lucide React**: Icon library for consistent iconography

### Data & State Management
- **TanStack React Query**: Server state management and data fetching
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation and type safety
- **Drizzle Zod**: Integration between Drizzle ORM and Zod schemas

### Database & ORM
- **Drizzle ORM**: TypeScript ORM for database operations
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **Drizzle Kit**: CLI tool for database migrations and schema management
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS transformation tool
- **Autoprefixer**: Automatic vendor prefix addition
- **class-variance-authority**: Utility for creating variant-based component APIs
- **tailwind-merge**: Intelligent Tailwind class merging
- **clsx**: Conditional className composition

### Development Tools
- **TypeScript**: Type safety and developer experience
- **Vite**: Fast build tool and development server
- **ESBuild**: JavaScript bundler for server-side code
- **TSX**: TypeScript execution for development server
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Code navigation (Replit environment)
- **@replit/vite-plugin-dev-banner**: Development banner (Replit environment)

### Additional Libraries
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider functionality
- **nanoid**: Unique ID generation
- **vaul**: Drawer component library
- **input-otp**: OTP input component
- **react-day-picker**: Date picker component
- **react-resizable-panels**: Resizable panel layouts
- **recharts**: Charting library

### Fonts
- **Google Fonts**: Poppins (display), Inter (body), additional fonts loaded via CDN

### Deployment Target
- **Netlify**: Specified in documentation as deployment platform