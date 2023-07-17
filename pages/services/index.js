import Head from "next/head";
import React from "react";
import { Layout } from "../../components/Layout/Layout";
import Banner from "../../components/OurServices/Banner/Banner";
import BillingInvoicingSoftware from "../../components/OurServices/BillingSoftware/BillingInvoiceSoftware";
import CustomizeSoftware from "../../components/OurServices/CustomizeSoftware/CustomizeSoftware";
import DatabaseManagement from "../../components/OurServices/DatabaseManagement/DatabaseManagement";
import MobileAppDev from "../../components/OurServices/MobileAppDev/MobileAppDev";
import TalkAboutProject from "../../components/OurServices/TalkAboutProject/TalkAboutProject";
import UIXDesign from "../../components/OurServices/UIXDesign/UIXDesign";
import WebDevelopment from "../../components/OurServices/WebDevelopment/WebDevelopment";

function index() {
  return (
    <div>
      <Head>
        <title>
          IT Support and Services Company in Noida | Jabit Soft Pvt. Ltd.
        </title>
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
        <meta
          name="keywords"
          content="IT Services, IT solutions, IT services company, IT support &amp; services"
        ></meta>
        <meta
          name="description"
          content="Looking for IT solution provider companies in Noida? Jabit Soft is an IT services company providing web design &amp; development, app development and custom billing software solution."
        ></meta>
        <link rel="canonical" href="https://www.jabitsoft.com/services"></link>
      </Head>
      <Layout>
        <Banner />
        <WebDevelopment />
        <UIXDesign />
        <MobileAppDev />
        <CustomizeSoftware />
        <DatabaseManagement />
        <BillingInvoicingSoftware />
        <TalkAboutProject />
      </Layout>
    </div>
  );
}

export default index;
