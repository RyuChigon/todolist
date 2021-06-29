import React from 'react';
import Header from '../components/Header/Header';
import Write from '../components/Write/Write';
import { Link } from 'react-router-dom';
import { deleteTodo, modifyTodo, unselectTodo, writeTodo } from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todoList: state.app_reducer.todoList,
    index_todo: state.app_reducer.index_todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    writeTodo: (todo) => dispatch(writeTodo(todo)),
    unselectTodo: () => dispatch(unselectTodo()),
    modifyTodo: (todo) => dispatch(modifyTodo(todo)),
    deleteTodo: () => dispatch(deleteTodo()),
  };
};

class WriteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      writer: '',
      title: '',
      content: '',
      password: '',
    }
  }

  onChangeWriter = (e) => {
    this.setState({writer: e.target.value});
  }

  onChangeTitle = (e) => {
    this.setState({title: e.target.value});
  }

  onChangeContent = (e) => {
    this.setState({content: e.target.value});
  }

  onChangePassword = (e) => {
    this.setState({password: e.target.value});
  }

  clickSubmit = () => {
    this.props.writeTodo({ writer: this.state.writer, title: this.state.title, content: this.state.content, password: this.state.password });
  }

  render() {
    return (
      <div>
        <Header />
        <Write 
          {...this.state}
          changeWriter={(text) => this.onChangeWriter(text)}
          changeTitle={(text) => this.onChangeTitle(text)}
          changeContent={(text) => this.onChangeContent(text)}
          changePassword={(text) => this.onChangePassword(text)}
        />
        <Link to='/'><button onClick={() => this.clickSubmit()}>작성</button></Link>
        <Link to='/'><button >이전</button></Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteScreen);