const express = require('express')

const expressAdapter = require('../adapters/express-adapter')
const api = require('./api')

const router = express.Router()

// Create todo
router.post('/', async (req, res) => {
  try {
    const result = await api.add(req.body)
    res.status(200).json(result)
  } catch (error) {
    expressAdapter.handleError(res, error)
  }
})

// Read todo
router.get('/:_id', async (req, res) => {
  try {
    const result = await api.read(req.params._id)
    res.status(200).json(result)
  } catch (error) {
    expressAdapter.handleError(res, error)
  }
})

// Update todo
router.put('/:_id', async (req, res) => {
  try {
    const result = await api.modify(req.params._id, req.body)
    res.status(200).json(result)
  } catch (error) {
    expressAdapter.handleError(res, error)
  }
})

// Delete todo
router.delete('/:_id', async (req, res) => {
  try {
    await api.remove(req.params._id)
    res.status(204).end()
  } catch (error) {
    expressAdapter.handleError(res, error)
  }
})

// Find todos
router.get('/', async (req, res) => {
  try {
    const result = await api.find()
    res.status(200).json(result)
  } catch (error) {
    expressAdapter.handleError(res, error)
  }
})

module.exports = router
