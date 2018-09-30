import { all, fork } from 'redux-saga/effects';
import todosSaga from './todos/saga';
import todoSaga from './todo/saga';

function* rootSaga() {
  yield all([
    todosSaga,
    todoSaga,
  ].map(saga => fork(saga)));
}

export default rootSaga;
