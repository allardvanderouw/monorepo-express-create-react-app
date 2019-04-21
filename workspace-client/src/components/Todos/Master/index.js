import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Master from './Master'

class MasterContainer extends PureComponent {
  static propTypes ={
    selectedId: PropTypes.string,
  }

  render() {
    const { selectedId } = this.props

    return <Master selectedId={selectedId} />
  }
}

export default MasterContainer
