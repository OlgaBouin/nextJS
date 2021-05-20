import React from "react";

import { useCounter } from "../src/reduxFunctions";
import { Layout } from "../components/layout";

const UserInfo: React.FC = (props: any) => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>User :</h1>{" "}
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UserInfo;
