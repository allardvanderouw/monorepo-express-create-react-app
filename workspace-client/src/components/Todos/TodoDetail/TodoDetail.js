import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import i18n from 'i18next';

import Loading from '../../Shared/Loading';

const styleSheet = theme => ({
  rootContainer: {
    ...theme.mixins.gutters(),
    height: '100%',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.default,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class TodoDetail extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired,
    todoMeta: PropTypes.object.isRequired,
  }

  render() {
    const { classes, todo, todoMeta } = this.props;

    let loading;
    if (todoMeta.isLoading) {
      loading = (
        <Loading message={i18n.t('Todo:loading')} />
      );
    }

    return (
      <div className={classes.rootContainer}>
        <Paper className={classes.root}>
          <Typography variant="headline" component="h3">
            {todo.title}
          </Typography>
          <Typography component="p">
            {todo.description}
          </Typography>
          {loading}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styleSheet)(TodoDetail);
