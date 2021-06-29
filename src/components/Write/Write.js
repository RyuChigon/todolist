import React from 'react';
import './Write.css'

class Write extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>작성자</p>
        <input className="writerInput" type="text" placeholder="작성자" value={this.props.writer} onChange={(text) => this.props.changeWriter(text)} />
        <p>제목</p>
        <input className="titleInput" type="text" placeholder="제목" value={this.props.title} onChange={(text) => this.props.changeTitle(text)} />
        <br/>
        <p>본문</p>
        <input className="contentInput" type="text" placeholder="본문" value={this.props.content} onChange={(text) => this.props.changeContent(text)} />
        <p>비밀번호</p>
        <input className="passwordInput" type="text" placeholder="비밀번호" value={this.props.password} onChange={(text) => this.props.changePassword(text)} />
        <br/>
      </div>
    )
  }
}

export default Write;