import Layout from "../../components/layout";
import React from "react";
//import cookieCutter from "cookie-cutter";
import { MongoClient } from "mongodb";
import { useCookies } from "react-cookie"


  

const AuthCallback: React.FC = (props: any) => {
  const [cookie, setCookie] = useCookies(["user"]);



  const handleSignIn = async () => {
    try {
      const response =  props.token;
setCookie("user", JSON.stringify(response), {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      })
    } catch (err) {
      console.log(err)
    }
  }




  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h3>You're finally logged in !</h3>
            <h5>Your access token is : {props.token}</h5>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthCallback;

export const getServerSideProps = async (context) => {


  const accessToken = context.query.code;
    //
  //ex http://localhost:3000/oauth/callback?code=tTbzVbtqsymiibUTL_MGYw%3D%3D&state=

console.log("----------URL------------", context.query.code);

  //cookieCutter.set('myGamesCookie', accessToken);




  const databaseUrl = process.env.MONGODB_DATABASE_URL;

  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  const mongoDataBase = await MongoClient.connect(databaseUrl, options);

  const dateToIsert = Date();

  try {
    mongoDataBase
      .db("mongo-basics")
      .collection("cookies")
      .insertOne({ access_token: accessToken, date: dateToIsert });
  } catch (e) {
    console.log(e);
  }

  return {
    props: { token: accessToken },
  };
};
