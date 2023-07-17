import React from "react";
import { Container } from "react-bootstrap";
import styles from "./SectionOne.module.scss";
function SectionOne() {
  return (
    <div className={styles.SectionOneWrapper}>
      <Container>
        <div className={styles.ContainerBoxLeftRds}>
          <div className={styles.CircleBoxContainer}>
            <div className={styles.TopCircle}>
              <img src="/images/billing.png" alt="Appev" />
            </div>
          </div>

          <div className={styles.ContentBox}>
            <h3>BILLING & INVOICE SOFTWARE DEVELOPMENT COMPANY</h3>
            <p>
              {`JABITSOFT is a leading provider of customized billing and invoice software solutions. With our expertise in software development and a deep understanding of financial processes, we deliver robust and user-friendly software tailored to meet the unique needs of businesses. Our team of skilled developers leverages cutting-edge technologies to create secure, scalable, and feature-rich billing and invoice software. Whether you are a small business or an enterprise, our solutions streamline your billing operations, improve accuracy, and enhance efficiency. Partner with JABITSOFT for professional billing and invoice software development that empowers your financial processes and drives business growth.
`}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionOne;
