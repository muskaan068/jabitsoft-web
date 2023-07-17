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
              <img src="/images/App-Dev11.png" alt="Appev" />
            </div>
          </div>

          <div className={styles.ContentBox}>
            <h3>LEADING MOBILE APPLICATION DEVELOPMENT COMPANY IN NOIDA</h3>
            <p>
              {`At JABITSOFT, we are the preferred choice for mobile application development in Noida. With our exceptional expertise and innovative approach, we deliver outstanding results for our clients. Our team is dedicated to creating mobile apps that provide seamless user experiences, combining intuitive design with captivating visuals. We understand the importance of customization and tailor our solutions to suit your unique business needs. When you choose us, you can expect top-notch quality and reliability, backed by our commitment to delivering high-performance and secure mobile apps. Furthermore, our ongoing support ensures that your app remains up-to-date and optimized for success. Partner with JABITSOFT for leading mobile application development in Noida and unlock the potential of your business.
`}
            </p>
            {/* <p>
            
            </p> */}
            {/* <div className={styles.ButtonContainer}>
                      <button onClick={handleReadMore}>Read More</button>
                   </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SectionOne;
