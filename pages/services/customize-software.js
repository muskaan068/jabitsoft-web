import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import Banner from '../../components/OurServices/CustomizeSoftReadMore/Banner/Banner'
import SectionFive from '../../components/OurServices/CustomizeSoftReadMore/SectionFive/SectionFive'
import SectionFour from '../../components/OurServices/CustomizeSoftReadMore/SectionFour/SectionFour'
import SectionOne from '../../components/OurServices/CustomizeSoftReadMore/SectionOne/SectionOne'
import SectionThree from '../../components/OurServices/CustomizeSoftReadMore/SectionThree/SectionThree'
import SectionTwo from '../../components/OurServices/CustomizeSoftReadMore/SectionTwo/SectionTwo'
import TalkAboutProject from '../../components/OurServices/TalkAboutProject/TalkAboutProject'

function CustomizeSoftware() {
  return (
    <div>
          <Layout>
             <Banner />
             <SectionOne />
             <SectionTwo />
             {/* <SectionThree />
             <SectionFour /> */}
             <SectionFive />
             <TalkAboutProject />
          </Layout>
    </div>
  )
}

export default CustomizeSoftware