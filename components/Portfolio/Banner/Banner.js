import React from "react";
import { Container } from "react-bootstrap";
import styles from "../Banner/Banner.module.scss";

function Banner() {
  return (
    <div className={styles.BannerWrapper}>
      <Container>
        <div className={styles.BannerContainer}>
          <div className={styles.InfoContainer}>
            <h3>
              Our <span>Portfolio</span>
            </h3>
            <p>
              {`Welcome to our portfolio, where we showcase our remarkable projects and demonstrate our expertise in website and application development. Each project reflects our commitment to excellence, creativity, and innovation. From visually stunning designs to seamless functionality, our portfolio exhibits our ability to meet diverse client needs. We take pride in our successful collaborations, delivering exceptional solutions that drive business growth and exceed expectations. Explore our portfolio and witness the transformative power of our work. Join our satisfied clients who have entrusted us with their digital presence and experienced outstanding results.
`}
            </p>
          </div>
          <div className={styles.FrameContainer}>
            <img src="/images/portfolio.png" alt="Services Frame" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
