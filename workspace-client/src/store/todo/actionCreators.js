import actionTypes from './actionTypes';

export default {
  deselectTodo: () => ({
    type: actionTypes.DESELECT_TODO,
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

  addTodo: () => ({
    type: actionTypes.ADD_TODO,
  }),

  addTodoFailure: message => ({
    type: actionTypes.ADD_TODO_FAILURE,
    payload: { message },
    error: true,
  }),

  addTodoRequest: () => ({
    type: actionTypes.ADD_TODO_REQUEST,
  }),

  addTodoSuccess: todo => ({
    type: actionTypes.ADD_TODO_SUCCESS,
    payload: { todo },
  }),

  saveTodo: () => ({
    type: actionTypes.SAVE_TODO,
  }),

  saveTodoFailure: (_id, message) => ({
    type: actionTypes.SAVE_TODO_FAILURE,
    meta: { _id },
    payload: { message },
    error: true,
  }),

  saveTodoRequest: _id => ({
    type: actionTypes.SAVE_TODO_REQUEST,
    meta: { _id },
  }),

  saveTodoSuccess: todo => ({
    type: actionTypes.SAVE_TODO_SUCCESS,
    payload: { todo },
  }),

  removeTodo: () => ({
    type: actionTypes.REMOVE_TODO,
  }),

  removeTodoFailure: (_id, message) => ({
    type: actionTypes.REMOVE_TODO_FAILURE,
    meta: { _id },
    payload: { message },
    error: true,
  }),

  removeTodoRequest: _id => ({
    type: actionTypes.REMOVE_TODO_REQUEST,
    meta: { _id },
  }),

  removeTodoSuccess: _id => ({
    type: actionTypes.REMOVE_TODO_SUCCESS,
    meta: { _id },
  }),

  modifyTodo: todo => ({
    type: actionTypes.MODIFY_TODO,
    todo,
  }),
};
