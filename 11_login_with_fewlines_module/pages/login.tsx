import Layout from "../components/layout";
import React from "react";
import { MongoClient } from "mongodb";

const LoginForm: React.FC = (props) => {
  const emailRef: any = React.useRef();
  const passwordRef: any = React.useRef();

  const handleSubmit = () => {
    
    console.log("++++++++++++++++++++++++++++++", emailRef.current.value);
    console.log(passwordRef.current.value);
    updateEmailFormData(emailRef.current.value);
  };
  
  const [formEmailData, updateEmailFormData] = React.useState("");
  const [formPasswordData, updatePasswordFormData] = React.useState("");

  return (
    <Layout>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img src="/favicon.ico" id="icon" alt="User Icon" />
          </div>

          <form method="POST" action={"/users/" + formEmailData}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
              ref={emailRef}
            ></input>
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
              ref={passwordRef}
            ></input>
            <input
              type="submit"
              className="fadeIn fourth"
              value="Log In"
              onClick={handleSubmit}
            ></input>
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div></Layout>)}

      export default LoginForm;

      // export const getServerSideProps = async () => {
      //   const databaseUrl = process.env.MONGODB_DATABASE_URL;
      
      //   const options = { useNewUrlParser: true, useUnifiedTopology: true };
      
      //   const mongoDataBase = await MongoClient.connect(databaseUrl, options);
      //   // const allGames = await mongoDataBase
      //   //   .db("project2")
      //   //   .collection("games")
      //   //   .find({})
      //   //   .toArray();

      //   const userId = await mongoDataBase
      //   .db("mongo-basics")
      //   .collection("users")
      //   .find({})

      //   return {
      //     props: {
      //       id: JSON.parse(JSON.stringify(userId)),
      //     },
      //   };
      // };