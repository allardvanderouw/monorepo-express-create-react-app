import * as actionTypes from './actionTypes'

export const add = notification => ({
  type: actionTypes.ADD,
  notification,
})

export const shift = () => ({
  type: actionTypes.SHIFT,
})
