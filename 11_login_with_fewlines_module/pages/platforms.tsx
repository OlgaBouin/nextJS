import React from "react";
import {Link, Router}  from "react-router-dom";
import { MongoClient } from "mongodb";

import { Layout } from "../components/layout";

import { GetServerSideProps } from "next";

const Platforms: React.FC = (props: any) => {
  return (
    <Layout>
      <h1>Platforms :</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {props.platforms.map((element, index) => {
            return (
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={
                      element.platform.platform_logo_url != undefined
                        ? "https:" + element.platform.platform_logo_url
                        : "/imageBlogSA.png"
                    }
                    alt="game"
                    width="170px"
                    height="197px"
                    className="gamesImage"
                  ></img>
                  <div className="card-body">
                    <p className="card-text">
                    <b>{element.platform.slug} </b></p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        ><a href={element.platform.url}>
                          Website</a>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        ><a href={"/"+element.platform.slug+"/games"}>
                          View games</a>
                        </button>
                      </div>
                      <small className="text-muted">{element.numberOfGames} games</small>
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

export default Platforms;

export const getServerSideProps: GetServerSideProps = async () => {
  const databaseUrl = process.env.MONGODB_DATABASE_URL;

  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  const mongoDataBase = await MongoClient.connect(databaseUrl, options);

  const allGames = await mongoDataBase
    .db("project2")
    .collection("games")
    .find({})
    .toArray();

  // const allPlatforms = [];
  
  // allGames.forEach((game) => {
  //   const platform = allPlatforms.find((platform) => platform.slug === game.platform.slug);
  //   if (!platform) {
  //     allPlatforms.push(game.platform);
  //   }
  // });

  // type PlatformWithNbOfGames : {
  //   platform: 
  //   numberOfGames: 
  // }
  const allPlatforms = [];
  
  allGames.forEach((game) => {
    const platformFound = allPlatforms.find((pl) => pl.platform.slug === game.platform.slug);

    if (!platformFound) {
      allPlatforms.push({platform: game.platform, numberOfGames: 1});
    }
    else {
      for (let i=0; i<allPlatforms.length;i++) {
        if (platformFound.platform.slug === allPlatforms[i].platform.slug)
      allPlatforms[i].numberOfGames = allPlatforms[i].numberOfGames + 1; }}
  });

  return {
    props: {
      platforms: JSON.parse(JSON.stringify(allPlatforms)),
    },
  };


};
