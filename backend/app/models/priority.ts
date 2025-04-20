import { DateTime } from 'luxon'
import { BaseModel, column ,hasMany} from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Task from '#models/task'

export default class Priority extends BaseModel {

  @hasMany(() => Task, { foreignKey: 'task_id'})
  declare task: HasMany<typeof Task>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare color: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}