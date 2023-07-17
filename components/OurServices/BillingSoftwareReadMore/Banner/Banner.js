import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../Banner/Banner.module.scss'

function Banner() {
  return (
    <div className={styles.BannerWrapper}>
     <Container>
        <div className={styles.BannerContainer}>
        <div className={styles.InfoContainer}>
            <h1>Billing <span>And</span></h1>
            <h1>Invoic<span>ing</span></h1>
            <h1>Soft<span>ware</span></h1>
        </div>
        <div className={styles.FrameContainer}>
            <img src="/images/Billing-Banner.png" alt="Services Frame" />
        </div>
        </div>
     </Container>
        
    </div>
  )
}

export default Banner