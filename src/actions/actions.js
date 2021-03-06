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
    type: types.SELECT_TODO,
    index
  };
};

export const unselectTodo = () => {
  console.log('Action::UNSELECT_TODO');
  return {type: types.UNSELECT_TODO};
};

export const modifyTodo = (todo) => {
  console.log('ACtion::MODIFY_TODO');
  return {
    type: types.MODIFY_TODO,
    todo
  };
};

export const deleteTodo = () => {
  console.log('Action::DELETE_TODO');
  return {type: types.DELETE_TODO};
};

export const pwCheckForModify = () => {
  console.log('Action::PWCHECKFORMODIFY');
  return {type: types.PWCHECKFORMODIFY}
};

export const pwCheckForDelete = () => {
  console.log('Action::PWCHECKFORDELETE');
  return {type: types.PWCHECKFORDELETE};
}

export const pwCheckCancel = () => {
  console.log('Action::PWCHECKCANCEL');
  return {type: types.PWCHECKCANCEL};
}

export const writeComment = (comment) => {
  console.log('Action::WRITE_COMMENT');
  return {
    type: types.WRITE_COMMENT,
    comment
  };
}

export const pressLike = () => {
  console.log('Action::PRESS_LIKE');
  return {type: types.PRESS_LIKE};
}

export const prevView = () => {
  console.log('Action::PREV_VIEW');
  return {type: types.PREV_VIEW};
}

export const nextView = () => {
  console.log('Action::NEXT_VIEW');
  return {type: types.NEXT_VIEW};
}