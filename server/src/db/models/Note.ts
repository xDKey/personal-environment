import { Model } from 'objection'
import User from './User'

export default class Note extends Model {
  static tableName = 'note'
  id!: number
  createdAt!: string
  title!: string
  description?: string
  userId!: number
  user!: User

  static jsonSchema = {
    type: 'object',
    required: ['title'],

    properties: {
      id: { type: 'integer' },
      createdAt: { type: 'string' },
      title: { type: 'string', minLength: 1, maxLength: 255 },
      description: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
    },
  }

  static relationMappings = () => ({
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: 'note.userId',
        to: 'user.id',
      },
    },
  })
}
