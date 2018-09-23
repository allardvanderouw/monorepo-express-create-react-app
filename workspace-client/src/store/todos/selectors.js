import { createSelector } from 'reselect';

const todosSelector = state => state.todos;
const todosMetaSelector = state => state.todosMeta;

const selectedTodoSelector = createSelector(
  todosSelector,
  (state, _id) => _id,
  (todos, selectedTodoId) => {
    if (!selectedTodoId) {
      return null;
    }
    return todos.find(({ _id }) => _id === selectedTodoId);
  },
);

const selectedTodoMetaSelector = createSelector(
  todosMetaSelector,
  (state, _id) => _id,
  (todosMeta, selectedTodoId) => {
    if (!selectedTodoId) {
      return null;
    }
    return todosMeta.find(({ _id }) => _id === selectedTodoId);
  },
);

// Make sure to only export selectors which are created with 'createSelector'
export default {
  selectedTodoSelector,
  selectedTodoMetaSelector,
};
