import React from "react";

import LinkHeader from "./LinkHeader";

import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <h1>react</h1>
          <LinkHeader />
        </div>
      </header>
    );
  }
}

export default Header;
