import type { HttpContext } from '@adonisjs/core/http'
import Project from '#models/project'

export default class ProjectsController {
    /**
     * retreive all project
     * GET
     */
    async index({ response }: HttpContext) {
        const projects = await Project.all()
        response.status(200).json(projects)
    }
    /**
     * retreive one project by id
     * GET
     */
    async show({ params, response }: HttpContext) {
        const project = await Project.find(params.id)
        if (project) {
            response.status(200).json(project)
        } else {
            response.status(404)
        }
    }
    /**
     * create a project
     * POST
     */
    async store({ request, response }: HttpContext) {
        await Project.create({
            title: request.body().title
        })
        response.status(201)
    }
    /**
     * update project
     * PUT
     */
    async update({ params, request, response }: HttpContext) {
        const project = await Project.findOrFail(params.id)
        if (project) {
            project.title = request.body().title
            project.save()
            response.status(200).json(project)
        } else {
            response.status(404)
        }

    }

    /**
     * delete a project
     * DELETE
     */
    async destroy({ params, response }: HttpContext) {
        const project = await Project.find(params.id)
        if (project) {
            await project.delete()
            response.status(204)
        } else {
            response.status(404)
        }
    }

}