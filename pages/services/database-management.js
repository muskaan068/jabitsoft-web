import React from "react";
import { Layout } from "../../components/Layout/Layout";
import Banner from "../../components/OurServices/DatabaseManagementReadMore/Banner/Banner";
// import SectionFive from '../../components/OurServices/CustomizeSoftReadMore/SectionFive/SectionFive'
import SectionFour from "../../components/OurServices/DatabaseManagementReadMore/SectionFour/SectionFour";
import SectionOne from "../../components/OurServices/DatabaseManagementReadMore/SectionOne/SectionOne";
import SectionThree from "../../components/OurServices/DatabaseManagementReadMore/SectionThree/SectionThree";
import SectionTwo from "../../components/OurServices/DatabaseManagementReadMore/SectionTwo/SectionTwo";
import TalkAboutProject from "../../components/OurServices/TalkAboutProject/TalkAboutProject";

function DatabaseManagement() {
  return (
    <div>
      <Layout>
        <Banner />

        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        {/* <SectionFive /> */}
        <TalkAboutProject />
      </Layout>
    </div>
  );
}

export default DatabaseManagement;
