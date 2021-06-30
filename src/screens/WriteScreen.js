import React from 'react';
import Write from '../components/Write/Write';
import { Link } from 'react-router-dom';
import { writeTodo, modifyTodo, unselectTodo } from '../actions/actions';
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
    modifyTodo: (todo) => dispatch(modifyTodo(todo)),
    unselectTodo: () => dispatch(unselectTodo()),
  };
};

class WriteScreen extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.index_todo === undefined) {
      this.state = {
        writer: '',
        title: '',
        content: '',
        password: '',
        edit: false,
      }
    } else {
      this.state = {
        writer: this.props.todoList[this.props.index_todo].writer,
        title: this.props.todoList[this.props.index_todo].title,
        content: this.props.todoList[this.props.index_todo].content,
        password: this.props.todoList[this.props.index_todo].password,
        edit: true,
      }
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

  write = () => {
    this.props.writeTodo({ writer: this.state.writer, title: this.state.title, content: this.state.content, password: this.state.password });
    this.props.unselectTodo();
  }

  modify = () => {
    this.props.modifyTodo({ writer: this.state.writer, title: this.state.title, content: this.state.content, password: this.state.password });
    this.props.unselectTodo();
  }

  writeOrModify = () => {
    if (this.state.edit === true) {
      return <Link to='/'><button onClick={() => this.modify()}>수정</button></Link>
    } else {
      return <Link to='/'><button onClick={() => this.write()}>작성</button></Link>
    }
  }

  backOrCancel = () => {
    if (this.state.edit === true) {
      return <Link to='/view'><button >취소</button></Link>
    } else {
      return <Link to='/'><button >이전</button></Link>
    }
  }

  render() {
    return (
      <div>
        <Write 
          {...this.state}
          changeWriter={(text) => this.onChangeWriter(text)}
          changeTitle={(text) => this.onChangeTitle(text)}
          changeContent={(text) => this.onChangeContent(text)}
          changePassword={(text) => this.onChangePassword(text)}
        />
        {this.writeOrModify()}
        {this.backOrCancel()}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteScreen);