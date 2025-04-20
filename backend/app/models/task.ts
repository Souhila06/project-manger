import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Project from '#models/project'
import Status from '#models/status'
import Priority from '#models/priority'


export default class Task extends BaseModel {
  @hasOne(() => Project , { foreignKey: 'project_id'})
  declare prject: HasOne<typeof Project>

  @hasOne(() => Status)
  declare status: HasOne<typeof Status>

  @hasOne(() => Priority)
  declare priority: HasOne<typeof Priority>

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare decsription: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}