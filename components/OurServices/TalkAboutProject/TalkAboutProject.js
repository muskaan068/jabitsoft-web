import React from "react";
import { Container } from "react-bootstrap";
import styles from "../TalkAboutProject/TalkAboutProject.module.scss";
import ContactInfo from "./ContactInfo";
import ContactUsForm from "./ContactUsForm";

function TalkAboutProject() {
  return (
    <div className={styles.ContactUsWrapper}>
      <div className={styles.ContactUsSubWrapper}>
        <Container>
          <div className={styles.ContainerBox}>
            <div className={styles.InfoText}>
              <h3>LET’S TALK ABOUT YOUR PROJECT</h3>
              <p>
                {`We value your unique project and are eager to understand your needs. Our experienced team is ready to collaborate and propose tailored solutions. With open communication and transparent insights, we guide you through the process. Contact us today to discuss how JABITSOFT can bring your project to life.
`}{" "}
              </p>
            </div>
          </div>
          <div className={styles.ContactUsFormContainer}>
            <div className={styles.FormContainer}>
              <ContactUsForm styles={styles} />
            </div>
            <div className={styles.ContactInfoContainer}>
              <ContactInfo styles={styles} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default TalkAboutProject;
