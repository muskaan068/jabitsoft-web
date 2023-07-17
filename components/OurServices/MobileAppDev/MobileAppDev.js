import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../MobileAppDev/MobileAppDev.module.scss";

function MobileAppDev() {
  const router = useRouter();
  const readMoreHandle = () => {
    router.push("/services/mobile-application");
  };
  return (
    <div className={styles.MobileAppDevWrapper}>
      <Container>
        <div className={styles.ContainerBoxLeftRds}>
          <div className={styles.CircleBoxContainer}>
            <div className={styles.TopCircle}>
              <img src="/images/App-Dev11.png" alt="WebDev" />
            </div>
          </div>

          <div className={styles.ContentBox}>
            <h3>MOBILE APPLICATION DEVELOPMENT</h3>
            <p>{`Welcome to JABITSOFT's professional mobile application development services, where we turn your ideas into innovative and user-friendly mobile experiences. Our team of skilled developers and designers is dedicated to creating high-performance mobile apps that drive engagement and deliver value to your users.
We understand the power of mobile technology in today's digital landscape, and we leverage our expertise to bring your vision to life. Whether you need a mobile app for iOS, Android, or both platforms, we have the knowledge and experience to meet your specific requirements.
From concept to deployment, we follow a comprehensive mobile app development process that ensures the highest standards of quality and functionality. We begin by understanding your goals, target audience, and desired features, allowing us to create a customized solution that aligns with your business objectives.
`}</p>
            <div className={styles.ButtonContainer}>
              <button onClick={readMoreHandle}>Read More</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MobileAppDev;
