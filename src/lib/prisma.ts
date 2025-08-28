//import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '@/generated/prisma'; // NEW, CORRECT IMPORT


// Declare a global variable to hold the Prisma client instance
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Check if a Prisma client instance already exists in the global scope
// If not, create a new one. This prevents creating multiple instances in development.
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Optional: log all queries to the console
  });

// In a production environment, ensure the global instance is set
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
