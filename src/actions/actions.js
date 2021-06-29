import types from './types';

export const writeTodo = (todo) => {
  console.log('Action::WRITE_TODO');
  return {
    type: types.WRITE_TODO,
    todo
  };
};

export const selectTodo = (index) => {
  console.log('Action::SELECT_TODO');
  return {
    types: types.SELECT_TODO,
    index
  };
};

export const unselectTodo = () => {
  console.log('Action::UNSELECT_TODO');
  return {types: types.UNSELECT_TODO};
};

export const modifyTodo = (todo) => {
  console.log('ACtion::MODIFY_TODO');
  return {
    types: types.MODIFY_TODO,
    todo
  };
};

export const deleteTodo = () => {
  console.log('Action::DELETE_TODO');
  return {types: types.DELETE_TODO};
};