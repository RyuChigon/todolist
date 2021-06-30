import React from 'react';
import { Link } from 'react-router-dom';

class Viewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>작성자</p>
        <p>{this.props.todo.writer}</p>
        <p>제목</p>
        <p>{this.props.todo.title}</p>
        <p>내용</p>
        <p>{this.props.todo.content}</p>
        <Link to='/'><button onClick={() => this.props.onC()}>목록으로</button></Link>
      </div>
    )
  }
}

export default Viewer;