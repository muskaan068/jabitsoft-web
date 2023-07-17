import React from 'react'
import { Container } from 'react-bootstrap';
import styles from './SectionThree.module.scss'

function SectionThree() {
  return (
    <div className={styles.SectionThreeWrapper}>
        <Container>
            <div className={styles.ContainerBoxRightRds}>
                   
                    <div className={styles.InfoContainer}>
                        <h3>WHY DO COMPANIES NEED BILLING SOFTWARE?</h3>
                        <p>Every business has financial and accounting tasks. Billing and invoicing software facilitate business owners to automate the routine duties, put off manual facts entry, and minimize the discrepancy in accounting figures. In the Digital era, responsive website for business and billing & invoicing software for customer has become a guarantee of business growth. Using Billing software all accounting transactions such as accounts payable, accounts receivable, payroll, and trial balance can manage in one software.</p>
                    </div>
            </div>
        </Container>
    </div>
  )
}

export default SectionThree