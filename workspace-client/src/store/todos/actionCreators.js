import actionTypes from './actionTypes';

export default {
  fetchTodos: () => ({ type: actionTypes.FETCH_TODOS }),

  fetchTodosFailure: message => ({
    type: actionTypes.FETCH_TODOS_FAILURE,
    payload: { message },
  }),

  fetchTodosRequest: () => ({ type: actionTypes.FETCH_TODOS_REQUEST }),

  fetchTodosSuccess: todos => ({
    type: actionTypes.FETCH_TODOS_SUCCESS,
    payload: { todos },
  }),

  fetchTodo: _id => ({
    type: actionTypes.FETCH_TODO,
    meta: { _id },
  }),

  fetchTodoFailure: (_id, message) => ({
    type: actionTypes.FETCH_TODO_FAILURE,
    meta: { _id },
    payload: { message },
    error: true,
  }),

  fetchTodoRequest: _id => ({
    type: actionTypes.FETCH_TODO_REQUEST,
    meta: { _id },
  }),

  fetchTodoSuccess: todo => ({
    type: actionTypes.FETCH_TODO_SUCCESS,
    payload: { todo },
  }),
};
