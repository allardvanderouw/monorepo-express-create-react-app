import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import FilterContainer from './Filter'
import ListContainer from './List'

const styleSheet = theme => ({
  container: {
    height: '100%',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
  },
})

class MasterComponent extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    selectedId: PropTypes.string,
  }

  render() {
    const { classes, selectedId } = this.props

    return (
      <Grid container className={classes.container}>
        <FilterContainer />
        <ListContainer selectedId={selectedId} />
      </Grid>
    )
  }
}

export default withStyles(styleSheet)(MasterComponent)
