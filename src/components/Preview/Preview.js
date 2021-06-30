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
        <Link to='/view'><button className='todo' onClick={() => this.props.onSelect()} ><p>{this.props.todo.title}</p></button></Link>
      </div>
    )
  }
}

export default Preview;