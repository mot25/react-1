import React from "react";

import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__inner-item">
              <a href='#'>react</a>
            </div>
            <div className="footer__inner-item">
              <a href='#'>site map</a>
              <a href='#'>google sitemap</a>
            </div>
            <div className="footer__inner-item">
              <a href='#'>contact</a>
              <a href='#'>about service</a>
              <a href='#'>warranty</a>
              <a href='#'>terms of the agreement</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
