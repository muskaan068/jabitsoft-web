import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../Banner/Banner.module.scss'

function Banner({details}) {
  const [blogDeatils,setBlogDetails]=useState(details);
 
  return (
    <div className={styles.BannerWrapper}>
     <Container>
        <div className={styles.BannerContainer}>
        <div className={styles.InfoContainer}>
            <h3>{details && details.title.substr(0,50)+"..."}</h3>
            <div className={styles.DateTime}>
              <img src='/images/calender.png' alt="ddd" />
              <span>{moment(details && details.created_on).format("Do MM YYYY")}</span>
            </div>
        </div>
        {/* <div className={styles.FrameContainer}>
            <img src="/images/services-banner-img.png" alt="Services Frame" />
        </div> */}
        </div>
     </Container>
        
    </div>
  )
}

export default Banner