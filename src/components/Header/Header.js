import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to='/write'><button>작성</button></Link>
        <p>Todo List</p>
      </header>
    )
  }
}
export default Header;