import { all, fork, put, take } from 'redux-saga/effects'
import { matchPath } from 'react-router-dom'
import { LOCATION_CHANGE } from 'connected-react-router'

import { routeTo as routeToTodos } from '../todos/actionCreators'
import { routeTo as routeToTodo } from '../todo/actionCreators'

function* changeLocation() {
  while (true) {
    const action = yield take(LOCATION_CHANGE)
    const { pathname } = action.payload.location

    const paths = [
      '/todos',
      '/todos/:_id',
    ]

    // Check if a paths are matched from the location route
    const matchedPaths = paths.filter(path => matchPath(pathname, { path }))

    yield all(matchedPaths.map((matchedPath) => {
      const { params, isExact } = matchPath(pathname, { path: matchedPath })

      // Call side-effects depending on matched paths
      switch (matchedPath) {
        case '/todos': {
          return put(routeToTodos(isExact))
        }

        case '/todos/:_id': {
          return put(routeToTodo(params._id))
        }

        default:
          return null
      }
    }))
  }
}

export default function* rootSaga() {
  yield all([
    changeLocation,
  ].map(saga => fork(saga)))
}
