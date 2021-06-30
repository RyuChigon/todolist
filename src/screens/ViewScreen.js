import React from 'react';
import { connect } from 'react-redux';
import Viewer from '../components/Viewer/Viewer';
import { unselectTodo } from '../actions/actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    todoList: state.app_reducer.todoList,
    index_todo: state.app_reducer.index_todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unselectTodo: () => dispatch(unselectTodo())
  }
}

class ViewScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    const todoList = this.props.todoList;
    const index_todo = this.props.index_todo;
    return (
      <div>
        <Viewer todo={todoList[index_todo]} />
        <button><Link to='/'>이전</Link></button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewScreen);