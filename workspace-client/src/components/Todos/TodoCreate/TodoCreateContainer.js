import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import todoActionCreators from '../../../store/todo/actionCreators';
import TodoCreate from './TodoCreate';

class TodoCreateContainer extends PureComponent {
  static propTypes ={
    todo: PropTypes.object.isRequired,
    isAdding: PropTypes.bool.isRequired,
    deselectTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    modifyTodo: PropTypes.func.isRequired,
  }

  componentWillUnmount() {
    const { deselectTodo } = this.props;
    deselectTodo();
  }

  render() {
    const { todo, isAdding, addTodo, modifyTodo } = this.props;

    return (
      <TodoCreate
        todo={todo}
        isAdding={isAdding}
        add={addTodo}
        modify={modifyTodo}
      />
    );
  }
}

const connector = connect(
  state => ({
    todo: state.todoState.todo,
    isAdding: state.todoState.meta.isAdding,
  }),
  {
    deselectTodo: todoActionCreators.deselectTodo,
    addTodo: todoActionCreators.addTodo,
    modifyTodo: todoActionCreators.modifyTodo,
  },
);

export default connector(TodoCreateContainer);
