import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(prisma.user.findMany())
}

main()
  .catch(error => {
    throw error
  })
  .finally(async () => {
    await prisma.$disconnect()
  })