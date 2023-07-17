import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SectionFive.module.scss'

function SectionFive() {
  return (
    <div className={styles.SectionFiveWrapper}>
        <Container>
            <div className={styles.ContainerBoxRightRds}>
                    <div className={styles.NativeImgBox}>
                        <img src='/images/device.png' className={styles.AppleImg} alt="android" />
                        
                    </div>
                    <div className={styles.InfoContainer}>
                        <h3>HYBRID APPLICATION DEVELOPMENT</h3>
                        <p>Native has always been the technology which is used by mobile app developers and companies to build a mobile application. Interactive and intuitive native apps created for a specific platform (iOS or Android) using the software development tools and native programming languages supported by those operating systems.Native mobile apps are faster than hybrid app,supporting only single platform. If you are looking for a tailor made native place, Jabit Soft custom software development company is right choice for you.</p>
                    </div>
            </div>
        </Container>
    </div>
  )
}

export default SectionFive