import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout";
import useFetch from "react-fetch-hook";

const AnyCategory: React.FC = () => {
  const router = useRouter();
  const categoryWithSlashes = `${router.query.category}`;
  const category = categoryWithSlashes.split("/").pop();
  console.log("----------------ROUTER-------------------",router);

  const { isLoading, data } = useFetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );
  let dataFromFetch: any = "Joke unknown";
  if (data != undefined) dataFromFetch = data;

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Layout>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{dataFromFetch.value}</h5>
        </div>
      </div>
    </Layout>
  );
};
export default AnyCategory;
