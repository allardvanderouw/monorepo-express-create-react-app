import { all, fork } from 'redux-saga/effects'
import routingSaga from './routing/saga'
import todosSaga from './todos/saga'
import todoSaga from './todo/saga'

function* rootSaga() {
  yield all([
    routingSaga,
    todosSaga,
    todoSaga,
  ].map(saga => fork(saga)))
}

export default rootSaga
