const express = require('express');

const expressAdapter = require('../adapters/express-adapter');
const api = require('./todos-api');

const router = express.Router();

// Create todo
router.post('/', async (req, res) => {
  try {
    const result = await api.createTodo(req.body);
    res.status(200).json(result);
  } catch (error) {
    expressAdapter.handleError(res, error);
  }
});

// Read todo
router.get('/:_id', async (req, res) => {
  try {
    const result = await api.readTodo(req.params._id);
    res.status(200).json(result);
  } catch (error) {
    expressAdapter.handleError(res, error);
  }
});

// Update todo
router.put('/:_id', async (req, res) => {
  try {
    const result = await api.updateTodo(req.params._id, req.body);
    res.status(200).json(result);
  } catch (error) {
    expressAdapter.handleError(res, error);
  }
});

// Delete todo
router.delete('/:_id', async (req, res) => {
  try {
    await api.deleteTodo(req.params._id);
    res.status(204).end();
  } catch (error) {
    expressAdapter.handleError(res, error);
  }
});

// Find todos
router.get('/', async (req, res) => {
  try {
    const result = await api.findTodos();
    res.status(200).json(result);
  } catch (error) {
    expressAdapter.handleError(res, error);
  }
});

module.exports = router;
