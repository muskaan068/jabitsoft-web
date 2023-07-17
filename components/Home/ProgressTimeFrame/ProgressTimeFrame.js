import { Grid, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../ProgressTimeFrame/ProgressTimeFrame.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function ProgressTimeFrame() {
  const matches = useMediaQuery("(max-width:992px)");
  const [timeFrameData,setTimeFrameData]=useState([
    {
        id:1,title:'PRODUCT LAUNCH',
        date:'25TH MARCH',
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu. Leo in vitae turpis massa sed elementum tempus egestas.`,
        img_url:'/images/img1.png'
    },
    {
        id:2,title:'PRODUCT LAUNCH',
        date:'26TH MARCH',
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu. Leo in vitae turpis massa sed elementum tempus egestas.`,
        img_url:'/images/img2.png'
    },
    {
        id:3,title:'PRODUCT LAUNCH',
        date:'27TH MARCH',
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu. Leo in vitae turpis massa sed elementum tempus egestas.`,
        img_url:'/images/img3.png'
    },
    {
        id:4,title:'PRODUCT LAUNCH',
        date:'28TH MARCH',
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu. Leo in vitae turpis massa sed elementum tempus egestas.`,
        img_url:'/images/img4.png'
    },
    
  ]);
const [selectedData,setSelectedData]=useState({
    id:1,title:'PRODUCT LAUNCH',
    date:'25TH MARCH',
    description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu. Leo in vitae turpis massa sed elementum tempus egestas.`,
    img_url:'/images/img1.png'
})

// Selected Image Handle
const handleImageSelected=(item)=>{
    console.log("hhhhhhhhhhhhhhhhh")
    setSelectedData(item);
}

    useEffect(() => {
        AOS.init(
            {
                offset: 200,
                duration: 600,
                easing: 'ease-in',
                delay: 100,
                disable:'mobile'
              }
        );
      }, [])
  return (
    <div className={styles.ProgresstimeFrameWrapper}>
        <Container>
           <div className={styles.ProgressInfoContainer}  data-aos={matches?null:"fade-up"}>
                <h1>OUR PROGRESS TIMEFRAME</h1>
                {/* <Grid container direction={"row"}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                    <div className={styles.ItemBox}>
                        <img src="/images/img1.png" alt='img1'/>
                        <div className={styles.InfoBox}>
                            <h4>PRODUCT LAUNCH</h4>
                            <h5>25TH MARCH</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             Leo a diam sollicitudin tempor id eu. Leo in vitae turpis massa sed 
                             elementum tempus egestas.</p>
                        </div>
                    </div>
                    </Grid>
                    <Grid itemxs={6} sm={6} md={6} lg={6}>
                    <Grid container direction={"row"} spacing={3}>
                    <Grid itemxs={6} sm={6} md={6} lg={6}>
                    <div className={styles.ImgContainer}>
                     <img src="/images/img2.png" alt='img2'/>
                    </div>
                    </Grid>
                    <Grid itemxs={6} sm={6} md={6} lg={6}>
                    <div className={styles.ImgContainer}>
                     <img src="/images/img3.png" alt='img3'/>
                    </div>
                    </Grid>
                    <Grid itemxs={6} sm={6} md={6} lg={6}>
                    <div className={styles.ImgContainer}>
                     <img src="/images/img4.png" alt='img4'/>
                    </div>
                    </Grid>
                    <Grid itemxs={6} sm={6} md={6} lg={6}>
                    <div className={styles.ImgContainer}>
                     <img src="/images/img5.png" alt='img5'/>
                    </div>
                    </Grid>
                    
                    </Grid>
                   
                    
                    </Grid>
                </Grid> */}
                <div className={styles.ItemBoxWrapper}>
                    <div className={styles.ItemBox}>
                        <img src={selectedData && selectedData.img_url} alt='img1'/>
                       
                    </div>
                    <div className={styles.ItemBoxSlider}>
                        {timeFrameData && timeFrameData.map((item,i)=>(
                            <div className={styles.ImgContainer} key={i} onClick={(e)=>handleImageSelected(item)}>
                            <img  src={item && item.img_url} alt={item && item.title}/>
                        </div>
                        ))}
                       
                       
                    
                    </div>
                    
                </div>
                <div className={styles.InfoBoxContainer}>
                            <h4>{selectedData && selectedData.title}</h4>
                            <h5>{selectedData && selectedData.date}</h5>
                            <p>{selectedData && selectedData.description}</p>
                        </div>
           </div>
        </Container>
    </div>
  )
}

export default ProgressTimeFrame