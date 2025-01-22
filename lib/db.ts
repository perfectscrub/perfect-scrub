import { PrismaClient, Prisma } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// globalThis is not affected by nextjs hot reload
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export const PrismaNameSpace = Prisma;
export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma