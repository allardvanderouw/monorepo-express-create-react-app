import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as todoActionCreators from '../../../store/todo/actionCreators'
import Edit from './Edit'

class EditContainer extends PureComponent {
  static propTypes ={
    selectedId: PropTypes.string,
    todo: PropTypes.object,
    meta: PropTypes.object,
    fetch: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    modify: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { selectedId, fetch } = this.props
    if (selectedId) {
      fetch(selectedId)
    }
  }

  render() {
    const { selectedId, todo, meta, save, remove, modify } = this.props

    // No todo was selected
    if (!selectedId) {
      return null
    }

    return (
      <Edit
        todo={todo}
        meta={meta}
        save={save}
        remove={remove}
        modify={modify}
      />
    )
  }
}

const connector = connect(
  state => ({
    todo: state.todoState.todo,
    meta: state.todoState.meta,
  }),
  {
    fetch: todoActionCreators.fetch,
    save: todoActionCreators.save,
    remove: todoActionCreators.remove,
    modify: todoActionCreators.modify,
  },
)

export default connector(EditContainer)
