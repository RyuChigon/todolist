import React from 'react';
import './MainScreen.css';
import Preview from '../../components/Preview/Preview';
import { selectTodo, unselectTodo } from '../../actions/actions';
import { connect } from 'react-redux';
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
    selectTodo: (index) => dispatch(selectTodo(index)),
    unselectTodo: () => dispatch(unselectTodo()),
  }
}


class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
    }
  }

  render() {
    const todoList = this.props.todoList;
    return (
      <div className="mainContainer">
        <div className="subScreen">
          <SubScreen/>
        </div>
        <div className="preview">
        {todoList.map((todo, index) => {
          return (
            <Preview onSelect={() => {
              this.setState({view: true});
              this.props.selectTodo(index);
            }} key={`${todo.title}::${index}`} todo={todo}/>
          )
        })}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
