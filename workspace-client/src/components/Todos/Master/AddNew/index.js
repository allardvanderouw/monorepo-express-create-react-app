import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import i18n from 'i18next'

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

class AddNewComponent extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props

    return (
      <ListItem button component={Link} to={'/todos/new'}>
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
  }
}

export default withStyles(styleSheet)(AddNewComponent)
