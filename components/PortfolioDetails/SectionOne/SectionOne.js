import { useRouter } from 'next/router';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SectionOne.module.scss'

function SectionOne({portfolioData}) {
   
    return (
      <div className={styles.SectionOneWrapper}>
          <Container>
          <div className={styles.ContainerBoxLeftRds}>
               <div className={styles.ContentBox}>
                    <h3>OVERVIEW</h3>
                    <p>{portfolioData && portfolioData[0]?.portfolioList[0]?.overview}</p>
               
               </div>
               <div className={styles.InfoItemContent}>
                     <div className={styles.ItemText}>
                        <h4>{portfolioData && portfolioData[0]?.portfolioList[0]?.company_name}</h4>
                           <p>{portfolioData && portfolioData[0]?.portfolioList[0]?.company_desc}</p>
                        </div>
                     <div className={styles.ItemText}>
                        <h4>REQUIREMENTS</h4>
                        <p>{portfolioData && portfolioData[0]?.portfolioList[0]?.requirements}</p>
                        
                        </div>
                     <div className={styles.ItemText}>
                        <h4>PROJECT DURATION</h4>
                        <p>{portfolioData && portfolioData[0]?.portfolioList[0]?.duration}</p>
                       </div>
                </div>
             
              
             </div>
             
          </Container>
      </div>
    )
  }
  
  export default SectionOne