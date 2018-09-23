import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import todoActionCreators from '../../../../store/todos/actionCreators';
import TodoFilter from './TodoFilter';

class TodoFilterContainer extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    fetchTodos: PropTypes.func.isRequired,
  }

  render() {
    const { isLoading, fetchTodos } = this.props;

    return (
      <TodoFilter fetchTodos={fetchTodos} isLoading={isLoading} />
    );
  }
}

const connector = connect(
  state => ({ isLoading: state.todosState.meta.isLoading }),
  { fetchTodos: todoActionCreators.fetchTodos },
);

export default connector(TodoFilterContainer);
