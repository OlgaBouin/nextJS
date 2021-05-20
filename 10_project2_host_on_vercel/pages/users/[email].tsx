import React from "react";
import { MongoClient } from "mongodb";

import { Layout } from "../../components/layout";

const Home: React.FC = (props: any) => {

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-4  align-right"></div>
          <div className="col-md-4  align-right">
            <div
              className="alert alert-success d-flex align-items-center fadeIn first"
              role="alert" 
            >
              <svg
                className="bi flex-shrink-0 me-2"
                width="24"
                height="24"
                role="img"
                aria-label="Success:"
              >
                <use xlinkHref="#check-circle-fill" />
              </svg>
              <div>
                Congratulations! You have successfully submitted your profile.
              </div>
            </div>
            <div className="col-md-4  align-right"></div>
          </div>{" "}
          <div className="row">
            <div className="col-md-7  align-right"></div>
            <div className="col-md-5  align-right">
              <form method="POST" action="/users/" className="fadeIn second">
                <button type="submit">OK </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;


export const getServerSideProps = async (context) => {
  const databaseUrl = process.env.MONGODB_DATABASE_URL;

  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  const mongoDataBase = await MongoClient.connect(databaseUrl, options);

  const userNameFromEmail = context.query.email.split("@")[0];


try {
  mongoDataBase
    .db("mongo-basics")
    .collection("users")
    .insertOne({"name": userNameFromEmail, "email": context.query.email })
  } catch (e) {
    console.log(e);
  };

  const isKeyPhraseInThisGame = (game, keyPh: string): boolean => {
    return game.summary.toLowerCase().includes(keyPh.toLowerCase());
  };

  const filterGamesByKeyWord = (gamesToFilter, keyPhraseToFilterBy) => {
    //const onlyKeyPhraseToFilterBy = this.getSearchWordsFromUrl(keyPhraseToFilterBy);
    return gamesToFilter.filter((elementGame) =>
      isKeyPhraseInThisGame(elementGame, keyPhraseToFilterBy)
    );
  };


  return {
    props: {
    },
  };
};

