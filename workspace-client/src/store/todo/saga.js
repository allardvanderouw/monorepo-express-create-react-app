import { all, call, fork, put, select, take } from 'redux-saga/effects';
import i18n from 'i18next';

import apiTodos from '../../services/apiTodos';
import actionTypes from './actionTypes';
import todosActionCreators from './actionCreators';

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

function* addTodo() {
  while (true) {
    yield take(actionTypes.ADD_TODO);
    const todo = yield select(state => state.todoState.todo);
    yield put(todosActionCreators.addTodoRequest());
    try {
      const createdTodo = yield call(apiTodos.createTodo, todo);
      yield put(todosActionCreators.addTodoSuccess(createdTodo));
    } catch (error) {
      const message = (error && error.message) ? error.message : i18n.t('Todos:unknownError');
      yield put(todosActionCreators.addTodoFailure(message));
    }
  }
}

function* saveTodo() {
  while (true) {
    yield take(actionTypes.SAVE_TODO);
    const todo = yield select(state => state.todoState.todo);
    yield put(todosActionCreators.saveTodoRequest());
    try {
      const savedTodo = yield call(apiTodos.updateTodo, todo);
      yield put(todosActionCreators.saveTodoSuccess(savedTodo));
    } catch (error) {
      const message = (error && error.message) ? error.message : i18n.t('Todos:unknownError');
      yield put(todosActionCreators.saveTodoFailure(todo._id, message));
    }
  }
}

function* removeTodo() {
  while (true) {
    yield take(actionTypes.REMOVE_TODO);
    const todo = yield select(state => state.todoState.todo);
    yield put(todosActionCreators.removeTodoRequest(todo._id));
    try {
      yield call(apiTodos.deleteTodo, todo._id);
      yield put(todosActionCreators.removeTodoSuccess(todo._id));
    } catch (error) {
      const message = (error && error.message) ? error.message : i18n.t('Todos:unknownError');
      yield put(todosActionCreators.removeTodoFailure(todo._id, message));
    }
  }
}

export default function* rootSaga() {
  yield all([
    fetchTodo,
    addTodo,
    saveTodo,
    removeTodo,
  ].map(saga => fork(saga)));
}
