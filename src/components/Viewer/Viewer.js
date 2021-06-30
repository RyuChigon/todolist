import React from 'react';
import { Link } from 'react-router-dom';
import SButton from '../SButton/SButton';

class Viewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to='/write'><SButton name='수정' onClick={() => console.log('go to modify')} /></Link>
        <Link to='/'><SButton name='삭제' onClick={() => this.props.onDelete()} /></Link>
        <p>작성자</p>
        <p>{this.props.todo.writer}</p>
        <p>제목</p>
        <p>{this.props.todo.title}</p>
        <p>내용</p>
        <p>{this.props.todo.content}</p>
        <Link to='/'><SButton onClick={() => this.props.onMain()} name='목록'/></Link>
      </div>
    )
  }
}

export default Viewer;