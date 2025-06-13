import React, { Component } from "react";
import Spline from "@splinetool/react-spline";

import "./index.css";

class Home extends Component {
  state = {
    roles: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Machine Learning",
      "Data Science",
    ],
    currentRoleIndex: 0,
    displayedRole: "",
    charIndex: 0,
  };

  componentDidMount() {
    this.roleInterval = setInterval(this.updateRole, 4000);
    this.letterInterval = setInterval(this.updateDisplayedRole, 100);
  }

  componentWillUnmount() {
    clearInterval(this.roleInterval);
    clearInterval(this.letterInterval);
  }

  updateRole = () => {
    this.setState((prevState) => ({
      currentRoleIndex:
        (prevState.currentRoleIndex + 1) % prevState.roles.length,
      displayedRole: "",
      charIndex: 0,
    }));
  };

  updateDisplayedRole = () => {
    const { roles, currentRoleIndex, charIndex } = this.state;
    if (charIndex < roles[currentRoleIndex].length) {
      this.setState((prevState) => ({
        displayedRole:
          prevState.displayedRole + roles[currentRoleIndex][charIndex],
        charIndex: prevState.charIndex + 1,
      }));
    }
  };

  scrollToNextSection = () => {
    const nextSection = document.getElementById("experience");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    const { displayedRole } = this.state;

    const resume = () => {
      console.log("resume");
      window.open(
        "https://drive.google.com/file/d/1VYY2R21n72apmm1eAwyVqBLxh5Wb7dTR/view?usp=drive_link",
        "_blank"
      );
    };
    return (
      <>
        <div className="home-container">
          {/* <div className="spline-bg">
            <Spline scene="https://prod.spline.design/RxCvqhiWFtPFBJut/scene.splinecode" />
          </div> */}
          {/* Mobile Layout */}
          <div className="mobile-home">
            <img
              className="logo-image-style"
              src="/profilepic.png"
              alt="home icon"
              loading="lazy"
            />
            {/* <div className="h-80">
              <Spline scene="https://prod.spline.design/hnIiwZ9pjlJGQlnQ/scene.splinecode" />
            </div> */}
            <p className="heading-name">
              Hello I'm
              <br />
              <span className="name">Arukala Vinay Teja</span>
            </p>
            <h2 className="heading">
              I'm good at <span className="role">{displayedRole}</span>
            </h2>
          </div>

          {/* Larger Screen Layout */}
          <div className="desktop-home">
            <div className="home">
              <div className="home-content">
                <p
                  style={{
                    fontFamily: "cursive",
                    fontSize: "22px",
                    color: "#ffffff",
                  }}
                >
                  Hello I'm 👋
                </p>
                <h1
                  className="text-bold"
                  style={{ color: "#ffffff", fontSize: "28px" }}
                >
                  Vinay Teja Arukala
                </h1>
                <h4 className="heading">
                  And I'm good at <span className="role">{displayedRole}</span>
                </h4>
                <div className="social-media">
                  <a
                    href="https://www.linkedin.com/in/vinay-arukala/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="rgb(87, 199, 199)"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                  <button className="btn butt" onClick={resume}>
                    Download Resume
                  </button>
                </div>
              </div>
              <div className="logo-container">
                {/* <img
                className="logo-image-style"
                src="/profilepic.png"
                alt="home icon"
                loading="lazy"
              /> */}
                <div className="h-80">
                  <Spline scene="https://prod.spline.design/hnIiwZ9pjlJGQlnQ/scene.splinecode" />
                </div>
              </div>
            </div>
          </div>
          {/* Scroll Button */}
          <button
            className="scroll-button animate-arrow"
            onClick={this.scrollToNextSection}
          >
            ↓
          </button>
        </div>
      </>
    );
  }
}

export default Home;
