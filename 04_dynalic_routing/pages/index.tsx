import React from "react";
import Link from "next/link";

import { Layout } from "../components/layout";

import { GetServerSideProps } from "next";

type Categories = {
  catArray: string[]
}

const Menu: React.FC<Categories> = (props) => {
  return (
    <Layout>
        <h1>Categories :</h1>
        <ul>
        {props.catArray.map((element, index) => {
          //const elementRoute = "/cards/" + element;
          return (
            <li key={"cat" + index}> 
              <h3>
                <Link href={"/categories/"+element}>{element}</Link>
              </h3>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};


export default Menu;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const categoriesArray = await response.json();
  console.log(categoriesArray);
  return { props: { catArray: categoriesArray } };
};
