import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
    primsa: PrismaClient | undefined
}

export const prisma =
    globalForPrisma.primsa ??
    new PrismaClient({
        log: ['query'],
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.primsa = prisma