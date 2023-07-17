import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './SectionFour.module.scss'

function SectionFour() {
  const infoData=[
    {id:1,icon_url:'/images/secure.png',title:'SIMPLE, SECURE & FAST',desc:`Billing & invoicing solution facilitates business owners to increase productivity by cutting down the complexity of the entire billing & invoicing process.`},
    {id:2,icon_url:'/images/thumb-print.png',title:'ENHANCE BRAND IDENTITY',desc:`For every business customer satisfaction have extreme priority for the growth of the business and brand establishment. By providing a seamless experience to your customers, you can establish your brand identity in this competitive market.`},
    {id:3,icon_url:'/images/upload.png',title:'CLOUD STORAGE FACILITY',desc:`Cloud storage provides scalability, security and 24X7 access to customers.`},
    {id:4,icon_url:'/images/clock-icon.png',title:'REDUCED OVERHEAD',desc:`Service provider companies drastically reduce the overhead cost due to late payments. Billing and invoicing software have features to set reminders for bill payments.`},
    {id:5,icon_url:'/images/wallet.png',title:'MULTI CURRENCY SUPPORT',desc:`Multi-currency support facilitates business owners to make faster and easier money conversions and transactions in different country currencies.`},

  ]
  return (
    <div className={styles.SectionFourWrapper}>
      <div className={styles.SectionFourSubWrapper}>
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

export default SectionFour