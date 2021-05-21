import "../styles/globals.css";
import React from "react";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <CookiesProvider>
        <Component {...pageProps}></Component>
      </CookiesProvider>
    </div>
  );
}

export default MyApp;
