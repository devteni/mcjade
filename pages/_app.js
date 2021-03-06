import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      duration: 1200
    });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
