import { combineReducers } from 'redux';
import todosReducer from './todos/reducer';
import todoReducer from './todo/reducer';

const rootReducer = combineReducers({
  todosState: todosReducer,
  todoState: todoReducer,
});

export default rootReducer;
