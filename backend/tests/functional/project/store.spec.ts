import Project from '#models/project'
import { test } from '@japa/runner'

test.group('Project store', () => {
  test('create project', async ({ assert }) => {
    const project = await Project.create({ title: "test1" })

    assert.exists(project.id)
    assert.equal(project.title, "test1")
  })

})