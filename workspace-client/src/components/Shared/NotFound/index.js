import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styleSheet = theme => ({
  notfound: {
    ...theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      textAlign: 'center',
    }),
  },
})

class NotFoundComponent extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    description: PropTypes.string,
    header: PropTypes.string,
  }

  render() {
    const { classes, description = '', header = '' } = this.props

    return (
      <div className={classes.notfound}>
        <Typography variant="headline">{header}</Typography>
        <Typography>{description}</Typography>
      </div>
    )
  }
}

export default withStyles(styleSheet)(NotFoundComponent)
