import axios from 'axios';
import moment from 'moment';
import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { endPoint, envUrl } from '../../../utils/Factory';
import styles from './SectionOne.module.scss'
function SectionOne() {
    const [blogItemTopOne,setBlogItemTopOne]=useState(null);
    const baseUrl=envUrl.baseUrl;
    const router=useRouter();
   const blogReadmore=(blogId)=>{
       router.push({pathname:"/blogs/blog-details",query:{blog_id:blogId,type:'read_deatils'}})
   }   
   // Load Bloglist 
   const loadBlogList=async()=>{
    try {
            const url=`${envUrl.baseUrl}${endPoint.latestThreeBlogs}`
        await axios.get(url).then((response)=>{
            if(response && response.data.status===200 && response.data.statusType===1){
               setBlogItemTopOne(response && response.data.result.latestBlog[0])
            }
           
          }).catch((error)=>{
            console.log(error)
              
          });
    } catch (error) {
       console.log(error)
        
    }
}

// Dependency of blogLoad
useEffect(()=>{
    loadBlogList();
},[]
);



  return (
    <div className={styles.SectionOneWrapper } >

        <Container >
        
        <div className={styles.ContainerBoxLeftRds} onClick={(e)=>blogReadmore(blogItemTopOne && blogItemTopOne?.id)} style={{background:`url(${baseUrl}${blogItemTopOne?.cover_img_path}/${blogItemTopOne?.cover_img})`,backgroundRepeat:'no-repeat',objectFit:'contain'}}>
            <div className={styles.ContainerBox}>
                <h3>{blogItemTopOne!==null && blogItemTopOne.title?.length>80 ? blogItemTopOne?.title?.substr(0,80)+"..." : blogItemTopOne?.title}</h3>
                <button onClick={(e)=>blogReadmore(blogItemTopOne && blogItemTopOne?.id)}>Read Now</button>
                <div className={styles.DateTimeContent}>
                    <img className={styles.Clock} src="/images/calender.png" />
                    <span>{moment(blogItemTopOne && blogItemTopOne?.created_on).format("Do MM YYYY")}</span>
                </div>
            </div>

           </div>
       
           
        </Container>
    </div>
  )
}

export default SectionOne