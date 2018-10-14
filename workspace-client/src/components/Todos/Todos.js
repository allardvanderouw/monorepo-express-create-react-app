import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Hidden } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import TodoMasterContainer from './TodoMaster/TodoMasterContainer'
import TodoCreateContainer from './TodoCreate/TodoCreateContainer'
import TodoEditContainer from './TodoEdit/TodoEditContainer'

const styleSheet = {
  container: { height: '100%' },
}

class Todos extends PureComponent {
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
        <TodoCreateContainer />
      )
    } else if (selectedId) {
      detailContext = (
        <TodoEditContainer />
      )
    }

    return (
      <Grid container className={classes.container}>
        <Hidden smDown={!!detailContext}>
          <Grid item md={4} xs={12}>
            <TodoMasterContainer />
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

export default withStyles(styleSheet)(Todos)
