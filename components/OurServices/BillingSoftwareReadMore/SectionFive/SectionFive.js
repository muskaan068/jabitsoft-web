import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SectionFive.module.scss'

function SectionFive() {
  const infoData=[
    {id:1,icon_url:'/images/retail-billing.png',title:'RETAIL SHOP BILLING SOFTWARE',desc:`To support the Government of India's Digital india mission, Jabit Soft IT company develop custom retail shop billing software for SME and large scale retail business. Retail shop billing software takes care of all the business process of retail industry starting from Raw Material procurement to CRM. To get the big profit right, you have to master your low-level data. Retail shop billing software helps owners to master specifically in controlling the low level.`},
    {id:2,icon_url:'/images/gst-icon.png',title:'GST BILLING SOFTWARE',desc:`Jabit Soft software development company develop GST (Customer relationship Management) software to manage billing, inventory, and accounting details. GST billing software is equipped with sale invoice, purchase invoice, inventory & party ledger. This software also generates custom reports for shop owners.`},
    {id:3,icon_url:'/images/crm-icon.png',title:'CRM INVOICING SOFTWARE',desc:`Professional CRM software with billing and invoicing permits your enterprise's income and bill humans to rapidly create accurate invoices, and automate reminders to customers. This software actively trails open invoices to accredit payment collection.`},
    {id:4,icon_url:'/images/transport.png',title:'TRANSPORT BILLING SOFTWARE',desc:`Transport billing software is dedicated to help all size business firms for the streamline delivery process. This software keeps track the real-time routing of delivery. Transport billing software automates the entire process of transport business by establishing coordination with the freight system and warehouse.`},
    
  ]
  return (
    <div className={styles.SectionFiveWrapper}>
      <div className={styles.SectionFiveSubWrapper}>
        <Container>
            <div className={styles.ContainerBoxRightRds}>
                    <div className={styles.InfoContainer}>
                        <h3>BENEFITS OF BILLING SOFTWARE</h3>
                        <p>The billing & invoicing software is necessary for the smooth functioning of companies involved especially in IT services, consultancy services, and customer support services. Billing systems can bring considerable business benefits.</p>
                    </div>
                    <div className={styles.InfoItemBoxesContainer}>
                    {infoData && infoData.map((item,index)=>(
                      <div className={styles.InfoItemBox} key={index}>
                          <div className={styles.IconBox}>
                            <img src={item && item.icon_url} alt={item && item.title} />
                          </div>
                          <div className={styles.InfoTextBox}>
                            <h3>{item && item.title}</h3>
                            <p>{item && item.desc}</p>
                          </div>
                       </div>
                    ))}
                      
                    </div>
            </div>
        </Container>
        </div>
    </div>
  )
}

export default SectionFive