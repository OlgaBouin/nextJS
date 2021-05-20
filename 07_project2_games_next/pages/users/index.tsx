import React from "react";
import { MongoClient } from "mongodb";

import { Layout } from "../../components/layout";

import { GetServerSideProps } from "next";

const Menu: React.FC<string> = (props: any) => {
  return (
    <Layout>
      <h1>Users :</h1>
      <table>
        <tbody>
          <tr>
            <th>
              <h6>Name</h6>
            </th>
            <th>
              <h6>Email</h6>
            </th>
            <th><h6>Link</h6></th>
          </tr>
          {props.users.map((element, index) => {
            return (
              <tr key={"line" + index}>
                <th key={"line" + element.name}>{element.name}</th>
                <th key={"line" + element.email}>{element.email}</th>
                <th key={"link" + index}><a href={"/users/"+element._id+"/profile"}>Edit : {element._id}</a></th>
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
    .db("mongo-basics")
    .collection("users")
    .find({})
    .toArray();
  return {
    props: {
      users: JSON.parse(JSON.stringify(allUsers)),
    },
  };
};
