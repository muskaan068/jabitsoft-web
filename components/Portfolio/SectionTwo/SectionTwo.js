import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './SectionTwo.module.scss'


function SectionTwo() {
  return (
    <div className={styles.SectionTwoWrapper}>
        <Container>
        <div className={styles.ContainerBoxLeftRds}>
             
              
             <div className={styles.ContentBox}>
                <h3>PROJECT NAME</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </p>


                <div className={styles.ContainerInfoBoxes}>
                    <img src="/images/project2.png" alt="p1" />
                 </div>
                <div className={styles.ButtonContainer}>
                  <button>View Project</button>
                </div>
             </div>
            
           </div>
           
        </Container>
    </div>
  )
}

export default SectionTwo