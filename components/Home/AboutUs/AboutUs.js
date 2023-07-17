import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../AboutUs/AboutUs.module.scss'

function AboutUs() {
  return (
    <div className={styles.AboutUsWrapper}>
        <Container>
            <div className={styles.AboutContainer}>
                <div className={styles.AboutTextInfo}>
                    <h1>ABOUT US</h1>
                    <p>Leading web development firm JABITSOFT is committed to assisting companies in thriving online. We build visually attractive, high-performing websites that are customised to your specific needs using our knowledge and creative ideas. We stand out because of our dedication to quality, client happiness, and ongoing assistance. Join forces with JABITSOFT to strengthen your online presence and experience outstanding success. To begin, get in touch with us immediately. </p>
                </div>
                <button>Learn More</button>
            </div>
        </Container>
    </div>
  )
}

export default AboutUs