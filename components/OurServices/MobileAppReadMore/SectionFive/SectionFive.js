import React from "react";
import { Container } from "react-bootstrap";
import styles from "./SectionFive.module.scss";

function SectionFive() {
  return (
    <div className={styles.SectionFiveWrapper}>
      <Container>
        <div className={styles.ContainerBoxRightRds}>
          <div className={styles.NativeImgBox}>
            <img
              src="/images/device.png"
              className={styles.AppleImg}
              alt="android"
            />
          </div>
          <div className={styles.InfoContainer}>
            <h3>HYBRID APPLICATION DEVELOPMENT</h3>
            <p>{`At JABITSOFT, we excel in cross-hybrid application development, offering powerful and versatile solutions for businesses. Leveraging frameworks like Ionic and Xamarin, we create high-performance apps that run seamlessly on multiple platforms, including iOS, Android, and the web. Our expert team utilizes their technical prowess and creativity to design visually appealing and feature-rich applications that cater to your specific needs. With our cross-hybrid approach, you benefit from faster development cycles, reduced costs, and a consistent user experience across platforms. Trust JABITSOFT for professional cross-hybrid application development that expands your reach and elevates your business presence.
`}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionFive;
