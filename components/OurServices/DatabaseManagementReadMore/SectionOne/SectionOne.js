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
              <img src="/images/database-management.png" alt="Appev" />
            </div>
          </div>

          <div className={styles.ContentBox}>
            <h3>STREAMLINING DATA MANAGEMENT:</h3>
            {/* <h3> JABITSOFT'S PRIMARY SOLUTION</h3> */}
            <p>
              {`At JABITSOFT, we recognize the critical importance of efficient data management for businesses. Our
primary solution focuses on streamlining data management processes to optimize productivity and
drive growth. Leveraging advanced technologies and industry best practices, we develop
comprehensive data management systems that ensure data accuracy, security, and accessibility.
From data integration and cleansing to data warehousing and analytics, our solution empowers
businesses to make informed decisions based on reliable and actionable insights. With JABITSOFT's
expertise, businesses can unlock the full potential of their data, streamline operations, and stay
ahead in today's data-driven world.`}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionOne;
