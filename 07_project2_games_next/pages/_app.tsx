import "../styles/globals.css";
import React from "react";
import { Provider } from "react-redux";
import { useStore } from "../store";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
