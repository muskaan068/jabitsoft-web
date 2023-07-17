import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import styles from '../TrustedPartner/TrustedPartner.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useMediaQuery } from '@mui/material';
function TrustedPartner() {
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
    <div>
        <Container  data-aos={matches?"":"fade-up"} >
          <div className={styles.TrustedPartnerBox}>
                <h1>TRUSTED PARTNERS</h1>
                <p>Where success is fostered by reliable alliances. We build appealing web experiences that stimulate growth in partnership with extraordinary companies. Our specialised online solutions go above and beyond expectations because of teamwork and creativity. Turn your vision become reality by becoming one of our renowned partners. Call us right away.</p>
          </div>
          <div className={styles.CompaniesParternsBox}>
              {Array(4).fill().map((item,index)=>(
                <div className={styles.PartnerItemBox}>
                <img src="/images/PartnerLogo.png" alt="Partner Logo" />
                <h4>COMPANY</h4>
              </div>
              ))}
              
             
          </div>
        </Container>
    </div>
  )
}

export default TrustedPartner