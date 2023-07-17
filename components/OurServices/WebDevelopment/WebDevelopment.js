import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../WebDevelopment/WebDevelopment.module.scss";

function WebDevelopment() {
  const router = useRouter();
  const handleReadMore = () => {
    router.push("/services/web-development");
  };
  return (
    <div className={styles.WebDevWrapper}>
      <Container>
        <div className={styles.ContainerBoxLeftRds}>
          <div className={styles.CircleBoxContainer}>
            <div className={styles.TopCircle}>
              <img src="/images/WebDev.png" alt="WebDev" />
            </div>
          </div>

          <div className={styles.ContentBox}>
            <h3>WEB DEVELOPMENT</h3>
            <p>
              {`Experience the power of JABITSOFT's professional web development
              services. Our team combines technical expertise and creative
              vision to deliver captivating and highly functional websites that
              drive results. We begin by understanding your goals and target
              market, crafting a tailored solution that embodies your brand and
              effectively communicates your message.
              Using the latest technologies and industry best practices,
               we create visually appealing, user-friendly, and search engine optimized websites. 
               From responsive design to intuitive navigation, 
               we ensure an exceptional user experience that keeps visitors engaged and encourages conversions.With expertise in various programming languages and frameworks, we develop custom websites tailored to your specific requirements. Whether it's an informational site, e-commerce platform, or web application, we bring your vision to life.
 
`}

              <p>
                {`Partner with JABITSOFT for web development that exceeds industry standards and surpasses your expectations. Contact us today to discuss your needs and unlock your online potential.`}
              </p>
            </p>
            <div className={styles.ButtonContainer}>
              <button onClick={handleReadMore}>Read More</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WebDevelopment;
