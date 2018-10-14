import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

const notificationsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD: {
      return state.concat({ ...action.notification, key: new Date().getTime() })
    }

    case actionTypes.SHIFT: {
      return state.filter((notification, index) => index !== 0)
    }

    default: {
      return state
    }
  }
}

export default combineReducers({
  notifications: notificationsReducer,
})
