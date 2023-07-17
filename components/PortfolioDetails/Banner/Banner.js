import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../Banner/Banner.module.scss'

function Banner({portfolioData}) {
  return (
    <div className={styles.BannerWrapper}>
     <Container>
        <div className={styles.BannerContainer}>
        <div className={styles.InfoContainer}>
            <h3>{portfolioData && portfolioData[0]?.portfolioList[0]?.title}</h3>
            <p>
            {portfolioData && portfolioData[0]?.portfolioList[0]?.description}
            </p>
        </div>
        <div className={styles.FrameContainer}>
            <img src="/images/services-banner-img.png" alt="Services Frame" />
        </div>
        </div>
     </Container>
        
    </div>
  )
}

export default Banner