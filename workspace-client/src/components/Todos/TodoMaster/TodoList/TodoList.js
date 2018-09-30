import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import i18n from 'i18next';

import TodoListItem from './TodoListItem';
import Loading from '../../../Shared/Loading';

const styleSheet = theme => ({
  content: {
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  addNewTodo: { backgroundColor: theme.palette.secondary.main },
});

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
    } = this.props;

    if (isLoading) {
      return (
        <List className={classes.content}>
          <Loading message={i18n.t('Todos:loading')} />
        </List>
      );
    }

    let content;
    if (todos.length === 0) {
      content = [(
        <ListItem key='EmptyTodos'>
          <ListItemText primary={i18n.t('Todos:empty')} />
        </ListItem>
      )];
    } else {
      content = todos.map(todo => (
        <TodoListItem
          key={todo._id}
          todo={todo}
          selected={todo._id === selectedTodoId}
        />
      ));
    }

    const addNewTodo = (
      <ListItem key='AddNewTodo' button component={Link} to={'/new'}>
        <ListItemAvatar>
          <Avatar className={classes.addNewTodo}>
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={i18n.t('Todos:addNewTodo')} />
      </ListItem>
    );

    content = content.concat(addNewTodo);

    return (
      <List disablePadding className={classes.content}>
        {content}
      </List>
    );
  }
}

export default withStyles(styleSheet)(TodoList);
