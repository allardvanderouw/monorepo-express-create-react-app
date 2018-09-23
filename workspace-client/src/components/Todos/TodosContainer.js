import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Todos from './Todos';
import actionCreators from '../../store/todos/actionCreators';

class TodosContainer extends PureComponent {
  static propTypes = {
    selectedTodoId: PropTypes.string,
    fetchTodos: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }

  render() {
    const { selectedTodoId } = this.props;

    return <Todos selectedTodoId={selectedTodoId} />;
  }
}

const connector = connect(
  (state, props) => ({ selectedTodoId: props.match.params._id }),
  { fetchTodos: actionCreators.fetchTodos },
);

export default connector(TodosContainer);
