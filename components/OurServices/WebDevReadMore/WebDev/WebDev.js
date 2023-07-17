import React from 'react'
import { Container } from 'react-bootstrap';
import styles from '../WebDev/WebDev.module.scss'

function WebDev() {
  return (
    <div className={styles.WebDevReadmoreWrapper}>
        <Container>
           <div className={styles.ContainerBoxLeftRds}>
              <div className={styles.CircleBoxContainer}>
              <div className={styles.TopCircle}>
                 <img src="/images/WebDev.png" alt="WebDev" />
              </div>
              </div>
              
             <div className={styles.ContentBox}>
                <h3>WEBSITE DEVELOPMENT SERVICES IN NOIDA</h3>
                <p>Want to develop a professional website for Business? Your screen is on exact page.
                 Jabit soft is best IT company in Noida. Web development is the process of analysis,
                  strategy planning, designing and developing a website to have an imposing online presence.
                   We have been delivering custom web development and designing solutions at competitive 
                   prices for more than decade. We, top web development company, understand very well how 
                   it is important for business owners to showcase services and products over the internet 
                   to attract the visitors, and increase the sales.</p>
                   {/* <div className={styles.ButtonContainer}>
                      <button onClick={handleReadMore}>Read More</button>
                   </div> */}
             </div>
           </div>
        </Container>
    </div>
  )
}

export default WebDev