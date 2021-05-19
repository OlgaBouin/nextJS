import React from "react";
import { Layout } from "../../../components/layout";
import {GetServerSideProps} from "next";


const Profile: React.FC = (props: any) => {
return(
  <Layout>
  <h1>{props.route}</h1>
  <h1>{props.params}</h1>
  </Layout>
)
}

export default Profile;


export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("-------------URL--------------", context.resolvedUrl);
  console.log("-------------PARAMS--------------", context.params);
  return { props: { route: "route", params: "query" } };
};