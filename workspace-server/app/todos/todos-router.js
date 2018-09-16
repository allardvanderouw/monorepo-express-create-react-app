const express = require('express');

const api = require('./todos-api');

const router = express.Router();

// Create todo
router.post('/', async (req, res) => {
  try {
    const result = await api.createTodo(req.body);
    res.status(200).json(result);
  } catch (error) {
    if (error && error.isBoom) {
      const { statusCode, payload } = error.output;
      res.status(statusCode).json(payload);
    } else {
      res.status(500).json({ error });
    }
  }
});

// Read todo
router.get('/:id', async (req, res) => {
  try {
    const result = await api.readTodo(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    if (error && error.isBoom) {
      const { statusCode, payload } = error.output;
      res.status(statusCode).json(payload);
    } else {
      res.status(500).json({ error });
    }
  }
});

// Update todo
router.put('/:id', async (req, res) => {
  try {
    const result = await api.updateTodo(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    if (error && error.isBoom) {
      const { statusCode, payload } = error.output;
      res.status(statusCode).json(payload);
    } else {
      res.status(500).json({ error });
    }
  }
});

// Delete todo
router.delete('/:id', async (req, res) => {
  try {
    await api.deleteTodo(req.params.id);
    res.status(204).end();
  } catch (error) {
    if (error && error.isBoom) {
      const { statusCode, payload } = error.output;
      res.status(statusCode).json(payload);
    } else {
      res.status(500).json({ error });
    }
  }
});

// Find todos
router.get('/', async (req, res) => {
  try {
    const result = await api.findTodos();
    res.status(200).json(result);
  } catch (error) {
    if (error && error.isBoom) {
      const { statusCode, payload } = error.output;
      res.status(statusCode).json(payload);
    } else {
      res.status(500).json({ error });
    }
  }
});

module.exports = router;
