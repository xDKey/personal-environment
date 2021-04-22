const notes = (parent, args, {prisma}) =>
  prisma.user.findUnique({ where: { id: parent.id } }).notes()

module.exports = {
    notes
}