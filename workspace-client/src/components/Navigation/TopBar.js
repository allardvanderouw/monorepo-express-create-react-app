import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import i18n from 'i18next'

const drawerWidth = 250

const styleSheet = theme => ({
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
})

class TopBar extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isSideMenuOpen: PropTypes.bool.isRequired,
    showSideMenu: PropTypes.func.isRequired,
  }

  render() {
    const {
      classes,
      isSideMenuOpen,
      showSideMenu,
    } = this.props

    return (
      <AppBar
        position="absolute"
        className={classNames(classes.appBar, isSideMenuOpen && classes.appBarShift)}>
        <Toolbar>
          <IconButton className={classNames(classes.menuButton, isSideMenuOpen && classes.hide)} color="inherit" onClick={showSideMenu}>
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {i18n.t('Main:title')}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styleSheet)(TopBar)
