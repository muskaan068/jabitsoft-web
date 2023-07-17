
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './SectionFour.module.scss'
import toolsData from '../../../utils/toos';
function SectionFour({portfolioData}) {
 // console.log(portfolioData)
  const[toolDataState,setToolDataState]=useState([toolsData])
   const filterData=toolDataState && toolDataState[0]?.toolsImgData?.filter((item)=>portfolioData && portfolioData[0]?.portfolioTools?.map(item=>item?.tool_name).includes(item.name));
    return (
      <div className={styles.SectionFourWrapper}>
          <Container>
          <div className={styles.ContainerBoxLeftRds}>
               <div className={styles.ContentBox}>
                    <h3>TOOLS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu. </p>
                    <div className={styles.OurToolsLogoContainer}>
                      {filterData && filterData?.map((item,index)=>(
                        <div className={styles.ImageBox}>
                           <img src={item && item?.selectedImgUrl} alt="t1" key={index} />
                         </div>
                      ))}
                   
                   
                </div>
               </div>
               
              
             </div>
             
          </Container>
      </div>
    )
  }
  
  export default SectionFour