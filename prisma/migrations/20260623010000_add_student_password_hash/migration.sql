-- Add a hashed-password field for credentials authentication.
-- Reseed after this migration so every demo student receives a valid hash.
ALTER TABLE "Student" ADD COLUMN "passwordHash" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Student" ALTER COLUMN "passwordHash" DROP DEFAULT;
