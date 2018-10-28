import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Avatar, ListItem, ListItemText } from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/Check'
import { green } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

const styleSheet = theme => ({
  active: { backgroundColor: theme.palette.action.selected },
  completed: { backgroundColor: green[500] },
})

class ListItemComponent extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired,
    selected: PropTypes.bool.isRequired,
  }

  render() {
    const { classes, todo, selected } = this.props

    let avatar
    if (todo.completed) {
      avatar = (
        <Avatar className={classes.completed}>
          <CheckCircleOutlineIcon />
        </Avatar>
      )
    } else {
      avatar = (
        <Avatar> </Avatar>
      )
    }

    return (
      <ListItem divider button component={Link} to={`/todos/${todo._id}`} className={classNames(selected && classes.active)}>
        {avatar}
        <ListItemText primary={todo.title} secondary={todo.description} />
      </ListItem>
    )
  }
}

export default withStyles(styleSheet)(ListItemComponent)
