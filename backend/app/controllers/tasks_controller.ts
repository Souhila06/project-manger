import Task from '#models/task'

import type { HttpContext } from '@adonisjs/core/http'

export default class TasksController {
    /**
 * retreive all task
 * GET
 */
    async index({ response }: HttpContext) {
        const tasks = await Task.all()
        response.status(200).json(tasks)
    }
    /**
     * retreive one task by id
     * GET
     */
    async show({ params, response }: HttpContext) {
        const task = await Task.find(params.id)
        if (task) {
            response.status(200).json(task)
        } else {
            response.status(404)
        }
    }
    /**
     * create a task
     * POST
     */
    async store({ request, response }: HttpContext) {
        await Task.create({
            title: request.body().title,
            description: request.body().description

        })
        response.status(201)
    }
    /**
     * update task
     * PUT
     */
    async update({ params, request, response }: HttpContext) {
        const task = await Task.findOrFail(params.id)
        if (task) {
            task.title = request.body().title
            task.description = request.body().description
            task.save()
            response.status(200).json(task)
        } else {
            response.status(404)
        }

    }

    /**
     * delete a task
     * DELETE
     */
    async destroy({ params, response }: HttpContext) {
        const task = await Task.find(params.id)
        if (task) {
            await task.delete()
            response.status(204)
        } else {
            response.status(404)
        }
    }

}