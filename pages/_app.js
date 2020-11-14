import "../styles/globals.css";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <a
        rel="noopener"
        target="_blank"
        href="https://twitter.com/_abhikB"
        className="logo"
      >
        abhikB
      </a>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
