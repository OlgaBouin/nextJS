import React from "react";

import { Layout } from "../components/layout";


const Home: React.FC = (props: any) => {
  const searchKeyRef: any = React.useRef();

  const handleSubmit = () => {
    console.log(searchKeyRef.current.value);
    updateSearchFormData(searchKeyRef.current.value);
  };
  const [formSearchData, updateSearchFormData] = React.useState("");

  return (
    <Layout>
      <img src="welcome.png" className="displayed"></img>
      <div className="container">
        <div className="row">
          <div className="col-md-1  align-right"></div>
          <div className="col-md-10  align-right">
            <form method="POST" action={"/search/" + formSearchData}>
              <input
                type="text"
                name="searchKeyWord"
                placeholder="Search"
                ref={searchKeyRef}
              ></input>
              <button type="submit" onClick={handleSubmit}>
                Go !{" "}
              </button>
            </form>
          </div>
          <div className="col-md-1  align-right"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;