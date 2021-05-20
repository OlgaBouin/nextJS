import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//const colorBck = #e3f2fd;

export const Layout: React.FC = ({ children }) => {
  const loggedIn = true;

  const navBar = (
    <nav
      className="navbar navbar-light"
      style={{ backgroundColor: "cadetblue" }}
    >
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/home">
            <span className="sr-only">Welcome</span>
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/games">
            <span className="sr-only">Games</span>
          </a>
        </li>
      </ul>
      <a className="navbar-brand" href="/">
        Home
      </a>
    </nav>
  );
  return (
    <>
      <head>
        {" "}
        <title> Games Website </title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div>
          {loggedIn ? navBar : <div></div>}
          <article>{children}</article>
        </div>
      </body>
    </>
  );
};

export default Layout;
