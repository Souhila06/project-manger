import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'

import Task from '#models/task'

export default class Project extends BaseModel {
  @hasMany(() => Task , { foreignKey: 'task_id'})
  declare task: HasMany<typeof Task>

  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare title: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}