import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../Banner/Banner.module.scss'

function Banner() {
  return (
    <div className={styles.BannerWrapper}>
     <Container>
        <div className={styles.BannerContainer}>
        <div className={styles.InfoContainer}>
            <h1>Web <span>Development</span></h1>
        </div>
        <div className={styles.FrameContainer}>
            <img src="/images/web-dev-banner.png" alt="Services Frame" />
        </div>
        </div>
     </Container>
        
    </div>
  )
}

export default Banner