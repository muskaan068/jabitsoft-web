import { Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Accordion, Container } from "react-bootstrap";
import styles from "../Footer/Footer.module.scss";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <div className={styles.FooterWrapper}>
      <Container>
        <div className={styles.FooterContainer}>
          <Link href={"/"}>
            <a>
              <img className={styles.Logo} src="/images/footer-logo.png" />
            </a>
          </Link>

          <div className={styles.FooterInfoContainer}>
            <div className={styles.FooterInfoText}>
              We're Jabit soft, full fledged software solution company in Noida,
              also renowned for its marketing abilities. We began our journey in
              2007, with little projects, now word of mouth works like magic for
              us. Apart from working for private sector, our delivered software
              has also been praised by Indian defence ministry.Beyond India, we
              have clients in US, Australia, Germany, Finland and Singapore.
            </div>
            <div className={styles.FooterLinkConatiner}>
              <div className={styles.FooterAboutLabel}>
                <Grid container direction={"row"}>
                  <Grid item sm={3}>
                    <h5>About</h5>
                  </Grid>
                  <Grid item sm={5}>
                    <h5>Services</h5>
                  </Grid>
                  <Grid item sm={4}>
                    <h5>Help</h5>
                  </Grid>
                </Grid>
              </div>
              <FooterLinks styles={styles} />
            </div>
          </div>
          <div className={styles.FooterButtomInfo}>
            <p>
              <img src="/images/copyright.png" alt="copyright" />{" "}
              <span>Jabit Soft Private Limited</span>
            </p>
            <p>All Rights Reserved</p>
          </div>
        </div>
        <div className={styles.ResponsiveFooterContainer}>
          <Link href={"/"}>
            <a>
              <img className={styles.Logo} src="/images/footer-logo.png" />
            </a>
          </Link>

          <div className={styles.FooterInformationbox}>
            <div className={styles.ConpanyInfo}>
              <p>
                We're Jabit soft, full fledged software solution company in
                Noida, also renowned for its marketing abilities. We began our
                journey in 2007, with little projects, now word of mouth works
                like magic for us. Apart from working for private sector, our
                delivered software has also been praised by Indian defence
                ministry. Beyond India, we have clients in US, Australia,
                Germany, Finland and Singapore.
              </p>
            </div>
            <div className={styles.OurLinkBoxes} id="FooterCollapse">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <strong>About</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Grid
                      container
                      direction={"row"}
                      spacing={3}
                      marginBottom="15px"
                    >
                      <div className={styles.RespLink}>
                        <Link href={"/aboutus"}>
                          <a className={styles.LinkTitle}>About Us</a>
                        </Link>
                        <Link href={"/portfolio"}>
                          <a className={styles.LinkTitle}>Portfolio</a>
                        </Link>
                        <Link href={"/portfolio"}>
                          <a className={styles.LinkTitle}>Case Studies</a>
                        </Link>
                        <Link href={"#"}>
                          <a className={styles.LinkTitle}>Strategies</a>
                        </Link>
                        <Link href={"/blogs"}>
                          <a className={styles.LinkTitle}>Blogs</a>
                        </Link>
                        <Link href={"#"}>
                          <a className={styles.LinkTitle}>Inquiry</a>
                        </Link>
                      </div>
                    </Grid>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <strong>Services</strong>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.RespLink}>
                      <Link href={"/services/uix-design"}>
                        <a>Website Designing</a>
                      </Link>
                      <Link href={"/services/web-development"}>
                        <a>Website Development</a>
                      </Link>
                      <Link href={"/services/mobile-application"}>
                        <a>Mobile App Development</a>
                      </Link>
                      <Link href={"/services/customize-software"}>
                        <a>Customize Software</a>
                      </Link>
                      <Link href={"/services/database-management"}>
                        <a>Data Management Solutions</a>
                      </Link>
                      <Link href={"/services/billing-invoicing-software"}>
                        <a>Billing and Invoicing Software</a>
                      </Link>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <strong>Help</strong>{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.RespLink}>
                      <Link href={"/contactus"}>
                        <a>Contact Us</a>
                      </Link>
                      <Link href={"/privacy-policy"}>
                        <a>Privacy Policy</a>
                      </Link>
                      <Link href={"/aboutus"}>
                        <a>Sitemap</a>
                      </Link>
                      <Link href={"/terms-condition"}>
                        <a>Terms & Condition</a>
                      </Link>
                      <Link href={"/disclaimer"}>
                        <a>Disclaimer</a>
                      </Link>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className={styles.FooterButtomInfo}>
            <p>
              <img src="/images/copyright.png" alt="copyright" />{" "}
              <span>Jabit Soft Private Limited</span>
            </p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
