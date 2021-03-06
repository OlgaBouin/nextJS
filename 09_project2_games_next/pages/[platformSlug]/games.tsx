import React from "react";
import { MongoClient } from "mongodb";

import { Layout } from "../../components/layout";

import { GetServerSideProps } from "next";

const Games: React.FC = (props: any) => {
  return (
    <Layout>
      <h1>Games :</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {props.games.map((element, index) => {
            return (
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={
                      element.cover != undefined
                        ? "https:" + element.cover.url
                        : "/imageBlogSA.png"
                    }
                    alt="game"
                    width="170px"
                    height="197px"
                    className="gamesImage"
                  ></img>
                  <div className="card-body">
                    <p className="card-text">
                      <b>{element.name} </b>
                      <br></br> {element.summary.slice(0, 35)} <br></br>{" "}
                      {element.summary.slice(35, 70)} <br></br>{" "}
                      {element.summary.slice(70, 105) + "..."}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Buy {element.price / 100} €
                        </button>
                      </div>
                      <small className="text-muted">
                        {element.platform.name}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Games;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const databaseUrl = process.env.MONGODB_DATABASE_URL;

  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  const mongoDataBase = await MongoClient.connect(databaseUrl, options);
  const allGames = await mongoDataBase
    .db("project2")
    .collection("games")
    .find({ "platform.slug": context.query.platformSlug })
    .toArray();

  return {
    props: {
      games: JSON.parse(JSON.stringify(allGames)),
    },
  };
};
