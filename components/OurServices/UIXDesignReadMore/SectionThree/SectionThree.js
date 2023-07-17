import React from 'react'
import { Container } from 'react-bootstrap';
import styles from './SectionThree.module.scss'

function SectionThree() {
  const infoData=[
    {id:1,icon_url:'/images/exchange.png',title:'DEFINE',desc:`Conduct research to understand the target audience, their needs, and goals. Define project goals and objectives based on user insights and business requirements. Identify key user tasks and prioritize features and functionalities.`},
    {id:2,icon_url:'/images/bulb-idea.png',title:'IDEATE',desc:`Brainstorm and generate ideas for the design solution. Use techniques like mind mapping, sketching, or design workshops to explore different possibilities. Encourage collaboration among the design team to gather diverse perspectives.`},
    {id:3,icon_url:'/images/design1.png',title:'DESIGN',desc:`Create wireframes and low-fidelity prototypes to define the layout and structure of the interface. Develop the information architecture and navigation flow. Apply visual design principles, such as typography, colors, and imagery, to enhance the user interface.`},
    {id:4,icon_url:'/images/process1.png',title:'TEST',desc:`Conduct usability testing with real users to evaluate the effectiveness and usability of the design. Identify pain points, usability issues, and areas for improvement. Gather user feedback and observations to inform design iterations. Iterate on the design based on user testing results and insights.`},
    {id:5,icon_url:'/images/rocket.png',title:'LAUNCH',desc:`Collaborate with developers to ensure the design is implemented accurately. Provide design specifications, style guides, and assets for development. Conduct quality assurance checks to ensure a seamless user experience. Coordinate with stakeholders for final approvals and sign-off.`},

  ]
  return (
    <div className={styles.SectionThreeWrapper}>
      <div className={styles.SectionThreeSubWrapper}>
        <Container>
            <div className={styles.ContainerBoxRightRds}>
                    <div className={styles.InfoContainer}>
                        <h3>UI UX DESIGN PROCESS</h3>
                        <p>Every business has financial and accounting tasks. Billing and invoicing software facilitate business owners to automate the routine duties, put off manual facts entry, and minimize the discrepancy in accounting figures. In the Digital era, responsive website for business and billing & invoicing software for customer has become a guarantee of business growth. Using Billing software all accounting transactions such as accounts payable, accounts receivable, payroll, and trial balance can manage in one software.</p>
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

export default SectionThree