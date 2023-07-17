import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styles from '../Blogs/Blog.module.scss';
import { Grid } from '@mui/material';
import moment from 'moment';
import { useRouter } from 'next/router';
import { envUrl } from '../../../utils/Factory';


function BlogSlider({blogList}) {
    const baseUrl=envUrl.baseUrl;
    const router=useRouter();
    const blogReadmore=(blogId)=>{
        router.push({pathname:"/blogs/blog-details",query:{blog_id:blogId,type:'read_deatils'}})
    }
  return (
    <>
    <div className={styles.BlogBox} id="BlogSlider">
    <Swiper
        // slidesPerView={3}
        // spaceBetween={10}
        pagination={{
        clickable: true,
        }}
        breakpoints={{
            767: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        
        modules={[Pagination]}
        className="mySwiper"
    >
    {blogList && blogList.map((item,index)=>(
        <SwiperSlide key={index}>
        <div className={styles.BlogItem}  onClick={(e)=>blogReadmore(item && item.id)}>
           <img src={`${baseUrl}${item.cover_img_path}/${item.cover_img}`} alt='img1' />
          <div className={styles.BlogContent}>
                <div className={styles.BlogTitle}>
                    <h3>{item && item.title.length>80 ? item.title.substr(0,80)+"..." : item.title}</h3>
                </div>
                <div className={styles.BlogBottom}>
                    <button onClick={(e)=>blogReadmore(item && item.id)}>Read Now</button>
                    <div className={styles.BlogDateBox}>
                        <img src="/images/calender.png" alt='calender'/>
                        <span>{moment(item && item.created_on).format("Do MM YYYY")} </span>
                    </div>
                    
                </div>
          </div>
        </div>
    </SwiperSlide>
    ))}
 
   
       
    </Swiper>
    </div>
    {/* Responsive Slider */}
    <div className={styles.ResponsiveBlogBox} id="ResponsiveBlogSlider">
    
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
        clickable: true,
        }}
        
        modules={[Pagination]}
        className="mySwiper"
    >
     {blogList && blogList.map((item,index)=>(
        <SwiperSlide key={index}>
        <div className={styles.BlogItem}>
           <img src={`${baseUrl}${item.cover_img_path}/${item.cover_img}`} alt='img1' />
          <div className={styles.BlogContent}>
                <div className={styles.BlogTitle}>
                    <h3>{item && item.title.length>80 ? item.title.substr(0,80)+"..." : item.title}</h3>
                </div>
                <div className={styles.BlogBottom}>
                    <button onClick={(e)=>blogReadmore(item && item.id)}>Read Now</button>
                    <div className={styles.BlogDateBox}>
                        <img src="/images/calender.png" alt='calender'  />
                        <span>{moment(item && item.created_on).format("Do MM YYYY")}</span>
                    </div>
                    
                </div>
          </div>
        </div>
    </SwiperSlide>
     ))}
  
    
       
    </Swiper>
    </div>
    </>
   
  )
}

export default BlogSlider