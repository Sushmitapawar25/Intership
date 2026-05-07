import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    const { total, unread } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">MessagingApp</a>
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#">
            Total Messages
            <span className="badge bg-secondary ms-1">{total}</span>
          </a>
          <a className="nav-link" href="#">
            Unread
            <span className="badge bg-danger ms-1">{unread}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;