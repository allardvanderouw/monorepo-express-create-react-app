import { applyMiddleware, compose, createStore } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const configureStoreRendererBackground = (history) => {
  const sagaMiddleware = createSagaMiddleware()
  const enhancer = compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  const store = createStore(connectRouter(history)(rootReducer), enhancer)
  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStoreRendererBackground
