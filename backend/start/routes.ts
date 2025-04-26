/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import PrioritiesController from '#controllers/priorities_controller'
import ProjectsController from '#controllers/projects_controller'
import TasksController from '#controllers/tasks_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/project', [ProjectsController, "store"])

router.get('/project/all', [ProjectsController, "index"])

router.get('project/:id', [ProjectsController, "show"])

router.put('project/:id', [ProjectsController, "update"])

router.delete('project/:id', [ProjectsController, "destroy"])

router.post('/task', [TasksController, "store"])

router.get('/task/all', [TasksController, "index"])

router.get('task/:id', [TasksController, "show"])

router.put('task/:id', [TasksController, "update"])

router.delete('task/:id', [TasksController, "destroy"])

router.post('/priority', [PrioritiesController, "store"])

router.get('/priority/all', [PrioritiesController, "index"])

router.put('priority/:id', [PrioritiesController, "update"])

router.delete('priority/:id', [PrioritiesController, "destroy"])