import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
})

class NotificationsComponent extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    notifications: PropTypes.array.isRequired,
    shift: PropTypes.func.isRequired,
  }

  state = {
    open: false,
    notification: {},
  }

  componentDidUpdate() {
    const { notifications } = this.props
    const { open, notification } = this.state

    if (notifications.length > 1 && open) {
      // A newer notification is present, hide existing (handleExited will automatically trigger a new one)
      this.setState({ open: false })
    } else if (notifications.length > 0 && notifications[0].key !== notification.key) {
      // A new notification is present
      this.setState({
        open: true,
        notification: notifications[0],
      })
    }
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleExited = () => {
    this.props.shift()
  }

  render() {
    const { classes } = this.props
    const { notification, open } = this.state

    const { key, message } = notification

    return (
      <Snackbar
        key={key}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        onExited={this.handleExited}
        message={<span id="message-id">{message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    )
  }
}

export default withStyles(styles)(NotificationsComponent)
