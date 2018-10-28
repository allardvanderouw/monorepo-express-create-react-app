import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import i18n from 'i18next'

import TodoListItem from './TodoListItem'
import Loading from '../../../Shared/Loading'

const styleSheet = theme => ({
  content: {
    flex: '1',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: 'scroll',
  },
  addNewTodoIcon: {
    backgroundColor: theme.palette.primary.main,
  },
  addNewTodoText: {
    color: theme.palette.primary.main,
  },
})

class TodoList extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    todos: PropTypes.array.isRequired,
    selectedTodoId: PropTypes.string,
  }

  render() {
    const {
      classes,
      todos,
      selectedTodoId,
      isLoading,
    } = this.props

    if (isLoading) {
      return (
        <List className={classes.content}>
          <Loading message={i18n.t('Todos:loading')} />
        </List>
      )
    }

    let content
    if (todos.length === 0) {
      content = [(
        <ListItem divider key="EmptyTodos">
          <ListItemText primary={i18n.t('Todos:empty')} />
        </ListItem>
      )]
    } else {
      content = todos.map(todo => (
        <TodoListItem
          key={todo._id}
          todo={todo}
          selected={todo._id === selectedTodoId}
        />
      ))
    }

    const addNewTodo = (
      <ListItem key="AddNewTodo" button component={Link} to={'/new'}>
        <ListItemAvatar>
          <Avatar className={classes.addNewTodoIcon}>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={(
            <Typography variant="subheading" className={classes.addNewTodoText}>
              {i18n.t('Todos:addNewTodo')}
            </Typography>
          )}
        />
      </ListItem>
    )

    content = content.concat(addNewTodo)

    return (
      <List disablePadding className={classes.content}>
        {content}
      </List>
    )
  }
}

export default withStyles(styleSheet)(TodoList)
