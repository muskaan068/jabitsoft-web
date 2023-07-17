import React from 'react'
import { Container } from 'react-bootstrap';
import styles from './SectionThree.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function SectionThree({portfolioData}) {
  return (
    <div className={styles.SectionThreeWrapper}>
        <Container>
            <div className={styles.ContainerBox}>
                <h2>PROJECT TIMELINE</h2>
                <div className={styles.ItemContainer} id={"ProjectTimeLine"}>
                <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                    {portfolioData && portfolioData[0]?.portfolioTimeline.map((item,index)=>{
                        if(index % 2===0){
                        return(
                                <SwiperSlide>
                                <div className={styles.ItemBox}>
                                        <div className={styles.TopInfoText}>
                                        <h3>{item && item?.timeline_title}</h3>
                                        <h5>{item && item?.timeline_date}</h5>
                                        <p>{item && item?.timeline_desc} </p>
                                        </div>
                                       
                                        <div className={styles.CircleBox}>{index+1}</div>
                                        <div className={styles.BottomInfoText}>
            
                                        </div>
                                </div>
                                </SwiperSlide>
                        )
                        }else{
                                return(
                                        <SwiperSlide>
                                        <div className={styles.ItemBox}>
                                                <div className={styles.TopInfoText}>
                                               
                                                </div>
                                               
                                                <div className={styles.CircleBox}>{index+1}</div>
                                                <div className={styles.BottomInfoText}>
                                                <h3>Start</h3>
                                                <h5>10th April</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                                                </div>
                                        </div>
                                        </SwiperSlide>
                                )
                                }
                    }
                    )}
                         
                    
                  
                    {/* <SwiperSlide>
                    <div className={styles.ItemBox}>
                            <div className={styles.TopInfoText}>
                            
                            </div>
                           
                            <div className={styles.CircleBox}>2</div>
                            <div className={styles.BottomInfoText}>
                            <h3>Start</h3>
                            <h5>10th April</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
                            </div>
                    </div>
                    </SwiperSlide> */}
                    
                    </Swiper>
                </div>
                
            </div>
        </Container>
    </div>
  )
}

export default SectionThree