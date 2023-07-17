import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Banner from '../../components/BlogDetails/Banner/Banner'
import BlogDetailsComponent from '../../components/BlogDetails/BlogDetails'
import CommonBlog from '../../components/Blogs/CommonBlogs/CommonBlog'
import { Layout } from '../../components/Layout/Layout'
import TalkAboutProject from '../../components/OurServices/TalkAboutProject/TalkAboutProject'
import { endPoint, envUrl } from '../../utils/Factory'

function BlogDetails() {
  //Router declare
  const router=useRouter();
  const[details,setDetails]=useState(null);
  const[blogList,setBlogList]=useState(null);

  // Getblog By Id
  const loadBlogById=async()=>{
    const Type=await router && router.query.type;
    const postId=await router && router.query.blog_id;
    try {
      const url=`${envUrl.baseUrl}${endPoint.selectBlogGetById}`;
      if(postId && Type){
      const obJson={type:Type && Type,id:Number(postId && postId)};
      await axios.post(url,obJson).then((response)=>{
      console.log(response)
      if(response && response.data.status===200 && response.data.statusType===1 && response.data.result!==null){
        // console.log("hhhhhhhh",response.data.result)
       setDetails(response && response.data && response.data.result)
      }
     
      //console.log(response);
    
    }).catch((error)=>{
      console.log(error);
       
    });
  }
    } catch (error) {
      console.log(error);
    }
  }

   // Load Bloglist 
   const loadBlogsTopThree=async()=>{
    try {
            const url=`${envUrl.baseUrl}${endPoint.latestThreeBlogs}`
        await axios.get(url).then((response)=>{
            if(response && response.data.status===200 && response.data.statusType===1){
              setBlogList(response && response.data.result.latestBlog);
            }
           
           // console.log(response);
          }).catch((error)=>{
            console.log(error)
              
          });
    } catch (error) {
       console.log(error)
        
    }
}


  // Dependency of router id
  useEffect(()=>{
    if(router && router && router && router.query && router && router.query.type)
    loadBlogById();
  },[router && router.query && router.query.type])

  // Dependency of blogLoad threee
useEffect(()=>{
  loadBlogsTopThree();
},[]
);


  return (
    <div>
    <Layout >
       <Banner details={details && details} />
        <BlogDetailsComponent details={details && details} blogList={blogList} />
        <CommonBlog />
      <TalkAboutProject />
   </Layout>
</div>
  )
}

export default BlogDetails