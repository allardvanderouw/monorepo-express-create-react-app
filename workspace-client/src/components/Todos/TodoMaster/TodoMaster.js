import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import TodoFilterContainer from './TodoFilter/TodoFilterContainer'
import TodoListContainer from './TodoList/TodoListContainer'

const styleSheet = theme => ({
  container: {
    height: '100%',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
  },
})

class Master extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props

    return (
      <Grid container className={classes.container}>
        <TodoFilterContainer />
        <TodoListContainer />
      </Grid>
    )
  }
}

export default withStyles(styleSheet)(Master)
