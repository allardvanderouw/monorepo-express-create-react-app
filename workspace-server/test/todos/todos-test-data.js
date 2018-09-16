const defaultTodo = {
  title: 'Todo',
  completed: false,
};

const createTodo = initialData => ({
  ...defaultTodo,
  ...initialData,
});

module.exports = {
  createTodo,
};
