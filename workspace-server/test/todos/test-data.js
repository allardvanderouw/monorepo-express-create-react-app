const defaultTodo = {
  title: 'Todo',
  description: '',
  notes: '',
  completed: false,
}

const provideTodo = initialData => ({
  ...defaultTodo,
  ...initialData,
})

module.exports = {
  provideTodo,
}
