import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import NavigationContainer from '../Navigation/NavigationContainer'
import NotificationsContainer from '../Notifications/NotificationsContainer'

const styleSheet = theme => ({
  root: {
    overflow: 'hidden',
    position: 'absolute',
    display: 'flex',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexGrow: 1,
  },
  content: {
    '@media (min-width:0px) and (orientation: landscape)': { paddingTop: theme.mixins.toolbar['@media (min-width:0px) and (orientation: landscape)'].minHeight },
    '@media (min-width:600px)': { paddingTop: theme.mixins.toolbar['@media (min-width:600px)'].minHeight },
    paddingTop: theme.mixins.toolbar.minHeight,
    height: '100%',
    flexGrow: 1,
  },
})

class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { children, classes } = this.props

    return (
      <div className={classes.root}>
        <NavigationContainer />
        <NotificationsContainer />
        <div className={classes.content}>
          {children}
        </div>
      </div>
    )
  }
}

export default withStyles(styleSheet)(App)
