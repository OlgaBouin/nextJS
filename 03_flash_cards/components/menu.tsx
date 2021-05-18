import React from "react";
import Link from "next/link";
import AnyArticle from "../pages/cards/[number]";
//import { Router, Route, Switch } from "react-router-dom";

//import { Layout } from "./layout";
import pagesNumbers from "../data/pages-numbers";

const Menu: React.FC = () => {
  return (
    <>
      <ul>
        {pagesNumbers.map((element, index) => {
          const elementRoute = "/cards/" + element;
          return (
            <li key={index}>
              <h3>
                <Link href={elementRoute}>{element}</Link>
              </h3>
            </li>
          );
        })}
      </ul>
      {/* <ul>
        {pagesNumbers.map((element, index) => {
          //const elementRoute = "/cards/" + element;
          return (
            <li key={"page"+index}>
              <h3>
                <AnyArticle cardNumber={element}/>
              </h3>
            </li>
          );
        })}
      </ul> */}
      {/* <div>
      <Router>
        <div>
        {pagesNumbers.map((element, index) => {
          const elementRoute = "/cards/" + element;
          return (
                <Route path={elementRoute} component={element}/>
          );
        })}
        </div>
        </Router>
      </div> */}
    </>
  );
};
export default Menu;
