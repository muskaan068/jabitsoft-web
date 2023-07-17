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
              What People <span>Say</span>
            </h3>
            <p>
              Jabit Soft's commitment to excellence, innovation, and customer
              satisfaction has earned the company the love and loyalty of its
              clients. Jabit Soft's clients appreciate the company's ability to
              deliver technology solutions that meet or exceed their
              expectations, on time, and within budget. They also value the
              company's transparency, open communication, and collaborative
              approach, which enables them to participate actively in the
              development process and provide feedback on the progress of their
              projects.
            </p>
          </div>
          <div className={styles.FrameContainer}>
            <img src="/images/whatpeople.png" alt="Services Frame" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
