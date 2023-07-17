import React from "react";
import { Container } from "react-bootstrap";
import styles from "./SectionFour.module.scss";

function SectionFour() {
  return (
    <div className={styles.SectionFourWrapper}>
      <Container>
        <div className={styles.ContainerBoxLeftRds}>
          <div className={styles.NativeImgBox}>
            <img
              src="/images/desktop.png"
              className={styles.AppleImg}
              alt="android"
            />
          </div>
          <div className={styles.InfoContainer}>
            <h3>CROSS PLATFORM APPLICATION DEVELOPMENT</h3>
            <p>{`JABITSOFT excels in cross-platform application development, delivering versatile and cost-effective solutions for businesses. Our expert team utilizes frameworks like React Native and Flutter to build high-quality apps that run seamlessly on multiple platforms, including iOS and Android. With our cross-platform approach, we ensure faster development cycles, reduced costs, and consistent user experiences across devices. We leverage our technical expertise and creativity to create visually appealing and feature-rich applications that cater to your specific requirements. Trust JABITSOFT for professional cross-platform application development that maximizes your reach and enhances your business presence.
`}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionFour;
