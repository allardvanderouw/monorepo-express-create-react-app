import { all, call, fork, put, select, take } from 'redux-saga/effects'
import i18n from 'i18next'

import * as api from '../../services/apiTodos'
import * as actionTypes from './actionTypes'
import { add as addNotification } from '../notifications/actionCreators'
import { deselect } from '../todo/actionCreators'
import * as actionCreators from './actionCreators'

function* routeTo() {
  while (true) {
    const action = yield take(actionTypes.ROUTE_TO)
    const isInitial = yield select(state => state.todosState.meta.isInitial)

    if (action.meta.isExact) {
      // Deselect todo
      yield put(deselect())
    }

    if (isInitial) {
      // Fetch todos if meta is initial
      yield put(actionCreators.fetch())
    }
  }
}

function* fetch() {
  while (true) {
    const action = yield take([actionTypes.FETCH, actionTypes.REFRESH])
    yield put(actionCreators.fetchRequest())
    try {
      const todos = yield call(api.find)
      yield put(actionCreators.fetchSuccess(todos))
      if (action.type === actionTypes.REFRESH) {
        yield put(addNotification({ message: i18n.t('Todos:refreshed') }))
      }
    } catch (error) {
      const message = (error && error.message) ? error.message : i18n.t('Todos:unknownError')
      yield put(actionCreators.fetchFailure(message))
      yield put(addNotification({ message }))
    }
  }
}

export default function* rootSaga() {
  yield all([
    routeTo,
    fetch,
  ].map(saga => fork(saga)))
}
