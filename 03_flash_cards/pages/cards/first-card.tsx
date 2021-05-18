import React from "react";

import { Layout } from "../../components/layout";

const FirstArticle: React.FC = () => {
  const [hidden, setHidden] = React.useState(false); // answer hidden by default
  return (
    <Layout>
      <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
    <h5 className="card-title">
      <div onClick={() => setHidden(!hidden)}>
        {!hidden ? "The white mushrooms that you find in every local supermarket are best known by what common term?" : "Button" }      
      </div>
      </h5> </div></div>
    </Layout>
  );
};
export default FirstArticle;
