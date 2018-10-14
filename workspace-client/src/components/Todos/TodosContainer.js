import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Todos from './Todos'

class TodosContainer extends PureComponent {
  static propTypes = {
    selectedId: PropTypes.string,
    isNew: PropTypes.bool,
  }

  render() {
    return (
      <Todos
        selectedId={this.props.selectedId}
        isNew={this.props.isNew}
      />
    )
  }
}

const connector = connect(
  (state, props) => ({
    selectedId: state.todoState.selectedId,
    isNew: props.match.params._id === 'new',
  }),
)

export default connector(TodosContainer)
