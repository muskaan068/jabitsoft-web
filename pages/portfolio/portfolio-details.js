import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout/Layout';
import TalkAboutProject from '../../components/OurServices/TalkAboutProject/TalkAboutProject';
import Banner from '../../components/PortfolioDetails/Banner/Banner';
import SectionFive from '../../components/PortfolioDetails/SectionFive/SectionFive';
import SectionFour from '../../components/PortfolioDetails/SectionFour/SectionFour';
import SectionOne from '../../components/PortfolioDetails/SectionOne/SectionOne';
import SectionThree from '../../components/PortfolioDetails/SectionThree/SectionThree';
import SectionTwo from '../../components/PortfolioDetails/SectionTwo/SectionTwo';
import { endPoint, envUrl } from '../../utils/Factory';

function PortfolioDetails() {
  const router=useRouter();
  const [portfolioData,setPortfolioData]=useState([]);
    // Load Portfolio 
    const loadPortfolioListData=async()=>{
      const PID=router && router.query && router.query.pid
      try {
              const url=`${envUrl.baseUrl}${endPoint.selectPortfolioById}`
              await axios.post(url,{pId:PID}).then((response)=>{
              if(response && response.data.status===200 && response.data.statusType===1){
                setPortfolioData(response && response.data.result);
              }
             
             console.log(response && response.data.result);
            }).catch((error)=>{
              console.log(error)
                
            });
      } catch (error) {
         console.log(error)
          
      }
  }
  
  // Dependency of Load Portfolio
  useEffect(async()=>{
      await loadPortfolioListData();
  },[router && router.query])
  return (
    <div>
        <Layout>
            <Banner portfolioData={portfolioData} />
            <SectionOne portfolioData={portfolioData} />
            <SectionTwo portfolioData={portfolioData} />
            <SectionThree portfolioData={portfolioData} />
            <SectionFour portfolioData={portfolioData} />
            <SectionFive portfolioData={portfolioData} />
            <TalkAboutProject />
        </Layout>
    </div>
  )
}

export default PortfolioDetails;
