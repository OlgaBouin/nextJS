import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/layout";

import cards from "../../data/cards-content";
import pagesNumbers from "../../data/pages-numbers";

const AnyArticle: React.FC = (props) => {
  const router = useRouter();
  //const { number } = router.query;

  const [hidden, setHidden] = React.useState(false); // answer hidden by default
  const [number, setNumber] = React.useState(router.query.number);
  const [pageNum, setPageNum] = React.useState(pagesNumbers.findIndex((elem) => elem === number) + 1);

  // useEffect(() => {
  //   // Always do navigations after the first render
  //   router.push('/?counter=10', undefined, { shallow: true })
  // }, [])

  useEffect(() => {

  //setPageNum(pagesNumbers.findIndex((elem) => elem === number) + 1);
  //setPageNum(pagesNumbers.findIndex((elem) => elem === props.cardNumber) + 1);
    setNumber(router.query.number);
    console.log("______________________Router________",router.query.number);
    console.log("*****************page num**************", pageNum);
    console.log(pagesNumbers);
    console.log(pagesNumbers.findIndex((elem) => elem === number));
  }, [router.query]);
  //const pageNum = pagesNumbers.findIndex((elem) => elem === number) + 1;
  return (
    <Layout>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            <div onClick={() => setHidden(!hidden)}>
              {!hidden
                ? cards[pageNum - 1].question
                : cards[pageNum - 1].answer}
            </div>
          </h5>{" "}
        </div>
      </div>
    </Layout>
  );
};
export default AnyArticle;
