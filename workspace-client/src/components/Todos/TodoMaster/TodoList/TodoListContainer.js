import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { filteredTodosSelector } from '../../../../store/todos/selectors'
import TodoList from './TodoList'

class TodoListContainer extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    selectedId: PropTypes.string,
    todos: PropTypes.array,
  }

  render() {
    return (
      <TodoList
        selectedTodoId={this.props.selectedId}
        todos={this.props.todos}
        isLoading={this.props.isLoading}
      />
    )
  }
}

const connector = connect(
  state => ({
    todos: filteredTodosSelector(state.todosState.todos, state.todosState.filter.query),
    selectedId: state.todoState.selectedId,
    isLoading: state.todosState.meta.isLoading,
  }),
)

export default connector(TodoListContainer)
