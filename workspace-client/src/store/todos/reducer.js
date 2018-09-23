import { combineReducers } from 'redux';
import actionTypes from './actionTypes';

const initialTodosState = [];
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_FAILURE: {
      return initialTodosState;
    }

    case actionTypes.FETCH_TODOS_SUCCESS: {
      return action.payload.todos;
    }

    case actionTypes.FETCH_TODO_REQUEST: {
      return state.map((todo) => {
        if (todo._id === action.meta._id) {
          return todo;
        }
        return todo;
      });
    }

    case actionTypes.FETCH_TODO_SUCCESS: {
      return state.map((todo) => {
        if (todo._id === action.payload.todo._id) {
          return action.payload.todo;
        }
        return todo;
      });
    }

    case actionTypes.FETCH_TODO_FAILURE: {
      return state.map((todo) => {
        if (todo._id === action.meta._id) {
          const { isLoading, ...todoWithoutIsLoading } = todo;
          return todoWithoutIsLoading;
        }
        return todo;
      });
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

const initialTodoMetaState = { isLoading: false, error: '' };
const todosMetaReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_SUCCESS: {
      return action.payload.todos.map((todo) => {
        const existingTodosMeta = state.find(({ _id }) => _id === todo._id);
        if (existingTodosMeta) {
          return {
            ...existingTodosMeta,
            isLoading: false,
          };
        }
        return {
          _id: todo._id,
          ...initialTodoMetaState,
        };
      });
    }

    case actionTypes.FETCH_TODO_REQUEST: {
      return state.map((todoMeta) => {
        if (todoMeta._id === action.meta._id) {
          return {
            ...todoMeta,
            isLoading: true,
            error: '',
          };
        }
        return todoMeta;
      });
    }

    case actionTypes.FETCH_TODO_SUCCESS: {
      return state.map((todoMeta) => {
        if (todoMeta._id === action.payload.todo._id) {
          return {
            ...todoMeta,
            isLoading: false,
          };
        }
        return todoMeta;
      });
    }

    case actionTypes.FETCH_TODO_FAILURE: {
      return state.map((todoMeta) => {
        if (todoMeta._id === action.meta._id) {
          return {
            ...todoMeta,
            isLoading: false,
            error: action.payload.message,
          };
        }
        return todoMeta;
      });
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  todos: todosReducer,
  meta: metaReducer,
  todosMeta: todosMetaReducer,
});
