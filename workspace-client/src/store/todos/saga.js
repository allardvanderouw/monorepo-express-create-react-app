import {
  all,
  call,
  fork,
  put,
  take,
} from 'redux-saga/effects';
import i18n from 'i18next';

import apiTodos from '../../services/apiTodos';
import actionTypes from './actionTypes';
import todosActionCreators from './actionCreators';

function* fetchTodos() {
  while (true) {
    yield take([actionTypes.FETCH_TODOS, actionTypes.REFRESH_TODOS]);
    yield put(todosActionCreators.fetchTodosRequest());
    try {
      const todos = yield call(apiTodos.getTodos);
      yield put(todosActionCreators.fetchTodosSuccess(todos));
    } catch (error) {
      const message = (error && error.message) ? error.message : i18n.t('Todos:unknownError');
      yield put(todosActionCreators.fetchTodosFailure(message));
    }
  }
}

function* fetchTodo() {
  while (true) {
    const fetchAction = yield take(actionTypes.FETCH_TODO);
    yield put(todosActionCreators.fetchTodoRequest(fetchAction.meta._id));
    try {
      const todo = yield call(apiTodos.getTodo, fetchAction.meta._id);
      yield put(todosActionCreators.fetchTodoSuccess(todo));
    } catch (error) {
      const message = (error && error.message) ? error.message : i18n.t('Todos:unknownError');
      yield put(todosActionCreators.fetchTodoFailure(fetchAction.meta._id, message));
    }
  }
}

export default function* rootSaga() {
  yield all([
    fetchTodos,
    fetchTodo,
  ].map(saga => fork(saga)));
}
