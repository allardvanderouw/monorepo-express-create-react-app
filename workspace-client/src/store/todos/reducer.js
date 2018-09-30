import { combineReducers } from 'redux';
import actionTypes from './actionTypes';
import todoActionTypes from '../todo/actionTypes';

const initialTodosState = [];
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_FAILURE: {
      return initialTodosState;
    }

    case actionTypes.FETCH_TODOS_SUCCESS: {
      return action.payload.todos;
    }

    case todoActionTypes.SAVE_TODO_SUCCESS: {
      return state.map((todo) => {
        if (todo._id === action.payload.todo._id) {
          return action.payload.todo;
        }
        return todo;
      });
    }

    case todoActionTypes.ADD_TODO_SUCCESS: {
      return state.concat(action.payload.todo);
    }

    case todoActionTypes.REMOVE_TODO_SUCCESS: {
      return state.filter(({ _id }) => _id !== action.meta._id);
    }

    default: {
      return state;
    }
  }
};

const initialMetaState = {
  isLoading: false,
  error: '',
};
const metaReducer = (state = initialMetaState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    }

    case actionTypes.FETCH_TODOS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case actionTypes.FETCH_TODOS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  todos: todosReducer,
  meta: metaReducer,
});
