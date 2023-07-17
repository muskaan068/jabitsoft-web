import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import Banner from '../../components/OurServices/BillingSoftwareReadMore/Banner/Banner'
import SectionFive from '../../components/OurServices/BillingSoftwareReadMore/SectionFive/SectionFive'
import SectionFour from '../../components/OurServices/BillingSoftwareReadMore/SectionFour/SectionFour'
import SectionOne from '../../components/OurServices/BillingSoftwareReadMore/SectionOne/SectionOne'
import SectionThree from '../../components/OurServices/BillingSoftwareReadMore/SectionThree/SectionThree'
import SectionTwo from '../../components/OurServices/BillingSoftwareReadMore/SectionTwo/SectionTwo'
import TalkAboutProject from '../../components/OurServices/TalkAboutProject/TalkAboutProject'

function BillingInvoingSoftware() {
  return (
    <div>
          <Layout>
             <Banner />
             <SectionOne />
             <SectionTwo />
             <SectionThree />
             <SectionFour />
             <SectionFive />
             <TalkAboutProject />
          </Layout>
    </div>
  )
}

export default BillingInvoingSoftware