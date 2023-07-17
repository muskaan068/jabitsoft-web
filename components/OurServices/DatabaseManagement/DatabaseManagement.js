import React from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "../DatabaseManagement/DatabaseManagement.module.scss";

function DatabaseManagement() {
  const router = useRouter();
  const readMoreHandle = () => {
    router.push("/services/database-management");
  };
  return (
    <div className={styles.DatabaseManagementWrapper}>
      <Container>
        <div className={styles.ContainerBoxLeftRds}>
          <div className={styles.CircleBoxContainer}>
            <div className={styles.TopCircle}>
              <img src="/images/dbms.png" alt="dbms" />
            </div>
          </div>

          <div className={styles.ContentBox}>
            <h3>DATA MANAGEMENT SOLUTIONS</h3>
            <p>{`Welcome to JABITSOFT's professional data management solutions, where we empower businesses with the tools and expertise to effectively handle and leverage their data assets. Our team of skilled professionals understands the critical role that data plays in decision-making and business success.
We offer comprehensive data management solutions designed to help you efficiently collect, organize, analyze, and secure your valuable data. From data integration and cleansing to data warehousing and analytics, we provide end-to-end solutions that enable you to derive actionable insights and make informed decisions.
Our approach begins with a thorough assessment of your data landscape and business objectives. We work closely with you to understand your unique data challenges and goals, tailoring our solutions to meet your specific requirements.
Using advanced technologies and industry-leading practices, we implement robust data management processes that ensure data accuracy, integrity, and security.
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

export default DatabaseManagement;
