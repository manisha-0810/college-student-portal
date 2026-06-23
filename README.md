# College Portal

A responsive student portal built with Next.js 15, TypeScript, and Tailwind CSS.

## Start locally

Install Node.js 18.18 or newer, then run:

```bash
npm install
npm run dev
```

Open http://localhost:3000. The login page accepts any email and password for the mock experience.

## Database (PostgreSQL + Prisma)

Copy `.env.example` to `.env`, update `DATABASE_URL` for your PostgreSQL database, then run:

```bash
npm install
npm run prisma:generate
npm run prisma:deploy
npm run prisma:seed
```

For local schema changes, use `npm run prisma:migrate -- --name your_migration_name`.

## Authentication

Students sign in with their USN and password. After running the seed script, use
`1CH24CS001` with password `student123`. Set a strong `AUTH_SECRET` in `.env`
for production (for example, generate one with `npx auth secret`).
