import React from 'react';
import './Preview.css';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className='todo' onClick={() => this.props.onSelect()} ><p>{this.props.todo.title}</p></button>
      </div>
    )
  }
}

export default Preview;