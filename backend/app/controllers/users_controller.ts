import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class UsersController {
  async index({ request }: HttpContext) {
    const users = await db.query().from('users').columns
    return users
  }
}
