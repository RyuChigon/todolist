import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, pwCheckCancel } from '../../actions/actions';
import SButton from '../../components/SButton/SButton';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    todoList: state.app_reducer.todoList,
    index_todo: state.app_reducer.index_todo,
    Tmodify_Fdelete: state.app_reducer.Tmodify_Fdelete,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: () => dispatch(deleteTodo()),
    pwCheckCancel: () => dispatch(pwCheckCancel()),
  }
}

class PWCheckScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pwCheck: '',
      correct: false,
    }
  }

  onChangePwChecker = (e) => {
    this.setState({pwCheck: e.target.value});
  }

  checkPassword = () => {
    if (this.props.Tmodify_Fdelete !== undefined) {
      return (
        <SButton name="확인"
          onClick={() => {
            if (this.state.pwCheck === this.props.todoList[this.props.index_todo].password) {
              this.setState({correct: true});
            } else {
              this.setState({correct: false});
              alert("비밀번호가 틀립니다. 비밀번호를 확인해주세요.");
            }
          }} />
      )
    } else {
      return <p>wrong access!!</p>
    }
  }

  modifyOrDelete = () => {
    if (this.state.correct === true) {
      if (this.props.Tmodify_Fdelete === true) {
        return <Link to='/write' ><SButton name="수정" onClick={() => console.log('correct password: modify')} /></Link>
      } else {
        return <Link to='/'><SButton name="삭제" onClick={() => {console.log('correct password: delete'); this.props.deleteTodo();}} /></Link>
      }
    }
  }

  render() {
    return (
      <div>
        <p>비밀번호를 입력하세요</p>
        <input type="text" placeholder="비밀번호" value={this.state.pwCheck} onChange={(e) => this.onChangePwChecker(e)} />
        {this.checkPassword()}
        {this.modifyOrDelete()}
        <br />
        <Link to ='/view' ><SButton name="이전" onClick={() => this.props.pwCheckCancel()} /></Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PWCheckScreen);