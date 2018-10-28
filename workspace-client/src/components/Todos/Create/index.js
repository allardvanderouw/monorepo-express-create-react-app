import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deselect, add, modify } from '../../../store/todo/actionCreators'
import Create from './Create'

class CreateContainer extends PureComponent {
  static propTypes ={
    todo: PropTypes.object.isRequired,
    isAdding: PropTypes.bool.isRequired,
    deselect: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    modify: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Create
        todo={this.props.todo}
        isAdding={this.props.isAdding}
        add={this.props.add}
        modify={this.props.modify}
      />
    )
  }
}

const connector = connect(
  state => ({
    todo: state.todoState.todo,
    isAdding: state.todoState.meta.isAdding,
  }),
  {
    deselect,
    add,
    modify,
  },
)

export default connector(CreateContainer)
