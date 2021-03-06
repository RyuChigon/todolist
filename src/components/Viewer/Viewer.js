import React from 'react';
import { Link } from 'react-router-dom';
import SButton from '../SButton/SButton';
import './Viewer.css';

class Viewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div> 
        <div className="mini">
          <div className="mini_left" >
            <p className="fix">제목</p>
            <p className="title">{this.props.todo.title}</p>
          </div>
          <div className="mini_right">
            <div className="mini_right_left">
              <p className="fix">작성자</p>
              <p className="writer">{this.props.todo.writer}</p>
            </div>
            <div className="mini_right_btn">
              <SButton name="이전글" onClick={() => this.props.onPrevView()} />
              <SButton name="다음글" onClick={() => this.props.onNextView()} />
              <Link to='/check'><SButton name='수정' onClick={() => this.props.onModify()} /></Link>
              <Link to='/check'><SButton name='삭제' onClick={() => this.props.onDelete()} /></Link>
              <Link to='/'><SButton onClick={() => this.props.onMain()} name='목록'/></Link>
            </div>
          </div>
        </div>
        <p>{this.props.todo.like}</p>
        <hr/>
        <p className="content">{this.props.todo.content}</p>

        <SButton name="좋아요" onClick={() => this.props.pressLike()} />
        <p>{this.props.todo.like}</p>
        
        <hr/>

        <p className="fix">댓글 {this.props.todo.commentList.length}</p>
        <p>댓글 작성자</p>
        <input type="text" placeholder="댓글 작성자" value={this.props.nCommentWriter} onChange={(text) => this.props.changeNCommentWriter(text)} />
        <p>댓글 내용</p>
        <input type="text" placeholder="댓글 내용" value={this.props.nComment} onChange={(text) => this.props.changeNComment(text)} />
        <SButton name="댓글 작성" onClick={() => this.props.onWriteComment()} />

      </div>
    )
  }
}

export default Viewer;