import React from "react";
import UserInfo from "../components/userInfo";
import Clock from "./clock";
import { useDispatch } from 'react-redux'
import useInterval from '../lib/useInterval'

const GenericPage: React.FC = (props: any) => {
  const dispatch = useDispatch()

  // Tick the time every second
  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    })
  }, 1000)
  return (
    <>
      <UserInfo />
      <Clock />
    </>
  );
};

export default GenericPage;
