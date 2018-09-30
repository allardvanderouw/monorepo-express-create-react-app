import { all, call, fork, put, take } from 'redux-saga/effects';
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

export default function* rootSaga() {
  yield all([
    fetchTodos,
  ].map(saga => fork(saga)));
}
