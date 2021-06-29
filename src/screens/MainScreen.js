import React from 'react';
import Header from '../components/Header/Header.js';
import Preview from '../components/Preview/Preview';
import { Link } from 'react-router-dom';
import { selectTodo } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todoList: state.app_reducer.todoList,
    index_todo: state.app_reducer.index_todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTodo: (index) => dispatch(selectTodo(index))
  }
}


class MainScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todoList = this.props.todoList;
    return (
      <>
      <Header/>
      <button><Link to='/write'>작성</Link></button>
      {todoList.map((todo, index) => {
        return (
          <Preview key={`${todo.title}::${index}`} todo={todo}/>
        )
      })}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
