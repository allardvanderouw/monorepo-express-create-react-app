import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import todoActionCreators from '../../../store/todo/actionCreators';
import TodoEdit from './TodoEdit';

class TodoEditContainer extends PureComponent {
  static propTypes ={
    selectedTodoId: PropTypes.string,
    todo: PropTypes.object,
    meta: PropTypes.object,
    deselectTodo: PropTypes.func.isRequired,
    fetchTodo: PropTypes.func.isRequired,
    saveTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    modifyTodo: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetchTodo, selectedTodoId } = this.props;
    fetchTodo(selectedTodoId);
  }

  componentWillUnmount() {
    const { deselectTodo } = this.props;
    deselectTodo();
  }

  render() {
    const { selectedTodoId, todo, meta, saveTodo, removeTodo, modifyTodo } = this.props;

    // No todo was selected
    if (!selectedTodoId) {
      return null;
    }

    return (
      <TodoEdit
        todo={todo}
        meta={meta}
        save={saveTodo}
        remove={removeTodo}
        modify={modifyTodo}
      />
    );
  }
}

const connector = connect(
  state => ({
    todo: state.todoState.todo,
    meta: state.todoState.meta,
  }),
  {
    deselectTodo: todoActionCreators.deselectTodo,
    fetchTodo: todoActionCreators.fetchTodo,
    saveTodo: todoActionCreators.saveTodo,
    removeTodo: todoActionCreators.removeTodo,
    modifyTodo: todoActionCreators.modifyTodo,
  },
);

export default connector(TodoEditContainer);
