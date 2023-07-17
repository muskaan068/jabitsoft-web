import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import AboutUs from '../components/Home/AboutUs/AboutUs'
import Banner from '../components/Home/Banner/Banner'
import Blog from '../components/Home/Blogs/Blog'
import CaseStudy from '../components/Home/CaseStudy/CaseStudy'
import ContactUs from '../components/Home/ContactUs/ContactUs'
import HowCanHelpYou from '../components/Home/HowCanHelpYou/HowCanHelpYou'
import OurClient from '../components/Home/OurClient/OurClient'
import OurTools from '../components/Home/OurTools/OurTools'
import Portfolio from '../components/Home/Portfolio/Portfolio'
import ProgressTimeFrame from '../components/Home/ProgressTimeFrame/ProgressTimeFrame'
import Projects from '../components/Home/Projects/Projects'
import Testimonial from '../components/Home/Testimonial/Testimonial'
import TrustedPartner from '../components/Home/TrustedPartner/TrustedPartner'
import WhatToDo from '../components/Home/WhatToDo/WhatToDo'
import WhyUs from '../components/Home/WhyUs/WhyUs'
import { Layout } from '../components/Layout/Layout'
import { endPoint, envUrl } from '../utils/Factory'


function index() {
  const [blogList,setBlogList]=useState([]);
  const [PortfolioData,setPortfolioData]=useState([]);

  // Load Bloglist 
  const loadBlogList=async()=>{
    try {
            const url=`${envUrl.baseUrl}${endPoint.latestBlogs}`
        await axios.get(url).then((response)=>{
            if(response && response.data.status===200 && response.data.statusType===1){
              setBlogList(response && response.data.result.latestBlog);
            }
           
            console.log(response);
          }).catch((error)=>{
            console.log(error)
              
          });
    } catch (error) {
       console.log(error)
        
    }
}

   // Load Bloglist 
   const loadPortfolioListData=async()=>{
    try {
            const url=`${envUrl.baseUrl}${endPoint.portfolioList}`
            await axios.get(url).then((response)=>{
            if(response && response.data.status===200 && response.data.statusType===1){
              setPortfolioData(response && response.data.result[0].portfolioList);
            }
           
           //console.log(response && response.data.result[0].portfolioList);
          }).catch((error)=>{
            console.log(error)
              
          });
    } catch (error) {
       console.log(error)
        
    }
}

// Dependency of Load Portfolio
useEffect(()=>{
    loadPortfolioListData();
},[])


useEffect(()=>{
    loadBlogList();
},[]
);

  return (
    <div className='ConponentContainer'>
      <Head>
      <title>Top Software Development Company in Noida | Jabit Soft</title>
      <link rel="icon" type="image/png" href="https://www.jabitsoft.com/images/favicon/favicon-32x32.png" sizes="32x32"></link>
      <link rel="icon" type="image/png" href="images/favicon/favicon-16x16.png" sizes="16x16"></link>
      <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png"></link>
      <meta name="title" content="About Us | Jabit Soft - Best IT company in Noida"></meta>
      <meta name="description" content="Looking Top IT company in Noida for IT services? Contact top-rated IT company, expertise in custom software development for B2B and B2C E-commerce solutions."></meta>
      <link rel="canonical" href="https://www.jabitsoft.com/about"></link>
      </Head>
     <Layout >
      <Banner />
      <WhatToDo />
      <TrustedPartner />
      <ProgressTimeFrame />
      <Testimonial />
      <WhyUs />
      <AboutUs />
      <Portfolio  />
      <CaseStudy />
      <Projects PortfolioData={PortfolioData && PortfolioData} />
      <OurClient />
      <OurTools />
      <HowCanHelpYou />
      <Blog blogList={blogList && blogList}/>
      <ContactUs />
    </Layout>
      </div>
  )
}

export default index

