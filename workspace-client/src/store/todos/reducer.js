import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'
import * as todoActionTypes from '../todo/actionTypes'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS: {
      return action.payload.todos
    }

    case todoActionTypes.SAVE_SUCCESS: {
      return state.map((todo) => {
        if (todo._id === action.payload.todo._id) {
          return action.payload.todo
        }
        return todo
      })
    }

    case todoActionTypes.ADD_SUCCESS: {
      return state.concat(action.payload.todo)
    }

    case todoActionTypes.REMOVE_SUCCESS: {
      return state.filter(({ _id }) => _id !== action.meta._id)
    }

    default: {
      return state
    }
  }
}

const initialMetaState = {
  isInitial: true,
  isLoading: false,
  error: '',
}
const metaReducer = (state = initialMetaState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REQUEST: {
      return {
        ...state,
        isInitial: false,
        isLoading: true,
        error: '',
      }
    }

    case actionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      }
    }

    case actionTypes.FETCH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      }
    }

    default: {
      return state
    }
  }
}

const initialFilterState = { query: '' }
const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH: {
      return {
        ...state,
        query: action.query,
      }
    }

    default: {
      return state
    }
  }
}

export default combineReducers({
  todos: todosReducer,
  meta: metaReducer,
  filter: filterReducer,
})
