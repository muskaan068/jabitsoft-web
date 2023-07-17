import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../HowCanHelpYou/HowCanHelpYou.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useMediaQuery } from '@mui/material';


function HowCanHelpYou() {
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
               <div className={styles.InfoText}   data-aos={matches?null:"fade-up"}>
                   <h1>HOW CAN WE HELP YOU?</h1>
                   <p>We at JABITSOFT are committed to supporting your company as it grows. Web development, e-commerce solutions, digital marketing, the creation of mobile applications, and continuous support are all included in our services. We build attractive websites, improve online sales, increase your online presence, and offer practical mobile experiences thanks to our expertise in these fields. Join forces with us to take advantage of our services and advance your company. Contact us right away to talk about your individual needs and goals.</p>
               </div>
               <div className={styles.InfoImgContainer}   data-aos={matches?null:"zoom-in"}>
                   {/* <img className={styles.InfoImg1} src="/images/hc1.png" />
                   <img className={styles.InfoImg2} src="/images/hc2.png" /> */}
                   <img className={styles.HowCanHelpImg} src="/images/canyouhelp.png" alt='HowCanHelpImg' />
                   
               </div>
           </div>
           <div className={styles.ContainerInfoBoxes}   data-aos={matches?null:"fade-up"}>
               <div className={styles.ContainerItemBox}>
                   <img src="/images/apps_svgrepo.com.png" alt="user" />
                   <div>
                   <h5>Develop Apps for your business</h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                   </div>
               </div>
               <div className={styles.ContainerItemBox}>
                   <img src="/images/apps_svgrepo.com (1).png" alt="user" />
                   <div>
                   <h5>Get a business solution</h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                   </div>
               </div>
               <div className={styles.ContainerItemBox}>
                   <img src="/images/site_svgrepo.com.png" alt="user" />
                   <div>
                   <h5>Innovate your Business</h5>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                   </div>
               </div>
              
           </div>
           <div className={styles.ButtonContainer}><button>Let's Connect</button></div>
       </Container>
    </div>
</div>
  )
}

export default HowCanHelpYou