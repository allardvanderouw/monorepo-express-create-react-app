import { combineReducers } from 'redux'
import notificationsReducer from './notifications/reducer'
import todosReducer from './todos/reducer'
import todoReducer from './todo/reducer'

const rootReducer = combineReducers({
  notificationsState: notificationsReducer,
  todosState: todosReducer,
  todoState: todoReducer,
})

export default rootReducer
