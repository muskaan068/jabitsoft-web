import React from "react";
import { Container } from "react-bootstrap";
import styles from "../ChooseCustom/ChooseCustom.module.scss";

function ChooseCustom() {
  return (
    <div className={styles.ChooseCustomWrapper}>
      <Container>
        <div className={styles.ContainerBox}>
          <h3>WHY CHOOSE OUR CUSTOM WEB DEVELOPMENT?</h3>
          <p>{`At JABITSOFT, we offer a compelling choice for custom web development. Our approach is tailored to your unique needs, ensuring a website that reflects your brand and achieves your goals. With expertise and experience, our skilled developers create seamless user experiences that captivate your audience. We provide scalable solutions that adapt to your business growth and offer ongoing support to keep your website optimized. Choose JABITSOFT for custom web development that takes your online presence to new heights.
`}</p>
        </div>
        <div className={styles.CircleImageContainer}>
          <div className={styles.CircleItem}>
            <img src="/images/choose-item.png" alt="choose" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ChooseCustom;
