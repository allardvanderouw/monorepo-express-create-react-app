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
};
