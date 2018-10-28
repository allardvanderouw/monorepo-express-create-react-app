import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, FormControlLabel, Grid, ListItem, Paper, Switch } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import i18n from 'i18next'

import Form from '../Form'

const styleSheet = theme => ({
  rootContainer: {
    ...theme.mixins.gutters(),
    height: '100%',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.default,
    overflow: 'scroll',
    boxSizing: 'border-box',
  },
  button: {
    margin: theme.spacing.unit,
  },
})

class EditComponent extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    save: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    modify: PropTypes.func.isRequired,
  }

  handleTitleChange = (event) => {
    const { modify } = this.props
    modify({ title: event.target.value })
  }

  handleDescriptionChange = (event) => {
    const { modify } = this.props
    modify({ description: event.target.value })
  }

  handleNotesChange = (event) => {
    const { modify } = this.props
    modify({ notes: event.target.value })
  }

  handleSaveClick = () => {
    const { save } = this.props
    save()
  }

  handleRemoveClick = () => {
    const { remove } = this.props
    remove()
  }

  handleCompletedChange = (event) => {
    const { modify } = this.props
    modify({ completed: event.target.checked })
  }

  render() {
    const { classes, todo, meta } = this.props

    const isDisabled = !meta.isLoaded || meta.isLoading || meta.isSaving

    return (
      <div className={classes.rootContainer}>
        <Paper>
          <Form
            disabled={isDisabled}
            title={todo.title}
            description={todo.description}
            notes={todo.notes}
            changeTitle={this.handleTitleChange}
            changeDescription={this.handleDescriptionChange}
            changeNotes={this.handleNotesChange}
          />
          <Divider />
          <ListItem justify="space-between">
            <FormControlLabel
              control={
                <Switch
                  checked={todo.completed}
                  onChange={this.handleCompletedChange}
                  color="primary"
                />
              }
              label={i18n.t('Todo:completed')}
            />
            <Grid container justify="flex-end">
              <Grid item>
                <Button variant="contained" color="secondary" onClick={this.handleRemoveClick} className={classes.button} disabled={isDisabled}>
                  {i18n.t('Todo:remove')}
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={this.handleSaveClick} className={classes.button} disabled={isDisabled}>
                  {i18n.t('Todo:save')}
                </Button>
              </Grid>
            </Grid>
          </ListItem>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styleSheet)(EditComponent)
