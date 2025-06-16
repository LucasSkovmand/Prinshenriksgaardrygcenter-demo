# Replit.md

## Overview

This is a full-stack web application for "Prins Henriks Gård Rygcenter" (a Danish spine treatment center). The application serves as a professional website showcasing services, team members, testimonials, and includes a contact form for patient inquiries. The architecture follows a modern monorepo pattern with a React frontend and Express.js backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: TailwindCSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: tsx for TypeScript execution in development

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend API
├── shared/          # Shared types and schemas
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Frontend Components
- **Layout Components**: Header with navigation, Footer with contact info
- **Page Sections**: Hero, Services, Team, Testimonials, About, Contact
- **UI Library**: Complete shadcn/ui component set including forms, dialogs, cards, etc.
- **Animations**: Framer Motion for smooth page transitions and scroll animations

### Backend Services
- **API Routes**: RESTful endpoints for contact form submissions
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Middleware**: Request logging, JSON parsing, CORS handling
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Contact Submissions**: Stores patient inquiry form data with fields for name, email, phone, treatment type, and message
- **Schema Validation**: Zod schemas for runtime type checking and validation

## Data Flow

1. **User Interaction**: Users interact with the React frontend components
2. **Form Submission**: Contact forms are validated client-side and submitted via TanStack Query
3. **API Processing**: Express.js receives requests, validates data using Zod schemas
4. **Data Storage**: Validated submissions are stored using the storage abstraction layer
5. **Response Handling**: Success/error responses are handled by React Query and displayed via toast notifications

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React-DOM, React Query)
- Express.js with TypeScript support
- Vite for build tooling and development server

### Database & ORM
- Drizzle ORM for database operations
- Neon Database as PostgreSQL provider
- Drizzle Kit for schema management and migrations

### UI & Styling
- TailwindCSS for styling
- shadcn/ui component library
- Radix UI primitives for accessible components
- Framer Motion for animations
- Lucide React for icons

### Development Tools
- TypeScript for type safety
- PostCSS for CSS processing
- ESBuild for production bundling

## Deployment Strategy

### Development Environment
- **Server**: Runs on port 5000 with hot reload via tsx
- **Client**: Vite dev server with HMR (Hot Module Replacement)
- **Database**: Connected to Neon Database via DATABASE_URL environment variable

### Production Deployment
- **Build Process**: 
  1. Vite builds the React app to `dist/public`
  2. ESBuild bundles the Express server to `dist/index.js`
- **Deployment Target**: Replit autoscale deployment
- **Port Configuration**: External port 80 maps to local port 5000
- **Static Assets**: Express serves built React app as static files

### Environment Configuration
- **Development**: NODE_ENV=development with full logging and HMR
- **Production**: NODE_ENV=production with optimized builds and minimal logging
- **Database**: Requires DATABASE_URL environment variable for PostgreSQL connection

## Changelog

```
Changelog:
- June 16, 2025. Initial setup - Created Danish spine clinic website
- June 16, 2025. Address updated - Changed clinic address from Aabenraa to Sønderborg per user request
- June 16, 2025. Hero button fixed - Made "Læs mere om os" button always visible
- June 16, 2025. Debug completed - Fixed type errors and tested API functionality
- June 16, 2025. Team image fixed - Updated Maria Sørensen's profile image URL
- June 16, 2025. Interactive map added - Implemented Google Maps with Sønderborg address
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```