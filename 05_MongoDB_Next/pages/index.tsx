import React from "react";
import { MongoClient } from "mongodb";

import { Layout } from "../components/layout";

import { GetServerSideProps } from "next";

const Menu: React.FC<string> = (props: any) => {
  return (
    <Layout>
      <h1>Words :</h1>
      <table>
        <tbody>
          <tr>
            <th>
              <h6>French</h6>
            </th>
            <th>
              <h6>Russian</h6>
            </th>
          </tr>
          {props.vocab.map((element, index) => {
            return (
              <tr key={"line" + index}>
                <th key={"line" + element.french}>{element.french}</th>
                <th key={"line" + element.russian}>{element.russian}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export default Menu;

export const getServerSideProps: GetServerSideProps = async () => {
  const databaseUrl = process.env.MONGODB_DATABASE_URL;

  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  const mongoDataBase = await MongoClient.connect(databaseUrl, options);
  const voc = await mongoDataBase
    .db("flash-card")
    .collection("vocabulary")
    .find({})
    .toArray();
  return {
    props: {
      vocab: JSON.parse(JSON.stringify(voc)),
    },
  };
};
