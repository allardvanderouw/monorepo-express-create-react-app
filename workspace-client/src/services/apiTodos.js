import i18n from 'i18next';

const todosUrl = '/api/todos';
const todoUrl = _id => `/api/todos/${_id}`;

const getTodos = async () => {
  let response;
  try {
    response = await fetch(todosUrl);
  } catch (error) {
    throw new Error(i18n.t('Api:networkError'));
  }
  if (!response.ok) {
    throw new Error(i18n.t('Api:serverError'));
  } else {
    return response.json();
  }
};

const getTodo = async (_id) => {
  let response;
  try {
    response = await fetch(todoUrl(_id));
  } catch (error) {
    throw new Error(i18n.t('Api:networkError'));
  }
  if (!response.ok) {
    throw new Error(i18n.t('Api:serverError'));
  } else {
    return response.json();
  }
};

export default {
  getTodos,
  getTodo,
};
