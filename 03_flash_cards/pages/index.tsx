import React from "react";
import Link from "next/link";

import { Layout } from "../components/layout";
``;
import Menu from "../components/menu";

import pagesNumbers from "../data/pages-numbers";

const Homepage: React.FC = () => {
  return (
    <Layout>
        <h1>Cards :</h1>
      <Menu />
    </Layout>
  );
};

export default Homepage;
