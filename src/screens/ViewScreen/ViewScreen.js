import React from 'react';
import './ViewScreen.css';
import { connect } from 'react-redux';
import Viewer from '../../components/Viewer/Viewer';
import CommentViewer from '../../components/CommentViewer/CommentViewer';
import { unselectTodo, deleteTodo, pwCheckForDelete, pwCheckForModify, writeComment, pressLike, prevView, nextView } from '../../actions/actions';
import SubScreen from '../../components/SubScreen/SubScreen';

const mapStateToProps = (state) => {
  return {
    todoList: state.app_reducer.todoList,
    index_todo: state.app_reducer.index_todo,
    Tmodify_Fdelete: state.app_reducer.Tmodify_Fdelete,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unselectTodo: () => dispatch(unselectTodo()),
    deleteTodo: () => dispatch(deleteTodo()),
    pwCheckForModify: () => dispatch(pwCheckForModify()),
    pwCheckForDelete: () => dispatch(pwCheckForDelete()),
    writeComment: (comment) => dispatch(writeComment(comment)),
    pressLike: () => dispatch(pressLike()),
    prevView: () => dispatch(prevView()),
    nextView: () => dispatch(nextView()),
  }
}

class ViewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nCommentWriter: '',
      nComment: '',
      numOfLike: this.props.todoList[this.props.index_todo].like,
    }
  }

  changeNCommentWriter = (e) => {
    this.setState({nCommentWriter: e.target.value});
  }

  changeNComment = (e) => {
    this.setState({nComment: e.target.value});
  }

  writeComment = () => {
    const newComment = {
      commentWriter: this.state.nCommentWriter,
      comment: this.state.nComment,
    }
    this.props.writeComment(newComment);
    this.setState({nCommentWriter: '', nComment: ''});
  }

  pressLike = async() => {
    await this.props.pressLike();
  }

  render() {
    const todoList = this.props.todoList;
    const index_todo = this.props.index_todo;
    const commentList = todoList[index_todo].commentList;
    return (  
      <div className="viewContainer">
        <div className="viewSubScreen">
          <SubScreen/>
        </div>
        <div className="viewer">
          <Viewer
            todo={todoList[index_todo]}
            onModify={() => this.props.pwCheckForModify()} 
            onDelete={() => this.props.pwCheckForDelete()}  
            onMain={() => this.props.unselectTodo()} 
            changeNCommentWriter={(text) => this.changeNCommentWriter(text)}
            changeNComment={(text) => this.changeNComment(text)} 
            onWriteComment={() => this.writeComment()}
            nCommentWriter={this.state.nCommentWriter}
            nComment={this.state.nComment}
            pressLike={() => this.pressLike()}
            onPrevView={() => this.props.prevView()}
            onNextView={() => this.props.nextView()} />
          {commentList.map((comment, index) => {
            return (
              <CommentViewer key={`${this.props.index_todo}::${index}`} 
                commentWriter={comment.commentWriter} 
                comment={comment.comment} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewScreen);