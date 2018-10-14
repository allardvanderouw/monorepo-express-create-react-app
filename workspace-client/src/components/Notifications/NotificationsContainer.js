import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Notifications from './Notifications'
import { shift } from '../../store/notifications/actionCreators'

class NotificationsContainer extends PureComponent {
  static propTypes = {
    notifications: PropTypes.array.isRequired,
    shift: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Notifications
        notifications={this.props.notifications}
        shift={this.props.shift}
      />
    )
  }
}

const connector = connect(
  state => ({
    notifications: state.notificationsState.notifications,
  }),
  {
    shift,
  },
)

export default connector(NotificationsContainer)
