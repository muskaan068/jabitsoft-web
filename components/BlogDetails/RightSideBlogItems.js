import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react'
import { envUrl } from '../../utils/Factory';

function RightSideBlogItems({styles,blogList}) {
    const baseUrl=envUrl.baseUrl;
    const router=useRouter();
    const blogReadmore=(blogId)=>{
        router.push({pathname:"/blogs/blog-details",query:{blog_id:blogId,type:'read_deatils'}})
    }
  return (
    <div className={styles.RightSideContent}>
    <div className={styles.ItemContainerBox}>
    {blogList && Array.isArray(blogList) && blogList.map((item,index)=>(
        <div className={styles.ItemBox} style={{background:`url(${baseUrl}${item.cover_img_path}/${item.cover_img})`,backgroundRepeat:'no-repeat',objectFit:'cover',backgroundSize:'100%, 100%'}} >
            {/* <img src='/images/blog-img3.png' alt='sss' /> */}
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
  )
}

export default RightSideBlogItems