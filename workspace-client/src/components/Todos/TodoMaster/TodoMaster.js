import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

import TodoFilterContainer from './TodoFilter/TodoFilterContainer';
import TodoListContainer from './TodoList/TodoListContainer';

class TodoMaster extends PureComponent {
  static propTypes = { selectedTodoId: PropTypes.string }

  render() {
    const { selectedTodoId } = this.props;

    return (
      <Fragment>
        <TodoFilterContainer />
        <TodoListContainer selectedTodoId={selectedTodoId} />
      </Fragment>
    );
  }
}

export default TodoMaster;
