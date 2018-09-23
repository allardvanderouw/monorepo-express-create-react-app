import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TodoMaster from './TodoMaster';

class TodoMasterContainer extends PureComponent {
  static propTypes = { selectedTodoId: PropTypes.string }

  render() {
    const { selectedTodoId } = this.props;

    return <TodoMaster selectedTodoId={selectedTodoId} />;
  }
}

export default TodoMasterContainer;
