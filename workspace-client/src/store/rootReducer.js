import { combineReducers } from 'redux';
import todosReducer from './todos/reducer';

const rootReducer = combineReducers({ todosState: todosReducer });

export default rootReducer;
