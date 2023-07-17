import React from 'react'
import { Layout } from '../../components/Layout/Layout';
import Banner from '../../components/OurServices/UIXDesignReadMore/Banner/Banner';
import SectionOne from '../../components/OurServices/UIXDesignReadMore/SectionOne/SectionOne'
import SectionThree from '../../components/OurServices/UIXDesignReadMore/SectionThree/SectionThree'
import SectionTwo from '../../components/OurServices/UIXDesignReadMore/SectionTwo/SectionTwo'
import TalkAboutProject from '../../components/OurServices/TalkAboutProject/TalkAboutProject'

function UIXDesign() {
  return (
    <Layout>
    <Banner />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
   
    <TalkAboutProject />
 </Layout>
  )
}

export default UIXDesign