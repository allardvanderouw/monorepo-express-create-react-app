import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

const initialTodoState = {
  title: '',
  description: '',
  notes: '',
  completed: false,
}
const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case actionTypes.FETCH:
    case actionTypes.CLEAR: {
      return initialTodoState
    }

    case actionTypes.FETCH_SUCCESS:
    case actionTypes.SAVE_SUCCESS: {
      return action.payload.todo
    }

    case actionTypes.REMOVE_SUCCESS: {
      return initialTodoState
    }

    case actionTypes.MODIFY: {
      return { ...state, ...action.todo }
    }

    default: {
      return state
    }
  }
}

const initialMetaState = {
  isLoading: false,
  isLoaded: false,
  isSaving: false,
  isAdding: false,
  isRemoving: false,
  error: '',
}
const metaReducer = (state = initialMetaState, action) => {
  switch (action.type) {
    case actionTypes.FETCH: {
      return initialMetaState
    }

    case actionTypes.FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case actionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
      }
    }

    case actionTypes.FETCH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      }
    }

    case actionTypes.SAVE_REQUEST: {
      return {
        ...state,
        isSaving: true,
        error: '',
      }
    }

    case actionTypes.SAVE_SUCCESS: {
      return {
        ...state,
        isSaving: false,
      }
    }

    case actionTypes.SAVE_FAILURE: {
      return {
        ...state,
        isSaving: false,
        error: action.payload.message,
      }
    }

    case actionTypes.ADD_REQUEST: {
      return {
        ...state,
        isAdding: true,
        error: '',
      }
    }

    case actionTypes.ADD_SUCCESS: {
      return {
        ...state,
        isAdding: false,
      }
    }

    case actionTypes.ADD_FAILURE: {
      return {
        ...state,
        isAdding: false,
        error: action.payload.message,
      }
    }

    case actionTypes.REMOVE_REQUEST: {
      return {
        ...state,
        isRemoving: true,
        error: '',
      }
    }

    case actionTypes.REMOVE_SUCCESS: {
      return {
        ...state,
        isRemoving: false,
      }
    }

    case actionTypes.REMOVE_FAILURE: {
      return {
        ...state,
        isRemoving: false,
        error: action.payload.message,
      }
    }

    default: {
      return state
    }
  }
}

export default combineReducers({
  todo: todoReducer,
  meta: metaReducer,
})
