import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { filteredTodosSelector } from '../../../../store/todos/selectors'
import List from './List'

class ListContainer extends PureComponent {
  static propTypes = {
    selectedId: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    todos: PropTypes.array,
  }

  render() {
    return (
      <List
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
    isLoading: state.todosState.meta.isLoading,
  }),
)

export default connector(ListContainer)
