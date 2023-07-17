import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SectionFour.module.scss'
function SectionFour() {
  return (
    <div className={styles.SectionFourWrapper}>
        <Container>
        <div className={styles.ContainerBoxLeftRds}>
             
             <div className={styles.ContentBox}>
                <div className={styles.InfoText}>
                <h3>ENDORSEMENT</h3>
                <p>
                The company specializes in developing custom software applications, responsive websites, and mobile apps that are tailored to its clients' specific needs and requirements. Jabit Soft's team of experienced developers, designers, and project managers work closely with clients throughout the development process to ensure that each project is delivered on time, within budget, and to the highest standards of quality. 
                </p>
                </div>
                <img src='/images/meetup.png' alt='meetup' />


             
             </div>
           
           </div>
           <div className={styles.ItemBoxContainer}>
                <div className={styles.ItemBox}>
                    <img src='/images/abt-1.png' alt='kkkkk' />
                    <h3>PERSONAL DEVELOPMENT</h3>
                    <p>The company specializes in developing custom software applications, responsive websites, and mobile apps that are tailored to its clients' specific needs and requirements. Jabit Soft's team of experienced developers, designers, and project managers work closely with clients t</p>
                </div>
                <div className={styles.ItemBox}>
                    <img src='/images/abt-2.png' alt='kkkkk' />
                    <h3>WORK LIFE</h3>
                    <p>The company specializes in developing custom software applications, responsive websites, and mobile apps that are tailored to its clients' specific needs and requirements. Jabit Soft's team of experienced developers, designers, and project managers work closely with clients t</p>
                </div>
                <div className={styles.ItemBox}>
                    <img src='/images/abt-3.png' alt='kkkkk' />
                    <h3>MENTORSHIPS</h3>
                    <p>The company specializes in developing custom software applications, responsive websites, and mobile apps that are tailored to its clients' specific needs and requirements. Jabit Soft's team of experienced developers, designers, and project managers work closely with clients t</p>
                </div>
           </div>
        </Container>
    </div>
  )
}

export default SectionFour