# Express Project

This is an Express 5 API with TypeScript and Prisma.

## Commands

- `npm run dev` - Start dev server with hot reload
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run build` - Compile TypeScript
- `npx prisma studio` - Open Prisma database GUI

## Architecture

- **Routes** in `src/routes/` define API endpoints
- **Middleware** in `src/middleware/` for auth, validation, etc.
- **Services** in `src/services/` contain business logic
- **Prisma schema** in `prisma/schema.prisma` defines the database

## Conventions

- Use async/await for all async operations
- Validate requests with zod or express-validator
- Keep route handlers thin - delegate to services
- Use Prisma client for all database operations
- Return consistent JSON response format

## Error Handling

- Throw errors in services, catch in error middleware
- Use custom error classes for different error types
- Always return JSON with `error` field on failure

## Database

- PostgreSQL via Prisma
- Run `npx prisma migrate dev` to create migrations
- Run `npx prisma generate` after schema changes
