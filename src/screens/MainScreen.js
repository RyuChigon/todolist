import React from 'react';
import Preview from '../components/Preview/Preview';
import Viewer from '../components/Viewer/Viewer';
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
    this.state = {
      view: false,
    }
  }

  renderPreview() {
    const todoList = this.props.todoList;
    return (
      todoList.map((todo, index) => {
        return (
          <Preview onSelect={() => {
            this.setState({view: true});
            this.props.selectTodo(index);
          }} key={`${todo.title}::${index}`} todo={todo}/>
        )
      })
    )
  }

  renderView() {
    const todoList = this.props.todoList;
    const index_todo = this.props.index_todo;
    return (
      <Viewer todo={todoList[index_todo]} onC={() => this.setState({view: false})} />
    )
  }

  viewer() {
    if (this.state.view === true) {
      return this.renderView();
    } else {
      return this.renderPreview();
    }
  }
  

  render() {
    const todoList = this.props.todoList;
    return (
      <>
      <button><Link to='/write'>작성</Link></button>
      {this.viewer()}
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
