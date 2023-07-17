import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../OurTools/OurTools.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useMediaQuery } from '@mui/material';
function OurTools() {
  const matches = useMediaQuery("(max-width:992px)");

  useEffect(() => {
  
    AOS.init(
        {
            offset: 200,
            duration: 600,
            easing: 'ease-in',
            delay: 100,
          }
    );
  }, [])
  return (
    <div className={styles.OurToolsWrapper}>
        <Container>
            <div className={styles.ContainerBox}   data-aos={matches?null:"fade-up"}>
            <h1>OUR TOOLS</h1>
                <p>At JABITSOFT, we use state-of-the-art tools and technologies to produce superior software solutions. Languages like Java, Python, JavaScript, and PHP are used by our team of knowledgeable experts, along with frameworks like Angular and React. We employ agile techniques, rigorous testing with Selenium and JUnit tools, and user-centric design with Sketch and Figma tools as a top priority. We guarantee excellent results because to our dedication to expertise and adherence to coding standards. For professional software development, collaborate with JABITSOFT. Talk to us about your project right away.</p>
                <div className={styles.OurToolsLogoContainer}>
                    <img src="/images/t1.png" alt="t1" />
                    <img src="/images/t2.png" alt="t1" />
                    <img src="/images/t3.png" alt="t1" />
                    <img src="/images/t4.png" alt="t1" />
                    <img src="/images/t5.png" alt="t1" />
                    <img src="/images/t6.png" alt="t1" />
                    <img src="/images/t7.png" alt="t1" />
                </div>
            </div>
            
        </Container>
    </div>
  )
}

export default OurTools