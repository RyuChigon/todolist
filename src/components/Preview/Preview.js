import React from 'react';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.onSelect()}>{this.props.todo.title}</button>
      </div>
    )
  }
}

export default Preview;