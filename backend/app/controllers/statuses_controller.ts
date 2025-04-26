import Status from '#models/status'
import Task from '#models/task'
import type { HttpContext } from '@adonisjs/core/http'

export default class StatusesController {
    /**
* retreive all project
* GET
*/
    async index({ response }: HttpContext) {
        const statuses = await Status.all()
        response.status(200).json(statuses)
    }

    /**
     * create a project
     * POST
     */
    async store({ request, response }: HttpContext) {
        await Status.create({
            name: request.body().name
        })
        response.status(201)
    }
    /**
     * update project
     * PUT
     */
    async update({ params, request, response }: HttpContext) {
        const status = await Status.findOrFail(params.id)
        if (status) {
            status.name = request.body().name
            status.save()
            response.status(200).json(status)
        } else {
            response.status(404)
        }

    }

    /**
     * delete a project
     * DELETE
     */
    async destroy({ params, response }: HttpContext) {
        const status = await Status.find(params.id)
        if (status) {
            await status.delete()
            response.status(204)
        } else {
            response.status(404)
        }
    }
}