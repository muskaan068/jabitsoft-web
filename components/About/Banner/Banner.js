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
              About <span>Us</span>
            </h1>
            <p>
              As a company that provides technology solutions to its clients,
              Jabit Soft understands that its success depends on its ability to
              deliver high-quality products quickly and efficiently. To achieve
              this, the company focuses on optimizing its workflows, utilizing
              agile methodologies, and using the latest technology tools and
              platforms to streamline the development process. By prioritizing
              efficiency in all aspects of its operations, Jabit Soft can ensure
              that it delivers exceptional products that meet or exceed its
              clients' expectations while also maximizing its profitability and
              maintaining a competitive edge in the industry.
            </p>
          </div>
          <div className={styles.FrameContainer}>
            <img src="/images/aboutus-banner.png" alt="Services Frame" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
