import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import i18n from 'i18next';

import todosActionCreators from '../../../store/todos/actionCreators';
import todosSelector from '../../../store/todos/selectors';
import TodoDetail from './TodoDetail';
import NotFound from '../../Shared/NotFound';
// import Loading from '../../Shared/Loading'

class TodoDetailContainer extends PureComponent {
  static propTypes ={
    selectedTodoId: PropTypes.string,
    todo: PropTypes.object,
    todoMeta: PropTypes.object,
    fetchTodo: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetchTodo, todo } = this.props;
    if (todo && !todo.isLoaded) {
      fetchTodo(todo._id);
    }
  }

  render() {
    const { selectedTodoId, todo, todoMeta } = this.props;

    // No todo was selected
    if (!selectedTodoId) {
      return null;
    }

    // A todo was selected but it could not be found
    if (!todo) {
      return (
        <NotFound
          description={i18n.t('Todos:notFoundDescription')}
          header={i18n.t('Todos:notFoundHeader')}
        />
      );
    }

    return (
      <TodoDetail
        todo={todo}
        todoMeta={todoMeta}
      />
    );
  }
}

const connector = connect(
  (state, props) => ({
    todo: todosSelector.selectedTodoSelector(state.todosState, props.selectedTodoId),
    todoMeta: todosSelector.selectedTodoMetaSelector(state.todosState, props.selectedTodoId),
  }),
  { fetchTodo: todosActionCreators.fetchTodo },
);

export default connector(TodoDetailContainer);
