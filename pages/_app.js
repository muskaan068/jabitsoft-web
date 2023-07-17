import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";
function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true)
      document.body.style="overflow:hidden";
    });   
    Router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
      document.body.style="overflow:auto";
    });
  
    Router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
      document.body.style="overflow:auto";
    }); 
   }, [Router])

  return <>
  {isLoading ? (<Loader />):(
    <Component {...pageProps} />
  )}
 
  </>
}

export default MyApp;
