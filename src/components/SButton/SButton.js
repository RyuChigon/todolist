import React from 'react';
import { Button } from 'react-bootstrap';

class SButton extends React.Component {
  render() {
    return (
      <>
      <Button onClick={() => this.props.onClick()} variant="success">{this.props.name}</Button>
      </>
    )
  }
}

export default SButton;