import React from "react";
import { Layout } from "../../../components/layout";
import { GetServerSideProps } from "next";
import { MongoClient } from "mongodb";

const Profile: React.FC = (props: any) => {
  return (
    <Layout>
      {" "}
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="card-title">
            <button type="button" className="btn btn-secondary">
              Edit
            </button>
            <h1>{props.user.name}</h1>
            <h1>{props.user.email}</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("-------------PARAMS--------------", context.params);
  const databaseUrl = process.env.MONGODB_DATABASE_URL;

  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  const mongoDataBase = await MongoClient.connect(databaseUrl, options);
  const currentUser = await mongoDataBase
    .db("mongo-basics")
    .collection("users")
    .find({})
    //.findOne({ _id: context.params.id })
    .toArray();
  return {
    props: {
      user: JSON.parse(JSON.stringify(currentUser)),
    },
  };
};
