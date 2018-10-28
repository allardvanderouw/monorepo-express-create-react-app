import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deselect, save, remove, modify } from '../../../store/todo/actionCreators'
import Edit from './Edit'

class EditContainer extends PureComponent {
  static propTypes ={
    selectedId: PropTypes.string,
    todo: PropTypes.object,
    meta: PropTypes.object,
    deselect: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    modify: PropTypes.func.isRequired,
  }

  render() {
    // No todo was selected
    if (!this.props.selectedId) {
      return null
    }

    return (
      <Edit
        todo={this.props.todo}
        meta={this.props.meta}
        save={this.props.save}
        remove={this.props.remove}
        modify={this.props.modify}
      />
    )
  }
}

const connector = connect(
  state => ({
    selectedId: state.todoState.selectedId,
    todo: state.todoState.todo,
    meta: state.todoState.meta,
  }),
  {
    deselect,
    save,
    remove,
    modify,
  },
)

export default connector(EditContainer)
