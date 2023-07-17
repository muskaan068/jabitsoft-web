import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../UIXDesign/UIXDesign.module.scss";

function UIXDesign() {
  const router = useRouter();
  const readMoreHandle = () => {
    router.push("/services/uix-design");
  };
  return (
    <div className={styles.UIXDesignWrapper}>
      <Container>
        <div className={styles.ContainerBoxLeftRds}>
          <div className={styles.CircleBoxContainer}>
            <div className={styles.TopCircle}>
              <img src="/images/Web-Des11.png" alt="WebDesign" />
            </div>
          </div>

          <div className={styles.ContentBox}>
            <h3>UI UX DESIGN</h3>
            <p>
              {`Welcome to JABITSOFT's professional UI/UX design services, where
              we craft exceptional digital experiences that captivate your
              audience and elevate your brand. Our team of talented designers
              combines creativity and expertise to deliver user-centric designs
              that seamlessly blend form and function. We understand that an
              outstanding user interface (UI) and user experience (UX) are
              essential for the success of any digital product. That's why we
              take a meticulous approach, starting with a deep understanding of
              your target audience, business objectives, and industry trends.`}
            </p>
            <div className={styles.ButtonContainer}>
              <button onClick={readMoreHandle}>Read More</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default UIXDesign;
