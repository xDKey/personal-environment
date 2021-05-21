import { Model } from 'objection'
import Note from './Note'

export default class User extends Model {
  static tableName = 'user'
  id!: number
  email!: string
  password!: string
  name!: string
  bio?: string
  age?: number
  notes?: Note[]

  static jsonSchema = {
    type: 'onbject',
    required: ['email', 'password', 'name'],

    properties: {
      id: { type: 'integer' },
      email: { type: 'string', minLength: 1, maxLength: 255 },
      password: { type: 'string', minLength: 1, maxLength: 255 },
      name: { type: 'string', minLength: 1, maxLength: 255 },
      bio: { type: ['string', 'null'], minLength: 1, maxLength: 255 },
      age: { type: ['number', 'null']},
    },
  }

  static relationMappings = () => ({
    notes: {
      relation: Model.HasManyRelation,
      modelClass: Note,
      join: {
        from: 'user.id',
        to: 'note.userId',
      },
    },
  })
}
