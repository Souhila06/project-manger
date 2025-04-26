import Priority from '#models/priority'
import type { HttpContext } from '@adonisjs/core/http'

export default class PrioritiesController {
    /**
   * retreive all project
   * GET
   */
    async index({ response }: HttpContext) {
        const priorites = await Priority.all()
        response.status(200).json(priorites)
    }

    /**
     * create a project
     * POST
     */
    async store({ request, response }: HttpContext) {
        await Priority.create({
            name: request.body().name,
            color: request.body().color
        })
        response.status(201)
    }
    /**
     * update project
     * PUT
     */
    async update({ params, request, response }: HttpContext) {
        const priority = await Priority.findOrFail(params.id)
        if (priority) {
            priority.name = request.body().name,
                priority.color = request.body().color
            priority.save()
            response.status(200).json(priority)
        } else {
            response.status(404)
        }

    }

    /**
     * delete a project
     * DELETE
     */
    async destroy({ params, response }: HttpContext) {
        const priority = await Priority.find(params.id)
        if (priority) {
            await priority.delete()
            response.status(204)
        } else {
            response.status(404)
        }
    }
}