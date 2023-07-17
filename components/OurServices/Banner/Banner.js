import React from "react";
import { Container } from "react-bootstrap";
import styles from "../Banner/Banner.module.scss";

function Banner() {
  return (
    <div className={styles.BannerWrapper}>
      <Container>
        <div className={styles.BannerContainer}>
          <div className={styles.InfoContainer}>
            <h1>
              Our <span>Services</span>
            </h1>
            <p>
              Jabit Soft provides a wide range of services, including software,
              website, and invoicing and billing software development. Our
              software development services include custom software development,
              mobile app development, and enterprise software development. We
              also provide website development services that cater to businesses
              of all sizes. Overall, Jabit Soft is committed to providing
              top-quality software solutions that enable out clients to optimize
              their operations, increase productivity, and improve their bottom
              line.
            </p>
          </div>
          <div className={styles.FrameContainer}>
            <img src="/images/services-banner-img.png" alt="Services Frame" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
