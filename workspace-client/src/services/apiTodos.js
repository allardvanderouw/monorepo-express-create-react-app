import i18n from 'i18next'

const todosUrl = '/api/todos'
const todoUrl = _id => `/api/todos/${_id}`

export const find = async () => {
  let response
  try {
    response = await fetch(todosUrl)
  } catch (error) {
    throw new Error(i18n.t('Api:networkError'))
  }
  if (!response.ok) {
    throw new Error(i18n.t('Api:serverError'))
  } else {
    return response.json()
  }
}

export const read = async (_id) => {
  let response
  try {
    response = await fetch(todoUrl(_id))
  } catch (error) {
    throw new Error(i18n.t('Api:networkError'))
  }
  if (!response.ok) {
    throw new Error(i18n.t('Api:serverError'))
  } else {
    return response.json()
  }
}

export const add = async (todo) => {
  let response
  try {
    response = await fetch(todosUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
  } catch (error) {
    throw new Error(i18n.t('Api:networkError'))
  }
  if (!response.ok) {
    throw new Error(i18n.t('Api:serverError'))
  } else {
    return response.json()
  }
}

export const modify = async (todo) => {
  let response
  try {
    response = await fetch(todoUrl(todo._id), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
  } catch (error) {
    throw new Error(i18n.t('Api:networkError'))
  }
  if (!response.ok) {
    throw new Error(i18n.t('Api:serverError'))
  } else {
    return response.json()
  }
}

export const remove = async (_id) => {
  let response
  try {
    response = await fetch(todoUrl(_id), {
      method: 'DELETE',
    })
  } catch (error) {
    throw new Error(i18n.t('Api:networkError'))
  }
  if (!response.ok) {
    throw new Error(i18n.t('Api:serverError'))
  }
}
