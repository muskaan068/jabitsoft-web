import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import WebDev from '../../components/OurServices/WebDevReadMore/WebDev/WebDev'
import ChooseCustom from '../../components/OurServices/WebDevReadMore/ChooseCustom/ChooseCustom'
import DevProcess from '../../components/OurServices/WebDevReadMore/DevProcess/DevProcess'
import OurTechStack from '../../components/OurServices/WebDevReadMore/OurTechStack/OurTechStack'
import TalkAboutProject from '../../components/OurServices/TalkAboutProject/TalkAboutProject';
import Banner from '../../components/OurServices/WebDevReadMore/Banner/Banner'
import Head from 'next/head'


function WebDevelopment() {
  return (
    <div>
        <Head>
        <title> Top Website  Development Company in Noida | Jabit Soft Pvt. Ltd. </title>
      <link rel="icon" type="image/png" href="https://www.jabitsoft.com/images/favicon/favicon-32x32.png" sizes="32x32"></link>
      <link rel="icon" type="image/png" href="images/favicon/favicon-16x16.png" sizes="16x16"></link>
      <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png"></link>
      <meta name="title" content="Top Website  Development Company in Noida | Jabit Soft Pvt. Ltd."></meta>
      <meta name="description" content="Jabit Soft is top-notch  web development company in Noida from last 14 Years. We offer Ecommerce website design &amp; development for B2B and B2C."></meta>
      <meta name="keywords" content="Website development agency Noida, web development company, website design and development company in Noida, Mobile friendly website development"></meta>
      <link rel="canonical" href="https://www.jabitsoft.com/about"></link>
      </Head>
        <Layout >
            <Banner />
            <WebDev />
            <DevProcess />
            <OurTechStack />
            <ChooseCustom />
            <TalkAboutProject />
        </Layout>
    </div>
  )
}

export default WebDevelopment