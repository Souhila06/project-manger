/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ProjectsController from '#controllers/projects_controller'
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