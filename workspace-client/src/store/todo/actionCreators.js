import * as actionTypes from './actionTypes'

export const clear = () => ({
  type: actionTypes.CLEAR,
})

export const fetch = _id => ({
  type: actionTypes.FETCH,
  meta: {
    _id,
  },
})

export const fetchFailure = (_id, message) => ({
  type: actionTypes.FETCH_FAILURE,
  meta: { _id },
  payload: { message },
  error: true,
})

export const fetchRequest = _id => ({
  type: actionTypes.FETCH_REQUEST,
  meta: { _id },
})

export const fetchSuccess = todo => ({
  type: actionTypes.FETCH_SUCCESS,
  payload: { todo },
})

export const add = () => ({
  type: actionTypes.ADD,
})

export const addFailure = message => ({
  type: actionTypes.ADD_FAILURE,
  payload: { message },
  error: true,
})

export const addRequest = () => ({
  type: actionTypes.ADD_REQUEST,
})

export const addSuccess = todo => ({
  type: actionTypes.ADD_SUCCESS,
  payload: { todo },
})

export const save = () => ({
  type: actionTypes.SAVE,
})

export const saveFailure = (_id, message) => ({
  type: actionTypes.SAVE_FAILURE,
  meta: { _id },
  payload: { message },
  error: true,
})

export const saveRequest = _id => ({
  type: actionTypes.SAVE_REQUEST,
  meta: { _id },
})

export const saveSuccess = todo => ({
  type: actionTypes.SAVE_SUCCESS,
  payload: { todo },
})

export const remove = () => ({
  type: actionTypes.REMOVE,
})

export const removeFailure = (_id, message) => ({
  type: actionTypes.REMOVE_FAILURE,
  meta: { _id },
  payload: { message },
  error: true,
})

export const removeRequest = _id => ({
  type: actionTypes.REMOVE_REQUEST,
  meta: { _id },
})

export const removeSuccess = _id => ({
  type: actionTypes.REMOVE_SUCCESS,
  meta: { _id },
})

export const modify = todo => ({
  type: actionTypes.MODIFY,
  todo,
})
