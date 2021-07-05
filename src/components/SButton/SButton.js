import React from 'react';

class SButton extends React.Component {
  render() {
    return (
      <div>
      <button onClick={() => this.props.onClick()} >{this.props.name}</button>
      </div>
    )
  }
}

export default SButton;