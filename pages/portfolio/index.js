import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import Banner from "../../components/Portfolio/Banner/Banner";
import SectionOne from "../../components/Portfolio/SectionOne/SectionOne";
import TalkAboutProject from "../../components/OurServices/TalkAboutProject/TalkAboutProject";
import SectionTwo from "../../components/Portfolio/SectionTwo/SectionTwo";

import Head from "next/head";
import { endPoint, envUrl } from "../../utils/Factory";
import axios from "axios";

function index() {
  const [PortfolioData,setPortfolioData]=useState([]);
  const [PortfolioImgData,setPortfolioImgData]=useState([]);


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

  return (
    <div>
      <Head>
        <title>Portfolio | Jabit Soft Pvt. Ltd</title>
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
        <link rel="canonical" href="https://www.jabitsoft.com/portfolio"></link>
      </Head>
      <Layout>
        <Banner />
        {PortfolioData &&
          PortfolioData.map((item, index) => (
            <SectionOne item={item && item} index={index} key={index} />
          ))}

        {/* <SectionTwo /> */}
        <TalkAboutProject />
      </Layout>
    </div>
  );
}

export default index;
