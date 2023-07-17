import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './SectionTwo.module.scss'


function SectionTwo() {
  return (
    <div className={styles.SectionTwoWrapper}>
        <Container>
        <div className={styles.ContainerBoxLeftRds}>
              <div className={styles.CircleBoxContainer}>
              <div className={styles.TopCircle}>
                 <img src="/images/group.png" alt="Appev" />
              </div>
              </div>
              
             <div className={styles.ContentBox}>
                <h3>WHAT DO WE DO?</h3>
                <p>
                The company specializes in developing custom software applications, responsive websites, and mobile apps that are tailored to its clients' specific needs and requirements. Jabit Soft's team of experienced developers, designers, and project managers work closely with clients throughout the development process to ensure that each project is delivered on time, within budget, and to the highest standards of quality. 

                </p>


                <div className={styles.ContainerInfoBoxes}>
                    <img src="/images/circle-group.png" alt="ssss" />
              
           </div>
             </div>
            
           </div>
        </Container>
    </div>
  )
}

export default SectionTwo