import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SectionOne.module.scss'
function SectionOne() {
  return (
    <div className={styles.SectionOneWrapper}>
        <Container>
        <div className={styles.ContainerBoxLeftRds}>
              <div className={styles.CircleBoxContainer}>
              <div className={styles.TopCircle}>
                 <img src="/images/Web-Des11.png" alt="Appev" />
              </div>
              </div>
              
             <div className={styles.ContentBox}>
                <h3>UI UX DESIGN</h3>
                <p>
                UI UX services are essential for designing user-friendly and visually appealing digital products. User Interface (UI) focuses on the appearance and layout of the product, while User Experience (UX) focuses on the interaction and usability of the product. A good UI design ensures that the product looks modern, professional, and easy to use, while a good UX design ensures that the product is intuitive, efficient, and engaging for users. UI UX services include research, prototyping, wireframing, and testing to create a product that meets user needs and business goals. By investing in UI UX services, businesses can enhance the overall user experience and increase customer satisfaction, ultimately leading to better engagement and higher conversions.
                </p>
             </div>
           </div>
        </Container>
    </div>
  )
}

export default SectionOne