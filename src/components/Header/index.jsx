import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { IoMdMenu, IoMdClose } from "react-icons";

import "./index.css";

class Header extends Component {
  state = { isMenuOpen: false };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className="nav-header">
        <div className="desktop-nav-content">
          <p className="portfolio-title">
            VINAY TEJA<span className="dot">.</span>
          </p>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Connect
              </Link>
            </li>
            {/* <li>
              <img
                className="social-network-img"
                src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
                alt="Linked In"
              />
            </li>
            <li>
              <img
                className="social-network-img"
                src="https://images.squarespace-cdn.com/content/v1/526b4c3fe4b0b830869fa012/1657229698769-88WMLVMRLF007PDLA57D/image-asset.png"
                alt="Git Hub"
              />
            </li>
            <li>
              <img
                className="social-network-img"
                src="https://static.vecteezy.com/system/resources/previews/020/009/614/large_2x/email-and-mail-icon-black-free-png.png"
                alt="Mail"
              />
            </li> */}
          </ul>
        </div>
        <div className="mobile-nav-content">
          <p className="portfolio-title ">
            VINAY TEJA<span className="dot">.</span>
          </p>
          {/* <img
            className="header-icon"
            src="https://img.icons8.com/?size=100&id=nqg2tDAxO1LG&format=png&color=000000"
            alt="header"
          /> */}
          <button className="menu-btn" onClick={this.toggleMenu}>
            {isMenuOpen ? <h1 className="text-bold">X</h1> : <h1>Menu</h1>}
          </button>
          {isMenuOpen && (
            <ul className="nav-menu mobile">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="mobile-social-media-icons">
                <li>
                  <img
                    className="social-network-img"
                    src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
                    alt="Linked In"
                  />
                </li>
                <li>
                  <img
                    className="social-network-img"
                    src="https://images.squarespace-cdn.com/content/v1/526b4c3fe4b0b830869fa012/1657229698769-88WMLVMRLF007PDLA57D/image-asset.png"
                    alt="Git Hub"
                  />
                </li>
                <li>
                  <img
                    className="social-network-img"
                    src="https://static.vecteezy.com/system/resources/previews/020/009/614/large_2x/email-and-mail-icon-black-free-png.png"
                    alt="Mail"
                  />
                </li>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default Header;
