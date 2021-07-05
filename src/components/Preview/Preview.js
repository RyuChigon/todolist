import React from 'react';
import './Preview.css';
import { Link } from 'react-router-dom';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to='/view'><button className='todo' onClick={() => this.props.onSelect()} ><p>작성자:{this.props.todo.writer} 제목:{this.props.todo.title} 좋아요:{this.props.todo.like} 댓글:{this.props.todo.commentList.length}</p></button></Link>
      </div>
    )
  }
}

export default Preview;