import React from 'react';

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
        <button onClick={() => this.props.onC()}>목록으로</button>
      </div>
    )
  }
}

export default Viewer;