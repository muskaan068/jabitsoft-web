import { useRouter } from 'next/router';
import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './SectionOne.module.scss'
function SectionOne({item,index}) {
  const router=useRouter();
  const handleViewProject=(projectItem)=>{
      if(projectItem){
        const{pid,title}=projectItem;
        router.push({pathname:'/portfolio/portfolio-details',query:{pid:pid,project_name:title}})
      }
      //console.log("llllllll",projectItem)
  }
  return (
    <div className={index % 2 ===0 ? styles.SectionOneWrapper : styles.SectionTwoWrapper }>
        <Container>
        <div className={styles.ContainerBoxLeftRds}>
             
              
             <div className={styles.ContentBox}>
                <h3>{item && item.title}</h3>
                <p>
                {item && item.description}
                </p>


                <div className={styles.ContainerInfoBoxes}>
                    <img src={item && item.full_url_path===null? "/images/defaultImg.png" : item.full_url_path} alt={"img"+index} />
                 </div>
                <div className={styles.ButtonContainer}>
                  <button onClick={(e)=>handleViewProject(item && item)}>View Project</button>
                </div>
             </div>
            
           </div>
           
        </Container>
    </div>
  )
}

export default SectionOne