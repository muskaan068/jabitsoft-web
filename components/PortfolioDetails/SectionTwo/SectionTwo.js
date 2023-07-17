import { Grid } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './SectionTwo.module.scss'


function SectionTwo({portfolioData}) {
  return (
    <div className={styles.SectionTwoWrapper}>
        <Container>
        <div className={styles.ContainerBoxLeftRds}>
             
              
             <div className={styles.ContentBox}>
             <div className={styles.ProgressInfoContainer}>
              
                <Grid container direction={"row"}>
                    <Grid item md={6}>
                    <div className={styles.ItemBox}>
                        <img src={portfolioData && portfolioData[0]?.portfolioImg[0]?.full_url_path} alt='img1'/>
                        <div className={styles.InfoBox}>
                            <h4 style={{textTransform:'uppercase'}}>{portfolioData && portfolioData[0]?.portfolioList[0]?.project_details}</h4>
                            {/* <h5>25TH MARCH</h5> */}
                            <p>{portfolioData && portfolioData[0]?.portfolioList[0]?.project_desc}</p>
                        </div>
                    </div>
                    </Grid>
                    <Grid item md={6}>
                    <Grid container direction={"row"} spacing={3}>
                    {portfolioData && portfolioData[0]?.portfolioImg.map((item,i)=>(
                       <Grid item md={6} key={i}>
                       <div className={styles.ImgContainer}>
                        <img src={item && item?.full_url_path} alt='img2'/>
                       </div>
                       </Grid>
                    ))}
                   
                   
                    
                    </Grid>
                   
                    
                    </Grid>
                </Grid>
               
           </div>
             </div>
            
           </div>
           
        </Container>
    </div>
  )
}

export default SectionTwo