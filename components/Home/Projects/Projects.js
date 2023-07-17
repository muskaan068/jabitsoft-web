import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styles from '../Projects/Project.module.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';


function Projects({PortfolioData}) {
  const matches = useMediaQuery("(max-width:992px)");
  const router=useRouter();
  const handleViewProject=(projectItem)=>{
      if(projectItem){
        const{pid,title}=projectItem;
        router.push({pathname:'/portfolio/portfolio-details',query:{pid:pid,project_name:title}})
      }
    }

    // Handle Read more
    const handleReadMore=()=>{
        router.push({pathname:'/portfolio/'});
    }

    useEffect(() => {
        AOS.init(
            {
                offset: 200,
                duration: 600,
                easing: 'ease-in',
                delay: 100,
              }
        );
      }, [])
  return (
    <div className={styles.ProjectsWrapper}>
        <Container>
            <div className={styles.ContainerBox}>
                {PortfolioData && Array.isArray(PortfolioData) &&  PortfolioData.slice(0,5).map((item,index)=>(
                     <div className={styles.ProjectsItem} data-aos={matches?"":"fade-up"}>
                     <img src={item && item?.full_url_path!==null ? item?.full_url_path : "/images/defaultImg.png"} alt='p1' />
                     <div className={styles.ProjectInfo}>
                         <h4>{item && item.title}</h4>
                         <span className={styles.HrLine}></span>
                         <p>{item && item.description.length>40 ? item.description.substr(0,40)+"..." : item.description}</p>
                         <button onClick={(e)=>handleViewProject(item && item)}>View Case Study</button>
                     </div>
                 </div>
                ))}
               
              
                <div className={styles.ButtonContainer}>
                    <button onClick={handleReadMore}>Read All</button>
                </div>
            </div>
            {/* Responsive Project Item */}
            <div className={styles.ResponsiveContainerBox}>
            {PortfolioData && Array.isArray(PortfolioData) &&  PortfolioData.slice(0,5).map((item,index)=>(
                <div className={styles.ProjectsItem} data-aos={matches?"":"fade-up"}>
                    <div className={styles.ProjectInfo}>
                    <h4>{item && item.title}</h4>
                        <span className={styles.HrLine}></span>
                        <p>{item && item.description.length>40 ? item.description.substr(0,40)+"..." : item.description}</p>
                         <button onClick={(e)=>handleViewProject(item && item)}>View Case Study</button>
                    </div>
                    <img src="/images/p1.png" alt='p1' />
                   
                </div>
               ))}
                <div className={styles.ButtonContainer}>
                    <button>Read All</button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Projects