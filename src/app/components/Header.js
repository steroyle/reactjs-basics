import React from "react";

export class Header extends React.Component {
  render() {
    return(
      <nav className="top-bar">
        <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }
}
