import React from "react";
import { Container } from "react-bootstrap";
import styles from "./SectionThree.module.scss";

function SectionThree() {
  return (
    <div className={styles.SectionThreeWrapper}>
      <Container>
        <div className={styles.ContainerBoxRightRds}>
          <div className={styles.NativeImgBox}>
            <img
              src="/images/apple-frame1.png"
              className={styles.AppleImg}
              alt="android"
            />
            <img
              src="/images/android-frame.png"
              className={styles.AndroidImg}
              alt="android"
            />
          </div>
          <div className={styles.InfoContainer}>
            <h3>NATIVE APPLICATION DEVELOPMENT</h3>
            <p>{`At JABITSOFT, we specialize in native application development, harnessing the power of platform-specific technologies to create robust and high-performing mobile apps. Our expert team is proficient in developing native applications for iOS and Android platforms, ensuring seamless integration with device features and optimal performance. We follow industry best practices and utilize the latest tools and frameworks to deliver native apps that offer exceptional user experiences. With our attention to detail and commitment to quality, we provide customized native app solutions that align with your business objectives. Choose JABITSOFT for professional native application development that brings your vision to life.
`}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionThree;
