import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//const colorBck = #e3f2fd;

export const Layout: React.FC = ({ children }) => {
  const loggedIn = true;

  const navBar = (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: "cadetblue" }}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/games">
                Games
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/platforms">
                Platforms
              </a>
            </li>
          </ul>
        </div>
        <a className="navbar-brand" href="/login">Login</a>
      </nav>
    </div>
  );
  return (
    <>
        {" "}
        <title> Games Website </title>
        <link rel="icon" href="/favicon.ico" />
        <div>
          {loggedIn ? navBar : <div></div>}
          <article>{children}</article>
        </div>
    </>
  );
};

export default Layout;
