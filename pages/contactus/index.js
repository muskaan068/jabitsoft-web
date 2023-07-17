import React from "react";
import Banner from "../../components/ContactUs/Banner/Banner";
import { Layout } from "../../components/Layout/Layout";
import TalkAboutProject from "../../components/OurServices/TalkAboutProject/TalkAboutProject";

import Head from "next/head";

function index() {
  return (
    <div>
      <Head>
        <title>ContactUs | Jabit Soft Pvt. Ltd</title>
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
        <link rel="canonical" href="https://www.jabitsoft.com/contactus"></link>
      </Head>
      <Layout>
        <Banner />
        <TalkAboutProject />
      </Layout>
    </div>
  );
}

export default index;
