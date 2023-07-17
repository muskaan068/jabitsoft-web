import { useMediaQuery } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../ContactUs/ContactUs.module.scss";
import ContactInfo from "./ContactInfo";
import ContactUsForm from "./ContactUsForm";

function ContactUs() {
  const matches = useMediaQuery("(max-width:992px)");

  return (
    <div className={styles.ContactUsWrapper}>
      <div className={styles.ContactUsSubWrapper}>
        <Container>
          <div className={styles.ContainerBox}>
            <div className={styles.InfoText}>
              <h1>GET IN TOUCH</h1>
              <p>
                Are you prepared to grow your company? For specialised solutions
                catered to your needs, get in touch with us right now. Our
                knowledgeable staff is available to walk you through the
                procedure and address any concerns you may have. Let's get
                working on a fruitful collaboration. Contact JABITSOFT right
                now.
              </p>
            </div>
            <div className={styles.MapContainer}>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width={!matches ? "530px" : "300px"}
                    height={!matches ? "430px" : "200px"}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Office No- 3, 6th Floor, Stellar IT Park, Tower-A, Sector 62, Noida, Uttar Pradesh 201309&t=&z=10&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
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

export default ContactUs;
