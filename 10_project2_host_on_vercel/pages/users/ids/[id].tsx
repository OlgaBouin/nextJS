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
                <div className="col-md-6  align-right"></div>
                <div className="col-md-6  align-right">
                  <button type="submit">
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
  const databaseUrl = process.env.MONGODB_DATABASE_URL;

  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  const mongoDataBase = await MongoClient.connect(databaseUrl, options);

  const idForFilter = ObjectId(context.params.id);
  const currentUser = await mongoDataBase
    .db("mongo-basics")
    .collection("users")
    .findOne({ _id: idForFilter });

  return {
    props: {
      userName: currentUser.name,
      userEmail: currentUser.email,
      userId: context.params.id,
    },
  };
};
