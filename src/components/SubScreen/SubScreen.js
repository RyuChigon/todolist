import React from 'react';
import './SubScreen.css';

class SubScreen extends React.Component {
  render() {
    return (
      <div>
        <input className="search" type="text" />
        <p>최근 본 글</p>
        <p>담아둔 글</p>
      </div>
    )
  }
}

export default SubScreen;