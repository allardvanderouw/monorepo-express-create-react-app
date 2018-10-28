import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { IconButton, ListItem, TextField } from '@material-ui/core'
import RefreshIcon from '@material-ui/icons/Refresh'
import i18n from 'i18next'

const styleSheet = theme => ({
  filter: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  input: { flex: 1 },
})

class FilterComponent extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    query: PropTypes.string.isRequired,
    refresh: PropTypes.func.isRequired,
    search: PropTypes.func.isRequired,
  }

  handleQueryChange = (event) => {
    this.props.search(event.target.value)
  }

  render() {
    const { classes, isLoading, query, refresh } = this.props

    return (
      <ListItem divider className={classes.filter}>
        <TextField fullWidth
          label={i18n.t('Todos:Filter:search')}
          className={classes.input}
          value={query}
          onChange={this.handleQueryChange}
        />
        <IconButton className={classes.refreshIcon} onClick={refresh} disabled={isLoading}>
          <RefreshIcon />
        </IconButton>
      </ListItem>
    )
  }
}

export default withStyles(styleSheet)(FilterComponent)
