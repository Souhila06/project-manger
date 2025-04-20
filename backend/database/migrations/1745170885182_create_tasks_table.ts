import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'task'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('project')
        .onDelete('CASCADE')
      table
        .integer('status_id')
        .unsigned()
        .references('id')
        .inTable('status')
      table
        .integer('priority_id')
        .unsigned()
        .references('id')
        .inTable('priority')
      table.string('title', 50)
      table.string('description', 250)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}