const user = async (parent, args, { userId, prisma }) => {
  return prisma.user.findUnique({
    where: { id: userId },
  })
}

module.exports = {
  user,
}