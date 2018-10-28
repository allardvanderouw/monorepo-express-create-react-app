import React, { Fragment, PureComponent } from 'react'
import TopBar from './TopBar'
import SideMenu from './SideMenu'

class NavigationContainer extends PureComponent {
  state = { isSideMenuOpen: false }

  handleShowSideMenu = () => {
    this.setState({ isSideMenuOpen: true })
  }

  handleHideSideMenu = () => {
    this.setState({ isSideMenuOpen: false })
  }

  render() {
    const { isSideMenuOpen } = this.state

    return (
      <Fragment>
        <TopBar
          isSideMenuOpen={isSideMenuOpen}
          showSideMenu={this.handleShowSideMenu}
        />
        <SideMenu
          hideSideMenu={this.handleHideSideMenu}
          isSideMenuOpen={isSideMenuOpen}
          showSideMenu={this.handleShowSideMenu}
        />
      </Fragment>
    )
  }
}

export default NavigationContainer
