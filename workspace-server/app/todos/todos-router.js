const express = require('express');

const expressBurito = require('../buritos/express-burito');
const api = require('./todos-api');

const router = express.Router();

// Create todo
router.post('/', async (req, res) => {
  try {
    const result = await api.createTodo(req.body);
    res.status(200).json(result);
  } catch (error) {
    expressBurito.handleError(res, error);
  }
});

// Read todo
router.get('/:id', async (req, res) => {
  try {
    const result = await api.readTodo(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    expressBurito.handleError(res, error);
  }
});

// Update todo
router.put('/:id', async (req, res) => {
  try {
    const result = await api.updateTodo(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    expressBurito.handleError(res, error);
  }
});

// Delete todo
router.delete('/:id', async (req, res) => {
  try {
    await api.deleteTodo(req.params.id);
    res.status(204).end();
  } catch (error) {
    expressBurito.handleError(res, error);
  }
});

// Find todos
router.get('/', async (req, res) => {
  try {
    const result = await api.findTodos();
    res.status(200).json(result);
  } catch (error) {
    expressBurito.handleError(res, error);
  }
});

module.exports = router;
