import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { parseCookies } from "../helpers/";


//const colorBck = #e3f2fd;

export const Layout2: React.FC = ({data}: any) => {

  return (
    <>
<h2>Token : {data}</h2>
    </>
  );
};

export default Layout2;


export const getServerSideProps = async ({ req, res }) => {


    const data = parseCookies(req)
  
   if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { Location: "/" })
      res.end()
    }
  }
  
  return {
    data: data && data,
  }
}

// Layout.getInitialProps = async ({ req, res }) => {
//   const data = parseCookies(req)
  
//    if (res) {
//     if (Object.keys(data).length === 0 && data.constructor === Object) {
//       res.writeHead(301, { Location: "/" })
//       res.end()
//     }
//   }
  
//   return {
//     data: data && data,
//   }
// }