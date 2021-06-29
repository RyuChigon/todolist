import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="screen">
        <header className="header">
          <p>Todo List</p>
        </header>
      </div>
    )
  }
}
export default Header;