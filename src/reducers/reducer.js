import types from "../actions/types";

const initialState = {
  todoList: [], //글은 todo, 글 목록은 todoList로 정의한다.
  index_todo: undefined, //현재 선택된 todo의 index(todoList안의 todo의 index)를 저장한다. 
  Tmodify_Fdelete: undefined, //true 상태이면 수정, false 상태이면 삭제. 평상시에는 undefined로 되어있다.
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WRITE_TODO: {
      return {...state, todoList: [action.todo, ...state.todoList], index_todo: 0};
    }

    case types.SELECT_TODO: {
      return {...state, index_todo: action.index};
    }

    case types.UNSELECT_TODO: {
      return {...state, index_todo: undefined, Tmodify_Fdelete: undefined};
    }

    case types.MODIFY_TODO: {
      const commentList = state.todoList[state.index_todo].commentList;
      const new_todo = {...action.todo, commentList: commentList}
      const new_todoList = [
        ...state.todoList.slice(0, state.index_todo),
        new_todo,
        ...state.todoList.slice(state.index_todo + 1),
      ];
      return {...state, todoList: new_todoList};
    }

    case types.DELETE_TODO: {
      const new_todoList = state.todoList.filter((_, index) => {
        return index !== state.index_todo;
      });
      return {...state, todoList: new_todoList, index_todo: undefined};
    }

    case types.PWCHECKFORMODIFY: {
      return {...state, Tmodify_Fdelete: true};
    }

    case types.PWCHECKFORDELETE: {
      return {...state, Tmodify_Fdelete: false};
    }

    case types.PWCHECKCANCEL: {
      return {...state, Tmodify_Fdelete: undefined};
    }

    case types.WRITE_COMMENT: {
      const todo = state.todoList[state.index_todo];
      const todoCommentList = state.todoList[state.index_todo].commentList;
      const newCommentList = [...todoCommentList, action.comment];
      const newTodo = {writer: todo.writer, title: todo.title, content: todo.content, password: todo.password, commentList: newCommentList, like: todo.like };
      const new_todoList = [
        ...state.todoList.slice(0, state.index_todo),
        newTodo,
        ...state.todoList.slice(state.index_todo + 1),
      ]
      return {...state, todoList: new_todoList};
    }

    case types.PRESS_LIKE: {
      const todo = state.todoList[state.index_todo];
      const todoLike = state.todoList[state.index_todo].like;
      const newTodoLike = todoLike + 1;
      const newTodo = {writer: todo.writer, title: todo.title, content: todo.content, password: todo.password, commentList: todo.commentList, like: newTodoLike };
      const new_todoList = [
        ...state.todoList.slice(0, state.index_todo),
        newTodo,
        ...state.todoList.slice(state.index_todo + 1),
      ]
      return {...state, todoList: new_todoList};
    }

    case types.PREV_VIEW: {
      if (state.index_todo === 0) {
        alert('마지막 글입니다.');
        return {...state};
      } else if (state.index_todo !== undefined) {
        const prev_index_todo = state.index_todo - 1;
        return {...state, index_todo: prev_index_todo};
      }
    }

    case types.NEXT_VIEW: {
      if (state.todoList.length === state.index_todo + 1) {
        alert('마지막 글입니다.');
        return {...state};
      } else if (state.index_todo !== undefined) {
        const prev_index_todo = state.index_todo + 1;
        return {...state, index_todo: prev_index_todo};
      }
    }

    default:
      return state;
  }
};

export default reducer;