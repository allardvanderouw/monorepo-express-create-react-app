import { createSelector } from 'reselect'

export const filteredTodosSelector = createSelector(
  todos => todos,
  (todos, query) => query,
  (todos, query) => {
    if (!query) {
      return todos
    }

    return todos.filter((todo) => {
      if (todo.title.includes(query)) {
        return true
      }
      if (todo.description.includes(query)) {
        return true
      }
      return false
    })
  },
)
