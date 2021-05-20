import React from "react";
import { MongoClient } from "mongodb";

import { Layout } from "../../components/layout";

import { GetServerSideProps } from "next";

const Menu: React.FC<string> = (props: any) => {
  return (
    <Layout>
      <h1>Games :</h1>
      <table>
        <tbody>
          <tr>
            <th>Image</th>
            <th>
              <h6>Name</h6>
            </th>
            <th>
              <h6>Price</h6>
            </th>
            <th>
              <h6>Link</h6>
            </th>
          </tr>
          {props.users.map((element, index) => {
            return (
              <tr key={"line" + index}>
                <th key={"image" + index}>
                  <img
                    src={
                      element.cover != undefined
                        ? "https:" + element.cover.url
                        : "/imageBlogSA.png"
                    }
                    alt="game"
                    width="170px"
                    height="197px"
                  ></img>
                </th>
                <th key={"line" + element.name}>{element.name}</th>
                <th key={"line" + element.price}>{element.price / 100} €</th>
                <th key={"link" + index}>
                  <a href={"/users/" + element._id + "/profile"}>
                    Buy
                  </a>
                </th>
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
  const allUsers = await mongoDataBase
    .db("project2")
    .collection("games")
    .find({})
    .toArray();
  return {
    props: {
      users: JSON.parse(JSON.stringify(allUsers)),
    },
  };
};
