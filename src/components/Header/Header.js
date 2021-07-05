import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SButton from '../SButton/SButton';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to='/write'><SButton name="작성" onClick={() => (console.log("write todo"))}/></Link>
        <p>Todo List</p>
      </header>
    )
  }
}
export default Header;