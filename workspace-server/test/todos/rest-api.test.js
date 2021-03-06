const assert = require('assert')
const request = require('supertest')

const { startServer, stopServer } = require('../../server')
const { provideTodo } = require('./test-data')

describe('Todos REST API integration test', () => {
  let db

  before(async () => {
    const { db: _db } = await startServer({ mongoDbUri: 'mongodb://localhost:27017/test' })
    db = _db
  })

  after(async () => {
    await stopServer()
  })

  afterEach(async () => {
    await db.collection('todos').deleteMany()
  })

  describe('POST /api/todos', () => {
    it('should create a todo', async () => {
      const todo = provideTodo()

      const response = await request('http://localhost:3000')
        .post('/api/todos')
        .send(todo)

      assert.notEqual(response, undefined)
      assert.equal(response.status, 200)
      assert.deepStrictEqual(response.body, { ...todo, _id: response.body._id })
      assert.notEqual(response.body._id, undefined)
    })
  })

  describe('GET /api/todos/:_id', () => {
    let createdTodo

    before(async () => {
      const todo = provideTodo()

      const response = await request('http://localhost:3000')
        .post('/api/todos')
        .send(todo)

      createdTodo = response.body
    })

    it('should read a todo by _id', async () => {
      const response = await request('http://localhost:3000')
        .get(`/api/todos/${createdTodo._id.toString()}`)

      assert.notEqual(response, undefined)
      assert.equal(response.status, 200)
      assert.equal(response.body._id, createdTodo._id)
      assert.deepStrictEqual(response.body, createdTodo)
    })
  })

  describe('PUT /api/todos/:_id', () => {
    let createdTodo

    before(async () => {
      const todo = provideTodo()

      const response = await request('http://localhost:3000')
        .post('/api/todos')
        .send(todo)

      createdTodo = response.body
    })

    it('should update a todo by _id', async () => {
      const updatedTodo = provideTodo({
        ...createdTodo,
        completed: true,
      })

      const response = await request('http://localhost:3000')
        .put(`/api/todos/${updatedTodo._id}`)
        .send(updatedTodo)

      assert.notEqual(response, undefined)
      assert.equal(response.status, 200)
      assert.deepStrictEqual(response.body, { ...updatedTodo, _id: updatedTodo._id })
      assert.equal(response.body._id, updatedTodo._id)
    })
  })

  describe('DELETE /api/todos/:_id', () => {
    let createdTodo

    before(async () => {
      const todo = provideTodo()

      const response = await request('http://localhost:3000')
        .post('/api/todos')
        .send(todo)

      createdTodo = response.body
    })

    it('should remove a todo by _id', async () => {
      const response = await request('http://localhost:3000')
        .delete(`/api/todos/${createdTodo._id}`)

      assert.notEqual(response, undefined)
      assert.equal(response.status, 204)
    })
  })

  describe('GET /api/todos', () => {
    let firstTodo
    let secondTodo

    before(async () => {
      const todo = provideTodo({ title: 'Todo 1' })
      const firstCreateResponse = await request('http://localhost:3000')
        .post('/api/todos')
        .send(todo)

      firstTodo = firstCreateResponse.body

      const anotherTodo = provideTodo({ title: 'Todo 2' })
      const secondCreatedResponse = await request('http://localhost:3000')
        .post('/api/todos')
        .send(anotherTodo)

      secondTodo = secondCreatedResponse.body
    })

    it('should find todos', async () => {
      const response = await request('http://localhost:3000')
        .get('/api/todos')

      assert.equal(response.status, 200)
      assert.equal(response.body.length, 2)
      assert.deepStrictEqual(response.body[0], firstTodo)
      assert.deepStrictEqual(response.body[1], secondTodo)
    })
  })
})
