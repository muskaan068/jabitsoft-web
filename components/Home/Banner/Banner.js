import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../Banner/Banner.module.scss'

function Banner() {
  return (
    <div className={styles.BannerWrapper}>
     <Container>
        <div className={styles.BannerContainer}>
        <div className={styles.InfoContainer}>
            <h1>Jabit <span>Soft</span></h1>
            <p>Welcome to JABIT SOFT, An INDIA-based Software development company in Noida, with operations in Australia and Singapore. We are an experienced group of people that are passionate about creating cutting-edge software solutions that satisfy the needs of businesses in the contemporary digital environment.</p>
        </div>
        <div className={styles.FrameContainer}>
            <img src="/images/Frame.png" alt="Home Frame" />
        </div>
        </div>
     </Container>
        
    </div>
  )
}

export default Banner