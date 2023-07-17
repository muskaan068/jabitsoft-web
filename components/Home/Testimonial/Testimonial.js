import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import styles from '../Testimonial/Testimonial.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useMediaQuery } from '@mui/material';
import {testimonialData} from '../../../utils/testimonial'
import { useRouter } from 'next/router';
function Testimonial() {
    const matches = useMediaQuery("(max-width:992px)");
    const router=useRouter();
    const readMoreTestimonial=()=>{
      router.push("/testimonial")
    }
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
    <div className={styles.TestimonialWrapper}>
        <Container>
            <div className={styles.TestimonialContainer} data-aos={matches?null:"fade-up"}>
                <h1>OUR CLIENT’S TESTIMONIALS</h1>
                <div className={styles.SliderBox} id="TestimonialSwiperSlider">
                <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        pagination={{
                        clickable: true,
                        dynamicBullets:true
                        }}
                        breakpoints={{
                            767: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 30,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}
                        modules={[Pagination,Autoplay]}
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
                <div className={styles.ReadMoreButton}>
                    <button onClick={readMoreTestimonial}>Read More</button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Testimonial