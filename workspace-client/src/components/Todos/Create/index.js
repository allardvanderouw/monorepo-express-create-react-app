import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as todoActionCreators from '../../../store/todo/actionCreators'
import Create from './Create'

class CreateContainer extends PureComponent {
  static propTypes ={
    todo: PropTypes.object.isRequired,
    isAdding: PropTypes.bool.isRequired,
    clear: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    modify: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { clear } = this.props
    clear()
  }

  render() {
    const { todo, isAdding, add, modify } = this.props

    return (
      <Create
        todo={todo}
        isAdding={isAdding}
        add={add}
        modify={modify}
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
    clear: todoActionCreators.clear,
    add: todoActionCreators.add,
    modify: todoActionCreators.modify,
  },
)

export default connector(CreateContainer)
