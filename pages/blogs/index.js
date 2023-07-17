import React, { useEffect, useState } from "react";
import Banner from "../../components/Blogs/Banner/Banner";
import BlogItem from "../../components/Blogs/BlogItem/BlogItem";
import CommonBlog from "../../components/Blogs/CommonBlogs/CommonBlog";
import SectionOne from "../../components/Blogs/SectionOne/SectionOne";
import { Layout } from "../../components/Layout/Layout";
import TalkAboutProject from "../../components/OurServices/TalkAboutProject/TalkAboutProject";

import Head from "next/head";
import axios from "axios";
import { endPoint, envUrl } from "../../utils/Factory";

function index() {
  const [blogList,setBlogList]=useState([]);
  const [blogItemTopOne,setBlogItemTopOne]=useState([]);
   
   // Load Bloglist 
   const loadBlogList=async()=>{
    try {
            const url=`${envUrl.baseUrl}${endPoint.latestThreeBlogs}`
        await axios.get(url).then((response)=>{
            if(response && response.data.status===200 && response.data.statusType===1){
              setBlogList(response && response.data.result.latestBlog);
              setBlogItemTopOne(response && response.data.result.latestBlog)
            }
           
           // console.log(response);
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
    <div>
      <Head>
        <title>Blogs | Jabit Soft Pvt. Ltd</title>
        <link
          rel="icon"
          type="image/png"
          href="https://www.jabitsoft.com/images/favicon/favicon-32x32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="images/favicon/favicon-16x16.png"
          sizes="16x16"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="images/favicon/apple-touch-icon.png"
        ></link>
        {/* <meta
          name="Description"
          content="Jabit Soft Pvt. Ltd. is Noida based professional software development company. We offer website design &amp; development and mobile app development at competitive price."
        ></meta>
        <meta
          name="keywords"
          content="Jabit soft,professional software development company,customized software development, Top software development company in West Delhi, software development services, software development company india"
        ></meta> */}
        <link rel="canonical" href="https://www.jabitsoft.com/blogs"></link>
      </Head>
      <Layout>
        <Banner />
        <SectionOne blogItemTopOne={blogItemTopOne} />
        <BlogItem blogList={blogList} />
        <CommonBlog />
        <TalkAboutProject />
      </Layout>
    </div>
  );
}

export default index;
