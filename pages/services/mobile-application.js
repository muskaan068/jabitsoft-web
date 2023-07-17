import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import Banner from '../../components/OurServices/MobileAppReadMore/Banner/Banner'
import SectionFive from '../../components/OurServices/MobileAppReadMore/SectionFive/SectionFive'
import SectionFour from '../../components/OurServices/MobileAppReadMore/SectionFour/SectionFour'
import SectionOne from '../../components/OurServices/MobileAppReadMore/SectionOne/SectionOne'
import SectionSix from '../../components/OurServices/MobileAppReadMore/SectionSix/SectionSix'
import SectionThree from '../../components/OurServices/MobileAppReadMore/SectionThree/SectionThree'
import SectionTwo from '../../components/OurServices/MobileAppReadMore/SectionTwo/SectionTwo'
import TalkAboutProject from '../../components/OurServices/TalkAboutProject/TalkAboutProject'

function MobileApplication() {
  return (
    <div>
          <Layout>
             <Banner />
             <SectionOne />
             <SectionTwo />
             <SectionThree />
             <SectionFour />
             <SectionFive />
             <SectionSix />
             <TalkAboutProject />
          </Layout>
    </div>
  )
}

export default MobileApplication