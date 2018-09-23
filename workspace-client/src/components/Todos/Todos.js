import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Grid, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import TodoMasterContainer from './TodoMaster/TodoMasterContainer';
import TodoDetailContainer from './TodoDetail/TodoDetailContainer';

const styleSheet = { container: { height: '100%' } };

class Todos extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    selectedTodoId: PropTypes.string,
  }

  render() {
    const { classes, selectedTodoId } = this.props;

    return (
      <Grid container className={classes.container}>
        <Hidden smDown={!!selectedTodoId}>
          <Grid item md={4} xs={12}>
            <TodoMasterContainer selectedTodoId={selectedTodoId} />
          </Grid>
        </Hidden>
        <Hidden smDown={!selectedTodoId}>
          <Grid item md={8} xs={12}>
            <TodoDetailContainer key={selectedTodoId} selectedTodoId={selectedTodoId} />
          </Grid>
        </Hidden>
      </Grid>
    );
  }
}

export default withStyles(styleSheet)(Todos);
