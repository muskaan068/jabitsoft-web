import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../WhyUs/WhyUs.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useMediaQuery } from '@mui/material';


function WhyUs() {
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
    <div className={styles.WhyUsWrapper}>
         <div className={styles.WhyUsSubWrapper}>
            <Container>
                <div className={styles.ContainerBox}>
                    <div className={styles.InfoText} data-aos={matches?null:"fade-up"}>
                        <h1>WHY US?</h1>
                        <p>By selecting JABITSOFT as your dependable partner, you may benefit from unrivalled competence in web development. Our talented staff creates custom, high-quality websites that are superior to competitors and resonate with your business. We go above and above to offer constant assistance and put the needs of our clients first, establishing relationships that last. Use the expertise of JABITSOFT to improve your internet visibility. To start your successful web development adventure, get in touch with us right away.</p>
                    </div>
                    <div className={styles.InfoImgContainer} data-aos={matches?null:"zoom-in"}>
                        {/* <img className={styles.InfoImg1} src="/images/info-img1.png" />
                        <img className={styles.InfoImg2} src="/images/info-img2.png" /> */}
                        <img className={styles.WhyUsImg} src='/images/whyus-img.png' alt='whyus' />
                    </div>
                </div>
                <div className={styles.ContainerInfoBoxes} data-aos={matches?null:"fade-up"}>
                    <div className={styles.ContainerItemBox}>
                        <img src="/images/users.png" alt="user" />
                        <div className={styles.TextInfo}>
                        <h5>Communication</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                    <div className={styles.ContainerItemBox}>
                        <img src="/images/search.png" alt="user" />
                        <div className={styles.TextInfo}>
                        <h5>Research</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                    <div className={styles.ContainerItemBox}>
                        <img src="/images/process.png" alt="user" />
                        <div className={styles.TextInfo}>
                        <h5>Iteration</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        </div>
                    </div>
                </div>
            </Container>
         </div>
    </div>
  )
}

export default WhyUs