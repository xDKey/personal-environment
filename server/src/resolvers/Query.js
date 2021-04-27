const user = async (parent, args, { userId, prisma }) => {
  return prisma.user.findUnique({
    where: { id: userId },
  })
}

const notes = (parent, args, { userId, prisma }) => 
  prisma.note.findMany({where: {userId}})

module.exports = {
  user,
  notes,
}
