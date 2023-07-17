import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../CaseStudy/CaseStudy.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useMediaQuery } from '@mui/material';

function CaseStudy() {
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
    <div className={styles.CaseStudyWrapper}>
        <Container>
        <div className={styles.PortfolioContainer} >
                    <div className={styles.InfoText}  data-aos={matches?null:"fade-up"}>
                        <h1>CASE STUDY</h1>
                        <p>View our case studies to learn how JABITSOFT has aided companies in achieving outstanding performance. View real-world instances of how we have offered specialised web solutions, raised our clients' online presence, and boosted conversion rates. Our case studies demonstrate our proficiency in generating measurable business results, from strategy development to implementation and results analysis. Learn how working with JABITSOFT may change the way you appear online and help your company soar to new heights. To maximise the potential of your digital strategy right now, visit our case study area. </p>
                    </div>
                    <div className={styles.InfoImgContainer}  data-aos={matches?null:"zoom-in"}>
                        {/* <img className={styles.InfoImg1} src="/images/idea.png" />
                        <img className={styles.InfoImg2} src="/images/scale.png" />
                        <img className={styles.InfoImg3} src="/images/search1.png" />
                        <img className={styles.InfoImg4} src="/images/text-file.png" /> */}
                        <img className={styles.CaseImg} src="/images/casestudy-img.png" alt='case study'/>
                    </div>
            </div>
        </Container>
    </div>
  )
}

export default CaseStudy