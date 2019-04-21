import React, { PureComponent } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import TodosContainer from '../Todos'
import App from './App'

class AppContainer extends PureComponent {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path="/">
            <Redirect to="/todos" />
          </Route>
          <Route exact path="/todos/:id?" component={TodosContainer} />
        </Switch>
      </App>
    )
  }
}

export default withRouter(AppContainer)
