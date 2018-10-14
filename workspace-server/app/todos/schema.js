const todoSchema = {
  type: 'object',
  properties: {
    _id: { type: 'string', pattern: '^[0-9a-f]{24}$' },
    title: { type: 'string' },
    description: { type: 'string', default: '' },
    completed: { type: 'boolean', default: false },
    notes: { type: 'string', default: '' },
  },
  required: ['title', 'completed'],
  additionalProperties: false,

}

module.exports = {
  todoSchema,
}
