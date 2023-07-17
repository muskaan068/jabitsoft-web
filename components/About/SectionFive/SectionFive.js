import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SectionFive.module.scss'
function SectionFive() {
  return (
    <div className={styles.SectionFiveWrapper}>
        <Container>
        <div className={styles.ContainerBoxLeftRds}>
              <div className={styles.CircleBoxContainer}>
              <div className={styles.TopCircle}>
                 <img src="/images/team.png" alt="Appev" />
              </div>
              </div>
              
             <div className={styles.ContentBox}>
                <h3>OUR TEAM</h3>
                <p>
                Successful project delivery is the hallmark of Jabit Soft, a leading software, website, and app development company. The company's approach to project delivery is based on a deep understanding of its clients' needs and a commitment to delivering high-quality products that meet or exceed their expectations. To achieve this, Jabit Soft employs a rigorous development process that emphasizes planning, communication, and attention to detail. The company's team of experienced developers, designers, and project managers work closely with clients to ensure that each project is delivered on time, within budget, and to the highest standards of quality. Jabit Soft also uses agile methodologies and cutting-edge development tools and platforms to ensure that it can adapt quickly to changing project requirements and deliver innovative solutions that meet the evolving needs of its clients. By prioritizing successful project delivery, Jabit Soft has built a reputation for excellence and established long-term relationships with its clients based on trust, reliability, and outstanding performance.

                </p>


                <div className={styles.ContainerInfoBoxes}>
               <div className={styles.ContainerItemBox}>
                    <h5>1</h5>
                    <h6>HUMAN RESOURCE</h6>
                  
               </div>
               <div className={styles.ContainerItemBox}>
                   <h5>3</h5>
                   <h6>QUALITY ANALYST</h6>
                   
               </div>
               <div className={styles.ContainerItemBox}>
                   <h5>10</h5>
                   <h6>DEVELOPER</h6>
               </div>
               <div className={styles.ContainerItemBox}>
                   <h5>1</h5>
                   <h6>SEO</h6>
               </div>
               <div className={styles.ContainerItemBox}>
                   <h5>1</h5>
                   <h6>UI UX DESIGNER</h6>
               </div>
               <div className={styles.ContainerItemBox}>
                   <h5>1</h5>
                   <h6>Business   Analyst</h6>
               </div>
              
           </div>
             </div>
            
           </div>
        </Container>
    </div>
  )
}

export default SectionFive