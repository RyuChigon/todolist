import React from 'react';
import Preview from '../components/Preview/Preview';
import { Link } from 'react-router-dom';
import { selectTodo, unselectTodo } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todoList: state.app_reducer.todoList,
    index_todo: state.app_reducer.index_todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTodo: (index) => dispatch(selectTodo(index)),
    unselectTodo: () => dispatch(unselectTodo()),
  }
}


class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
    }
  }

  render() {
    const todoList = this.props.todoList;
    return (
      <>
      <Link to='/write'><button>작성</button></Link>
      {todoList.map((todo, index) => {
        return (
          <Preview onSelect={() => {
            this.setState({view: true});
            this.props.selectTodo(index);
          }} key={`${todo.title}::${index}`} todo={todo}/>
        )
      })}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
