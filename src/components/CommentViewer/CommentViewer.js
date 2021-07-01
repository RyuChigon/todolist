import React from 'react';
import './CommentViewer.css';

class CommentViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="commentWriter"><p>{this.props.commentWriter}</p></div>
        <div className="comment"><p>{this.props.comment}</p></div>
      </div>
    )
  }
}

export default CommentViewer;