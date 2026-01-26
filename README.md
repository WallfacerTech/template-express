# Express Template

Minimal Node.js API with Express and TypeScript.

## Stack

- **Node.js 22**
- **Express 5** for API framework
- **TypeScript** for type safety
- **Prisma** for database ORM
- **PostgreSQL** database
- **Jest** for testing

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev

# Open http://localhost:3000
```

## Development

```bash
# Run tests
npm test

# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── src/
│   ├── routes/         # Route handlers
│   ├── middleware/     # Express middleware
│   ├── services/       # Business logic
│   └── index.ts        # Application entry point
├── prisma/
│   └── schema.prisma   # Database schema
└── tests/              # Test suite
```
