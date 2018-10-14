import React, { Fragment, PureComponent } from 'react'

import TodoFilterContainer from './TodoFilter/TodoFilterContainer'
import TodoListContainer from './TodoList/TodoListContainer'

class TodoMaster extends PureComponent {
  render() {
    return (
      <Fragment>
        <TodoFilterContainer />
        <TodoListContainer />
      </Fragment>
    )
  }
}

export default TodoMaster
