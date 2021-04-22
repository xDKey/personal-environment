const users = async (parent, args, { prisma }) => {
  return prisma.user.findMany()
}

module.exports = {
    users
}