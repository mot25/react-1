import React from "react";
import {Routes, Route, Link} from 'react-router-dom'

import "./Header.css";

class LinkHeader extends React.Component {
  render() {
    return (
      <div>
          <div className="list">
              <Link to='/' >main</Link>
              {/* <Link to={} >exchange point</Link> */}
              <Link to='/about' >contact</Link>
          </div>
      </div>
    );
  }
}

export default LinkHeader;
