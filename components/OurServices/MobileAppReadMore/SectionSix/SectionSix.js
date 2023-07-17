import React from 'react'
import { Container } from 'react-bootstrap';
import styles from './SectionSix.module.scss';

function SectionSix() {
    const techStackData=[
        {id:1,img_url:'/images/android-icon.png',alt:'android icon'},
        {id:2,img_url:'/images/apple-icon.png',alt:'apple icon'},
        {id:3,img_url:'/images/html1.png',alt:'html icon'},
        {id:4,img_url:'/images/reactjs1.png',alt:'reactjs icon'},
        {id:5,img_url:'/images/global.png',alt:'global icon'},
        {id:6,img_url:'/images/xamarin.png',alt:'xamarin icon'},

    ]
  return (
    <div className={styles.SectionSixWrapper}>
        <Container>
        <div className={styles.ContainerBox}>
                <h3>OUR TECH STACKS</h3>
                    <div className={styles.ImagesContainer}>
                        {techStackData && techStackData.map((item,index)=>(
                             <div className={styles.ImageBox}>
                             <img src={item && item.img_url} alt={item && item.alt} />
                       </div>
                        ))}
                       
                        
                    </div>
                </div>
        </Container>
    </div>
  )
}

export default SectionSix