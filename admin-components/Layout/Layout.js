


import { Container, Row } from "react-bootstrap";
// import  Footer from "../Footer/Footer";
import AlertTemplate from "react-alert-template-basic";
import { positions, Provider } from "react-alert";
import { useRouter } from "next/router";
// import TopNavigation from '../TopNavigation/index'
import styles from "./Layout.module.scss";
import { useMediaQuery } from "@mui/material";
import TopHeader from "../TopHeader/TopHeader";
import { useEffect } from "react";
import { getLocalStorage } from "../../utils/Factory";

export const Layout = (props) => {
  const router = useRouter();
  const matches = useMediaQuery("(max-width:992px)");
  const options = {
    timeout: 3000,
    position: positions.TOP_CENTER,
  };
  useEffect(()=>{
    const isLoggedIn = getLocalStorage("isAuth");
    if(!isLoggedIn){
      router.push("/admin");
    }
   },[])

  return (
    <>
    <div className={styles.Main}>
     <TopHeader />
      <div
        className={!matches ? styles.Container : styles.MobileContainer}
      >
        <Provider template={AlertTemplate} {...options}>
          <container-fluid>{props.children}</container-fluid>
        </Provider>
        
      </div>
      </div>
    </>
  );
};