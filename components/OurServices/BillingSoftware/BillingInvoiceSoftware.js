import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "../BillingSoftware/BillingInvoiceSoftware.module.scss";

function BillingInvoicingSoftware() {
  const router = useRouter();
  const readMoreHandle = () => {
    router.push("/services/billing-invoicing-software");
  };
  return (
    <div className={styles.BillingInvoiceSoftwareWrapper}>
      <Container>
        <div className={styles.ContainerBoxLeftRds}>
          <div className={styles.CircleBoxContainer}>
            <div className={styles.TopCircle}>
              <img src="/images/billing.png" alt="BillingInvoice" />
            </div>
          </div>

          <div className={styles.ContentBox}>
            <h3>BILLING AND INVOICE SOFTWARE</h3>
            <p>{`Welcome to JABITSOFT's professional billing and invoice software, designed to simplify your financial processes and streamline your business operations. Our software solution empowers you to efficiently manage billing, invoicing, and payment tracking, allowing you to focus on what matters most – growing your business.
With our comprehensive billing and invoice software, you can easily generate professional invoices, customize them to reflect your brand, and automate the billing cycle. Say goodbye to manual calculations and time-consuming paperwork as our intuitive platform automates repetitive tasks and ensures accuracy.
Our software provides robust features to handle complex billing scenarios, such as recurring invoices, discounts, and multi-currency support. You can track outstanding payments, send timely reminders, and even integrate with payment gateways for seamless online transactions.
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

export default BillingInvoicingSoftware;
