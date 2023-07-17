import React from 'react'
import { Container } from 'react-bootstrap';
import styles from './SectionOne.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { testimonialData } from '../../../utils/testimonial';

function SectionOne() {
   
  return (
    <div className={styles.SectionOneWrapper}>
        <Container>
            <div className={styles.TestimonialContainer}>
                <h3>CLIENT TESTIMONIALS</h3>
                <img src='/images/qt.png' className={styles.QuoteBgIcon} alt="qt" />
                <div className={styles.SliderBox} id="TestimonialSwiperSlider">
                <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {testimonialData && testimonialData.map((item,index)=>(
                            <SwiperSlide className={styles.SliderItem} key={index}>
                         <div className={styles.TestimonialItemBoxInfo}>
                            <div className={styles.InfoBody}>
                            <img className={styles.QuoteImg} src="/images/quotes.png" alt='img' />
                            <p>{item && item?.testimonial.length>100 ? item?.testimonial?.substr(0,150)+"..." : item?.testimonial}</p>
                            </div>
                            <div className={styles.SliderBottom}>
                            <img src="/images/user.png" alt="profile" />
                                <div className={styles.TextInfo}>
                                <h5>{item && item.name}</h5>
                                    {/* <p>Freelancer</p> */}
                                </div>
                             </div>
                         </div> 
                        
                         </SwiperSlide>
                       
                        ))}
                        
                        
                       
                        
                </Swiper>
                   
                </div>
               
            </div>
        </Container>
    </div>
  )
}

export default SectionOne