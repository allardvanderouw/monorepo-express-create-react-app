import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Hidden } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import MasterContainer from './Master'
import CreateContainer from './Create'
import EditContainer from './Edit'

const styleSheet = {
  fullHeight: { height: '100%' },
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
        <CreateContainer key={selectedId} />
      )
    } else if (selectedId) {
      detailContext = (
        <EditContainer key={selectedId} selectedId={selectedId} />
      )
    }

    return (
      <Grid container className={classes.fullHeight}>
        <Hidden smDown={!!detailContext}>
          <Grid item md={4} xs={12} className={classes.fullHeight}>
            <MasterContainer selectedId={selectedId} />
          </Grid>
        </Hidden>
        <Hidden smDown={!detailContext}>
          <Grid item md={8} xs={12} className={classes.fullHeight}>
            {detailContext}
          </Grid>
        </Hidden>
      </Grid>
    )
  }
}

export default withStyles(styleSheet)(TodosComponent)
