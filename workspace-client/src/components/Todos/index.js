import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as todosActionCreators from '../../store/todos/actionCreators'
import Todos from './Todos'

class TodosContainer extends PureComponent {
  static propTypes = {
    selectedId: PropTypes.string,
    isNew: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetch } = this.props
    fetch()
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
    selectedId: props.match.params.id,
    isNew: props.match.params.id === 'new',
  }),
  {
    fetch: todosActionCreators.fetch,
  },
)

export default connector(TodosContainer)
