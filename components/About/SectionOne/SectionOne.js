import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SectionOne.module.scss'
function SectionOne() {
  return (
    <div className={styles.SectionOneWrapper}>
        <Container>
        <div className={styles.ContainerBoxLeftRds}>
              <div className={styles.CircleBoxContainer}>
              <div className={styles.TopCircle}>
                 <img src="/images/people.png" alt="Appev" />
              </div>
              </div>
              
             <div className={styles.ContentBox}>
                <h3>OUR DELIVERY</h3>
                <p>
                Successful project delivery is the hallmark of Jabit Soft, a leading software, website, and app development company. The company's approach to project delivery is based on a deep understanding of its clients' needs and a commitment to delivering high-quality products that meet or exceed their expectations. To achieve this, Jabit Soft employs a rigorous development process that emphasizes planning, communication, and attention to detail. The company's team of experienced developers, designers, and project managers work closely with clients to ensure that each project is delivered on time, within budget, and to the highest standards of quality. Jabit Soft also uses agile methodologies and cutting-edge development tools and platforms to ensure that it can adapt quickly to changing project requirements and deliver innovative solutions that meet the evolving needs of its clients. By prioritizing successful project delivery, Jabit Soft has built a reputation for excellence and established long-term relationships with its clients based on trust, reliability, and outstanding performance.

                </p>


                <div className={styles.ContainerInfoBoxes}>
               <div className={styles.ContainerItemBox}>
                    <h5>88%</h5>
                    <div>
                    <h6>EMPLOYEE RETENTION</h6>
                    <p>Most of the developers and engineers work almost more than 5+ years.</p>
                    </div>
                    
               </div>
               <div className={styles.ContainerItemBox}>
                   <h5>75%</h5>
                   <div>
                   <h6>CLIENT RETURN</h6>
                   <p>Our clients comes back with more project for their business solutions.</p>
                   </div>
               </div>
               <div className={styles.ContainerItemBox}>
                   <h5>94%</h5>
                   <div>
                   <h6>EXPERIENCED</h6>
                   <p>The developer and engineer in Jabit Soft are experienced in their respective field.</p>
                   </div>
               </div>
              
           </div>
             </div>
            
           </div>
        </Container>
    </div>
  )
}

export default SectionOne