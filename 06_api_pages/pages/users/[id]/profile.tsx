import React from "react";
import { Layout } from "../../../components/layout";
import { GetServerSideProps } from "next";
import { MongoClient } from "mongodb";
const ObjectId = require("mongodb").ObjectID;

const Profile: React.FC = (props: any) => {
  return (
    <Layout>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="card-title">
            <div className="container">
              <div className="row">
                <div className="col-md-8  align-right"></div>
                <div className="col-md-4  align-right">
                  <button type="button" className="btn btn-secondary">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>{props.userName}</p>
              <p>{props.userEmail}</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("-------------PARAMS--------------", context.params.id);
  const databaseUrl = process.env.MONGODB_DATABASE_URL;

  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  const mongoDataBase = await MongoClient.connect(databaseUrl, options);

  const idForFilter = ObjectId(context.params.id);
  console.log("////////////ID//////////////", idForFilter);
  const currentUser = await mongoDataBase
    .db("mongo-basics")
    .collection("users")
    .findOne({ _id: idForFilter });

  console.log("*************USER****************", currentUser);
  return {
    props: {
      userName: currentUser.name,
      userEmail: currentUser.email,
      userId: context.params.id,
    },
  };
};
