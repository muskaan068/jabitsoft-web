import { Grid, useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../OurClient/OurClient.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function OurClient() {
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
    <div className={styles.OurClientWrapper}>
        <Container>
        <div className={styles.TrustedPartnerBox}   data-aos={matches?"":"fade-up"}>
                <h1>OUR CLIENTS</h1>
                <p>We at JABITSOFT have the honour of working with a wide variety of clients from a range of sectors. Our client list, which includes both new and existing businesses, demonstrates our capacity to address various business requirements and goals. We take pride in establishing trusting bonds with our clients, getting to know their goals, and providing specialised online solutions that fuel their success. Join our valued clientele and take advantage of the world-class service and outcomes that JABITSOFT is renowned for.</p>
          </div>
          <div className={styles.CompaniesParternsBox}   data-aos={matches?"":"fade-up"}>
             
                <Grid container direction={"row"} spacing={2}>
                 {Array(4).fill().map((item,index)=>(
                  <Grid item sx={3} sm={3} md={3} lg={3} key={index}>
                  <div className={styles.PartnerItemBox}>
                    <img src="/images/company-icon.png" alt="Client Logo" />
                    <h4>COMPANY</h4>
                  </div>
                  </Grid>
                    
              ))}
              
                </Grid>
                <Grid container direction={"row"} spacing={2}>
                 {Array(4).fill().map((item,index)=>(
                  <Grid item dmd={3} key={index}>
                  <div className={styles.PartnerItemBox}>
                    <img src="/images/company-icon.png" alt="Client Logo" />
                    <h4>COMPANY</h4>
                  </div>
                  </Grid>
                    
              ))}
              
                </Grid>
             
              
             
          </div>
         
        </Container>
    </div>
  )
}

export default OurClient