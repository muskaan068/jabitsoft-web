import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../CustomizeSoftware/CustomizeSoftware.module.scss";

function CustomizeSoftware() {
  const router = useRouter();
  const readMoreHandle = () => {
    router.push("/services/customize-software");
  };
  return (
    <div className={styles.CustomizeSoftWrapper}>
      <Container>
        <div className={styles.ContainerBoxLeftRds}>
          <div className={styles.CircleBoxContainer}>
            <div className={styles.TopCircle}>
              <img src="/images/customize-soft.png" alt="WebDesign" />
            </div>
          </div>

          <div className={styles.ContentBox}>
            <h3>CUSTOMIZE SOFTWARE</h3>
            <p>
              {`Welcome to JABITSOFT's professional customized software solutions,
              where we empower businesses with tailored technology that
              optimizes operations and enhances efficiency. Our team of skilled
              developers and experts collaborate closely with you to understand
              your unique requirements and deliver a software solution that
              perfectly aligns with your business goals. We recognize that
              off-the-shelf software may not always meet the specific needs of
              your organization. That's why we offer customized software
              development services, providing you with a solution that is
              designed to address your specific pain points and streamline your
              processes. Our approach begins with a thorough analysis of your
              business workflows, challenges, and goals. By gaining a deep
              understanding of your requirements, we can design and develop a
              software solution that not only meets your immediate needs but
              also has the flexibility to evolve with your business.`}
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

export default CustomizeSoftware;
