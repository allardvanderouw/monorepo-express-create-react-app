import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoList from './TodoList';

class TodoListContainer extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    selectedTodoId: PropTypes.string,
    todos: PropTypes.array,
  }

  render() {
    const { isLoading, todos, selectedTodoId } = this.props;

    return (
      <TodoList
        selectedTodoId={selectedTodoId}
        todos={todos}
        isLoading={isLoading} />
    );
  }
}

const connector = connect(
  (state, props) => ({
    todos: state.todosState.todos,
    selectedTodoId: props.selectedTodoId,
    isLoading: state.todosState.meta.isLoading,
  }),
);

export default connector(TodoListContainer);
