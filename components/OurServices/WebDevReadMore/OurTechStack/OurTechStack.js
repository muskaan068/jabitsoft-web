import { Grid } from '@mui/material';
import React from 'react'
import { Container } from 'react-bootstrap';
import styles from '../OurTechStack/OurTechStack.module.scss'

function OurTechStack() {
    const processItem=[
        {id:1,title:'Concept',img_url:'/images/concept.png'},
        {id:2,title:'Design',img_url:'/images/design.png'},
        {id:3,title:'Coding',img_url:'/images/coding.png'},
        {id:4,title:'Testing',img_url:'/images/testing.png'},
        {id:5,title:'Launch',img_url:'/images/launch.png'},
    ]
    const techItem=[
        {id:1,title:'C#',img_url:'/images/c-sharp.png'},
        {id:2,title:'Angular',img_url:'/images/angular.png'},
        {id:3,title:'Html',img_url:'/images/html.png'},
        {id:4,title:'Css',img_url:'/images/css.png'},
        {id:5,title:'Nodejs',img_url:'/images/nodejs.png'},
        {id:5,title:'Reactjs',img_url:'/images/reactjs.png'},
        {id:6,title:'Wordpress',img_url:'/images/wp.png'},
        {id:7,title:'Wordpress1',img_url:'/images/wp1.png'},
        {id:8,title:'Wordpress2',img_url:'/images/wp2.png'},
        {id:9,title:'Bootstrap',img_url:'/images/bootstrap.png'},

    ]
  return (
    <div className={styles.OurTechStackWrapper}>
            <Container>
                <div className={styles.ContainerBox}>
                <div className={styles.ItemContainer}>
                <div className={styles.ItemBoxContainer}>
                    {processItem && processItem.map((item,index)=>(
                        <div className={styles.ItemBox} key={index}>
                        <img src={item && item.img_url} alt={item && item.title}/>
                        <h4>{item && item.title}</h4>
                    </div>
                    ))}
                    
                </div>
                </div>
               
                <div className={styles.ContentBoxContainer}>
                    <h3>OUR TECH STACKS</h3>
                    <p>Website development is like constructing a dream home. Content is the base of website pages and we embed it with HTML. Website is decorated with style sheets and validation is done through script language.</p>
                </div>
                
                <div className={styles.BottomItemBox}>
                    <div className={styles.TechItem}>
                            <img src={techItem  && techItem[0].img_url} alt={techItem  && techItem[0].title} />
                            <img src={techItem  && techItem[1].img_url} alt={techItem  && techItem[0].title} />
                            <img src={techItem  && techItem[2].img_url} alt={techItem  && techItem[0].title} />
                            <img src={techItem  && techItem[3].img_url} alt={techItem  && techItem[0].title} />
                            <img src={techItem  && techItem[4].img_url} alt={techItem  && techItem[0].title} />
                            <img src={techItem  && techItem[5].img_url} alt={techItem  && techItem[0].title} />
                            <img src={techItem  && techItem[6].img_url} alt={techItem  && techItem[0].title} />
                            <img src={techItem  && techItem[7].img_url} alt={techItem  && techItem[0].title} />
                            <img src={techItem  && techItem[8].img_url} alt={techItem  && techItem[0].title} />
                            <img src={techItem  && techItem[9].img_url} alt={techItem  && techItem[0].title} />
                    </div>
                   
               
                    
                </div>
                </div>
               
            </Container>
    </div>
  )
}

export default OurTechStack