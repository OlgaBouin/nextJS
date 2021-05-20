import React from "react";

import { Layout } from "../components/layout";

const Home: React.FC = (props: any) => {
  const searchKeyRef: any = React.useRef();

  const handleSubmit = () => {
    console.log(searchKeyRef.current.value);
    updateSearchFormData(searchKeyRef.current.value);
  };
  const [formSearchData, updateSearchFormData] = React.useState("");

  //console.log("++++++++++++++++++++++++++++state.value", state.value);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("++++++++++++++++++++++++++++.value", event.target[0])
  // }

  // const handleSubmit = (event) => {
  //   const formData: any = new FormData(event.target);
  //   event.preventDefault();
  //   for (let [key, value] of formData.entries()) {
  //       console.log(key, value);
  //   }

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
      {/* <form method="POST" action={"/search/" + formSearchData}>
        <input
          type="text"
          name="searchKeyWord"
          placeholder="Search"
          ref={searchKeyRef}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Go !{" "}
        </button>
      </form> */}
    </Layout>
  );
};

export default Home;
