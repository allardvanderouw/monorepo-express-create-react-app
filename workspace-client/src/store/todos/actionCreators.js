import * as actionTypes from './actionTypes'

export const refresh = () => ({ type: actionTypes.REFRESH })

export const fetch = () => ({ type: actionTypes.FETCH })

export const fetchFailure = message => ({
  type: actionTypes.FETCH_FAILURE,
  payload: { message },
})

export const fetchRequest = () => ({ type: actionTypes.FETCH_REQUEST })

export const fetchSuccess = todos => ({
  type: actionTypes.FETCH_SUCCESS,
  payload: { todos },
})

export const search = query => ({
  type: actionTypes.SEARCH,
  query,
})
