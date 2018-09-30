import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, TextField } from '@material-ui/core';
import i18n from 'i18next';

class TodoForm extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    changeTitle: PropTypes.func.isRequired,
    changeDescription: PropTypes.func.isRequired,
    changeNotes: PropTypes.func.isRequired,
  }

  render() {
    const {
      title,
      description,
      notes,
      changeTitle,
      changeDescription,
      changeNotes,
    } = this.props;

    return (
      <List disablePadding>
        <ListItem>
          <TextField fullWidth
            label={i18n.t('Todo:title')}
            value={title}
            onChange={changeTitle}
          />
        </ListItem>
        <ListItem>
          <TextField fullWidth
            label={i18n.t('Todo:description')}
            value={description}
            onChange={changeDescription}
          />
        </ListItem>
        <ListItem>
          <TextField fullWidth multiline
            label={i18n.t('Todo:notes')}
            value={notes}
            onChange={changeNotes}
          />
        </ListItem>
      </List>
    );
  }
}

export default TodoForm;
