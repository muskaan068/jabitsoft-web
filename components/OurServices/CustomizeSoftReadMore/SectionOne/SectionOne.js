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
              <img src="/images/customize-soft.png" alt="Appev" />
            </div>
          </div>

          <div className={styles.ContentBox}>
            <h3>CUSTOM SOFTWARE DEVELOPMENT COMPANY</h3>
            <p>
              {`At JABITSOFT, we specialize in creating tailor-made software solutions to meet your unique business requirements. Our team of skilled developers works closely with you to understand your specific needs, goals, and processes. With our expertise and cutting-edge technologies, we develop highly efficient and scalable software solutions that streamline your operations, enhance productivity, and drive growth. Whether you need a custom CRM, inventory management system, or any other software application, we deliver solutions that are intuitive, reliable, and secure. Experience the power of customized software that empowers your business and unlocks its full potential.`}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionOne;
