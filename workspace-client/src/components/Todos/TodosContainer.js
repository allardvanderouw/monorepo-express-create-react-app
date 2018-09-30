import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Todos from './Todos';
import actionCreators from '../../store/todos/actionCreators';

class TodosContainer extends PureComponent {
  static propTypes = {
    selectedTodoId: PropTypes.string,
    isNew: PropTypes.bool,
    fetchTodos: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  render() {
    const { selectedTodoId, isNew } = this.props;

    return (
      <Todos
        selectedTodoId={selectedTodoId}
        isNew={isNew}
      />
    );
  }
}

const connector = connect(
  (state, props) => ({
    selectedTodoId: props.match.params._id,
    isNew: props.match.params._id === 'new',
  }),
  {
    fetchTodos: actionCreators.fetchTodos,
  },
);

export default connector(TodosContainer);
