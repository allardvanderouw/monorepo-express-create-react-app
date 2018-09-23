import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem, TextField } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import i18n from 'i18next';

const styleSheet = theme => ({
  filter: {
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    display: 'flex',
  },
  input: { flex: 1 },
});

class TodoFilter extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchTodos: PropTypes.func.isRequired,
  }

  render() {
    const { classes, isLoading, fetchTodos } = this.props;

    let refreshButton;
    // keys added to IconButton to trigger correct react rendering
    if (isLoading) {
      refreshButton = (
        <IconButton key='spinning' className={classes.refreshIcon} disabled={true}>
          <RefreshIcon />
        </IconButton>
      );
    } else {
      refreshButton = (
        <IconButton key='static' className={classes.refreshIcon} onClick={fetchTodos}>
          <RefreshIcon />
        </IconButton>
      );
    }

    return (
      <List className={classes.filter}>
        <ListItem>
          <TextField
            label={i18n.t('Todos:Filter:search')}
            className={classes.input}
            value={''}
            onChange={this.handleChangeName}
          />
          {refreshButton}
        </ListItem>
      </List>
    );
  }
}

export default withStyles(styleSheet)(TodoFilter);
