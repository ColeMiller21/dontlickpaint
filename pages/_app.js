import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
