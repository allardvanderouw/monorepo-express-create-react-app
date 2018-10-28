import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Hidden } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import MasterContainer from './Master'
import CreateContainer from './Create'
import EditContainer from './Edit'

const styleSheet = {
  container: { height: '100%' },
}

class TodosComponent extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    selectedId: PropTypes.string,
    isNew: PropTypes.bool.isRequired,
  }

  render() {
    const { classes, selectedId, isNew } = this.props

    let detailContext
    if (isNew) {
      detailContext = (
        <CreateContainer />
      )
    } else if (selectedId) {
      detailContext = (
        <EditContainer />
      )
    }

    return (
      <Grid container className={classes.container}>
        <Hidden smDown={!!detailContext}>
          <Grid item md={4} xs={12}>
            <MasterContainer />
          </Grid>
        </Hidden>
        <Hidden smDown={!detailContext}>
          <Grid item md={8} xs={12}>
            {detailContext}
          </Grid>
        </Hidden>
      </Grid>
    )
  }
}

export default withStyles(styleSheet)(TodosComponent)
