import React, { PureComponent } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import TodosContainer from '../Todos/TodosContainer'
import App from './App'

class AppContainer extends PureComponent {
  render() {
    return (
      <App>
        <Switch>
          <Route exact path="/:_id?" component={TodosContainer}/>
        </Switch>
      </App>
    )
  }
}

export default withRouter(AppContainer)
