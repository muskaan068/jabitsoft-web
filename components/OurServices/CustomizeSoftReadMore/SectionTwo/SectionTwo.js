import React from "react";
import { Container } from "react-bootstrap";
import styles from "./SectionTwo.module.scss";

function SectionTwo() {
  return (
    <div className={styles.SectionTwoWrapper}>
      <Container>
        <div className={styles.ContainerBox}>
          <h3>WHY CUSTOMIZE A SOFTWARE?</h3>
          <p>
            {`Customizing software allows businesses to align technology with their unique needs, processes, and objectives. At JABITSOFT, we understand that every organization is different, and off-the-shelf software may not always meet specific requirements. By customizing software, you gain full control over its features, functionality, and user experience. Our expert team collaborates with you to identify pain points, streamline workflows, and create a software solution that enhances efficiency, productivity, and competitiveness. With customized software, you eliminate unnecessary complexities and optimize operations, resulting in improved performance and better business outcomes. Experience the power of tailored software that empowers your organization and drives success.
`}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default SectionTwo;
