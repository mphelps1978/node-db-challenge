const express = require('express')

const Tasks = require('./tasks.model')

const router = express.Router()


//GET /api/tasks for retrieving list of tasks - NOT TESTED

router.get('/', (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      const completedTasks = tasks.map(task => {
        if (task.completed === 0) {
          task.completed = false
        } else if (task.completed === 1) {
          task.completed = true
        }
        return task
      })
      res.status(200).json(completedTasks)
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).json({message: 'There was an error'})

    })
})

module.exports = router;