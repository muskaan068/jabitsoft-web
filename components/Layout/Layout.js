


import { Container, Row } from "react-bootstrap";
import  Footer from "../Footer/Footer";
import AlertTemplate from "react-alert-template-basic";
import { positions, Provider } from "react-alert";
import { useRouter } from "next/router";
import TopNavigation from '../TopNavigation/index'
import styles from "./Layout.module.scss";
import { useMediaQuery } from "@mui/material";

export const Layout = (props) => {
  const matches = useMediaQuery("(max-width:992px)");
  const options = {
    timeout: 3000,
    position: positions.TOP_CENTER,
  };
  const router = useRouter();
  // console.log("rrrrrrrrrrrrrrr>>", props.handleQuoteListOpen);
  return (
    <>
    <div className={styles.main}>
      <TopNavigation />
      <div
        className={!matches ? styles.maincontainer : styles.maincontainermobile}
      >
        <Provider template={AlertTemplate} {...options}>
          <container-fluid>{props.children}</container-fluid>
        </Provider>
        <Footer />
      </div>
      </div>
    </>
  );
};