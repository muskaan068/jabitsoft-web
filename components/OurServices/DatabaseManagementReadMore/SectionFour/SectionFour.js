import React from "react";
import { Container } from "react-bootstrap";
import styles from "./SectionFour.module.scss";
function SectionFour() {
  return (
    <div className={styles.SectionFourWrapper}>
      <Container>
        <div className={styles.ContainerBoxLeftRds}>
          <div className={styles.CircleBoxContainer}>
            {/* <div className={styles.TopCircle}>
              <img src="/images/customize-soft.png" alt="Appev" />
            </div> */}
          </div>

          <div className={styles.ContentBox}>
            <h3>CONCLUSION:</h3>

            <p>
              {`At JABITSOFT, we specialize in data management solutions that are secure, scalable, and
tailored to your business needs. Our services help improve data security, quality, integration,

and compliance. With our expertise, you can unleash the potential of your data assets and
make informed decisions for your business's growth.

Partner with JABITSOFT to streamline your data management processes and harness the
power of your data. Our experienced team is dedicated to delivering customized solutions
that meet your unique requirements. Transform your data into a valuable asset and drive
your business forward with JABITSOFT. Contact us today to learn more.`}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionFour;
