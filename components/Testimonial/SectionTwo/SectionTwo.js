import { Grid } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import { testimonialData } from '../../../utils/testimonial'
import styles from './SectionTwo.module.scss'

function SectionTwo() {
  return (
    <div className={styles.SectionTwoWrapper}>
        <Container>
           <div className={styles.ConatinerBox}>
              <Grid container direction={"row"} spacing={3}>
              {testimonialData && testimonialData.slice(0,6).map((item,index)=>(
                    <Grid item sm={4} md={4} lg={4} key={index}>
                    <div className={styles.TestimonialItemBoxInfo}>
                            <div className={styles.InfoBody}>
                            <img className={styles.QuoteImg} src="/images/quotes.png" alt='img' />
                            <p>{item && item?.testimonial.length>100 ? item?.testimonial?.substr(0,150)+"..." : item?.testimonial}</p>
                           
                            </div>
                            <div className={styles.SliderBottom}>
                            <img src="/images/user.png" alt="profile" />
                                <div className={styles.TextInfo}>
                                {item && item.name}
                                  
                                </div>
                             </div>
                         </div> 
                  </Grid>
                  ))}
                 
              </Grid>
           </div>
        </Container>
    </div>
  )
}

export default SectionTwo