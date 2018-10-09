const defaultTodo = {
  title: 'Todo',
  description: '',
  notes: '',
  completed: false,
};

const createTodo = initialData => ({
  ...defaultTodo,
  ...initialData,
});

module.exports = {
  createTodo,
};
