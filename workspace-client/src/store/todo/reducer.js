import { combineReducers } from 'redux';
import actionTypes from './actionTypes';

const initialTodoState = {
  title: '',
  description: '',
  notes: '',
};
const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case actionTypes.DESELECT_TODO: {
      return initialTodoState;
    }

    case actionTypes.FETCH_TODO_SUCCESS:
    case actionTypes.SAVE_TODO_SUCCESS: {
      return action.payload.todo;
    }

    case actionTypes.REMOVE_TODO_SUCCESS: {
      return initialTodoState;
    }

    case actionTypes.MODIFY_TODO: {
      return { ...state, ...action.todo };
    }

    default: {
      return state;
    }
  }
};

const initialMetaState = {
  isLoading: false,
  isLoaded: false,
  isSaving: false,
  isAdding: false,
  isRemoving: false,
  error: '',
};
const metaReducer = (state = initialMetaState, action) => {
  switch (action.type) {
    case actionTypes.DESELECT_TODO: {
      return initialMetaState;
    }

    case actionTypes.FETCH_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case actionTypes.FETCH_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
      };
    }

    case actionTypes.FETCH_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    }

    case actionTypes.SAVE_TODO_REQUEST: {
      return {
        ...state,
        isSaving: true,
        error: '',
      };
    }

    case actionTypes.SAVE_TODO_SUCCESS: {
      return {
        ...state,
        isSaving: false,
      };
    }

    case actionTypes.SAVE_TODO_FAILURE: {
      return {
        ...state,
        isSaving: false,
        error: action.payload.message,
      };
    }

    case actionTypes.ADD_TODO_REQUEST: {
      return {
        ...state,
        isAdding: true,
        error: '',
      };
    }

    case actionTypes.ADD_TODO_SUCCESS: {
      return {
        ...state,
        isAdding: false,
      };
    }

    case actionTypes.ADD_TODO_FAILURE: {
      return {
        ...state,
        isAdding: false,
        error: action.payload.message,
      };
    }

    case actionTypes.REMOVE_TODO_REQUEST: {
      return {
        ...state,
        isRemoving: true,
        error: '',
      };
    }

    case actionTypes.REMOVE_TODO_SUCCESS: {
      return {
        ...state,
        isRemoving: false,
      };
    }

    case actionTypes.REMOVE_TODO_FAILURE: {
      return {
        ...state,
        isRemoving: false,
        error: action.payload.message,
      };
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  todo: todoReducer,
  meta: metaReducer,
});
