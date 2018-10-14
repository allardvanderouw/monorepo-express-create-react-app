import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { CircularProgress, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styleSheet = theme => ({
  loading: {
    ...theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      textAlign: 'center',
    }),
  },
  loadingText: { marginTop: 16 },
})

class Loading extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
  }

  render() {
    const { classes, message } = this.props

    return (
      <div className={classes.loading}>
        <CircularProgress size={50}/>
        <Typography className={classes.loadingText}>{message}</Typography>
      </div>
    )
  }
}

export default withStyles(styleSheet)(Loading)
