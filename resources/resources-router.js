const express = require('express');

const Resources = require('./resource-model');

const router = express.Router();


// GET /api/resources - Retrieve list of resources - NOT TESTED

router.get('/', (req, res) => {
  Resources.getResources()
    .then(resources => res.status(200).json(resources))
    .catch(err => {
      console.log(err.mesage);
      res.status(500).json({message: 'There was an error'})
    })
})


// POST /api/resources - Add a new resource - NOT TESTED

router.post('/', (req,res) => {
  Resources.addResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).json({message: 'There was an error'})

    })
})


module.exports = router