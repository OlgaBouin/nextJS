import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//const colorBck = #e3f2fd;

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <nav className="navbar navbar-light" style={{backgroundColor: "cadetblue"}}>
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"><span className="sr-only"></span></a>
      </li></ul>
      <a className="navbar-brand" href="/">Home</a>
      </nav>
      <article>{children}</article>
    </div>
  );
};
