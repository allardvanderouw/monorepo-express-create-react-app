import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStoreRendererBackground = (history) => {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(applyMiddleware(routerMiddleware(history), sagaMiddleware));
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStoreRendererBackground;
