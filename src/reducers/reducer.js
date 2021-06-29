import types from "../actions/types";

const initialState = {
  todoList: [],
  index_todo: undefined,
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
      return {...state, index_todo: undefined};
    }

    case types.MODIFY_TODO: {
      const new_todoList = [
        ...state.todoList.slice(0, state.index_todo),
        action.todo,
        ...state.todoList.slice(state.index_todo + 1),
      ];
      return {...state, todoList: new_todoList};
    }

    case types.DELETE_TODO: {
      const new_todoList = state.todos.filter((_, index) => {
        return index !== state.index_todo;
      });
      return {...state, notes: new_todoList, index_todo: undefined};
    }

    default:
      return state;
  }
};

export default reducer;