import React from "react";
import { Container } from "react-bootstrap";
import styles from "./SectionTwo.module.scss";

function SectionTwo() {
  return (
    <div className={styles.SectionTwoWrapper}>
      <Container>
        <div className={styles.ContainerBox}>
          <h3>WHAT IS BILLING & INVOICING SOFTWARE</h3>
          <p>
            {`Billing and invoice software is a powerful tool that enables businesses to automate and streamline their billing and invoicing processes. It replaces manual, time-consuming tasks with efficient and accurate automated solutions. With billing and invoice software, businesses can generate invoices, track payments, manage customer information, and maintain financial records seamlessly. This software simplifies the billing cycle, improves cash flow management, and enhances overall efficiency. By leveraging billing and invoice software, companies can save time, reduce errors, and focus on driving business growth while ensuring professional and timely invoicing.
`}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default SectionTwo;
