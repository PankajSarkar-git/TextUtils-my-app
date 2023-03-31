import React from "react";
import propTypes from "prop-types";
// import { Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.titel}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/about">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={() => {props.toggleMode("primary")}} style={{height:"30px" , width:"30px" , cursor: "pointer"}}></div>
              <div className="bg-danger rounded mx-2" onClick={() => {props.toggleMode("danger")}} style={{height:"30px" , width:"30px" , cursor: "pointer"}}></div>
              <div className="bg-success rounded mx-2" onClick={() => {props.toggleMode("success")}} style={{height:"30px" , width:"30px" , cursor: "pointer"}}></div>
              <div className="bg-warning rounded mx-2" onClick={() => {props.toggleMode("warning")}} style={{height:"30px" , width:"30px" , cursor: "pointer"}}></div>
              </div> */}
              <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={() => {props.toggleMode(null)}}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  Toggle Mood
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.prototypes = { titel: propTypes.string.isRequired };
Navbar.defaultProps = {
  titel: "set titel here",
};
// export default Navbar;