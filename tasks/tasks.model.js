const db = require('../data/db-config')

module.exports = {
  getTasks
}

function getTasks() {
  return db('tasks')
    .join('projects', 'projects.id', 'project_id')
    .select(
      'tasks.description as Task Description',
      'notes',
      'tasks.completed as Task Completed',
      'projects.name as Project Name',
      'projects.description as Project Description'
    )
}