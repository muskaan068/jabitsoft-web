import { Grid } from '@mui/material';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { endPoint, envUrl } from '../../../utils/Factory';
// import BlogSlider from '../../Home/Blogs/BlogSlider';
import styles from './BlogItem.module.scss'

function BlogItem({blogList}) {
    const baseUrl=envUrl.baseUrl;
     const router=useRouter();
    const blogReadmore=(blogId)=>{
        router.push({pathname:"/blogs/blog-details",query:{blog_id:blogId,type:'read_deatils'}})
    }
   
  return (
    <div className={styles.BlogItemWrapper}>
        <Container>
            <div className={styles.ContainerBox}>
                <h3>LATEST BLOGS</h3>
                
                <div className={styles.ItemBoxContainer}>
                    {blogList && blogList.map((item,index)=>(
                        <div className={styles.ItemBox} key={index} onClick={(e)=>blogReadmore(item && item.id)} >
                        <img src={`${baseUrl}${item.cover_img_path}/${item.cover_img}`} alt='sss' />
                        <h4>{item && item.title.length>80 ? item.title.substr(0,80)+"..." : item.title}</h4>
                        <div className={styles.BottomContainer}>
                            <button onClick={(e)=>blogReadmore(item && item.id)}>Read More</button>
                            <div className={styles.BottomTextInfo}>
                                <img src='/images/calender.png' alt="clnder" />
                                <span>{moment(item && item.created_on).format("Do MM YYYY")}</span>
                            </div>
                        </div>
                    </div>
                       
                    ))}
                   
                  
                    
                </div>
            </div>
        </Container>
    </div>
  )
}

export default BlogItem