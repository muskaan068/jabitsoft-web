import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './CommonBlog.module.scss'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid } from '@mui/material';
import { endPoint, envUrl } from '../../../utils/Factory';
import axios from 'axios';
import moment from 'moment';
import { useRouter } from 'next/router';
import { Empty } from 'antd';

function CommonBlog() {
    const router=useRouter();
    const baseUrl=envUrl.baseUrl;
    const [value, setValue] = useState(1);
    const [blogCategory,setBlogCategory]=useState([]);
    const [blogListByCat,setBlogListByCat]=useState([]);
    const [selectCatId, setSelectedCatId] = useState(1);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const blogReadmore=(blogId)=>{
        router.push({pathname:"/blogs/blog-details",query:{blog_id:blogId,type:'read_deatils'}})
    }

    const loadCategoryList=async()=>{
        try {
                const url=`${envUrl.baseUrl}${endPoint.blogCategory}`
            await axios.get(url).then((response)=>{
                console.log(response)
                if(response && response.data.status===200 && response.data.statusType===1){
                  setBlogCategory(response && response.data.result);
                   
                }
               
                //console.log(response);
              }).catch((error)=>{
                console.log(error);
                 
              });
        } catch (error) {
           console.log(error);
          
        }
    }

    const handleBlogTab=(categoryId)=>{
        setSelectedCatId(categoryId)
        console.log(categoryId)
    }

    const loadBlogByCategoryList=async()=>{
        try {
                const url=`${envUrl.baseUrl}${endPoint.blogListByCategory}`
            await axios.post(url,{categoryId:selectCatId}).then((response)=>{
                if(response && response.data.status===200 && response.data.statusType===1){
                    setBlogListByCat(response && response.data.result.blogList);
                }
               
                console.log(response);
              }).catch((error)=>{
                console.log(error)
                  
              });
        } catch (error) {
           console.log(error)
            
        }
      }


    useEffect(()=>{
        loadCategoryList();
      },[])
      // Dependency of blog list by category
      useEffect(()=>{
        loadBlogByCategoryList();
      },[selectCatId])

  return (
    <div className={styles.CommonBlogWrapper}>
      <Container>
      <div className={styles.BlogContentBox}>
                    <div className={styles.BlogTabCaontainer} id="BlogItem">
                    <TabContext value={value}>
                        <Box >
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {/* <Tab label="FEATURED" value="FEATURED" />
                            <Tab label="TECHNOLOGIES" value="TECHNOLOGIES" />
                            <Tab label="BUSINESS" value="BUSINESS" />
                            <Tab label="OTHERS" value="OTHERS" /> */}
                            {blogCategory && blogCategory.map((item,index)=>(
                                <Tab label={item && item.name} value={item && item.id} onClick={(e)=>handleBlogTab(item && item.id)}  key={index} />
                            ))}
                            
                        </TabList>
                        </Box>
                        {blogCategory && blogCategory.map((item,index)=>(
                        <TabPanel value={item && item.id} key={index}>
                            <div className={styles.BlogListContainer}>
                            <Grid container direction={"row"} spacing={2}>
                           
                            {blogListByCat && blogListByCat.length>0 ? (
                                <>
                                {blogListByCat && blogListByCat.map((subitem,i)=>(
                                <Grid item md={4} key={i}>
                                <div className={styles.BlogItem} onClick={(e)=>blogReadmore(subitem && subitem.id)} >
                                <img src={`${baseUrl}${subitem.cover_img_path}/${subitem.cover_img}`} alt='img1' />
                                <div className={styles.BlogContent}>
                                        <div className={styles.BlogTitle}>
                                            <h3>{subitem && subitem.title.length>80 ? subitem.title.substr(0,80)+"..." : subitem.title}</h3>
                                        </div>
                                        <div className={styles.BlogBottom}>
                                            <button onClick={(e)=>blogReadmore(subitem && subitem.id)}>Read Now</button>
                                            <div className={styles.BlogDateBox}>
                                                <img src="/images/calender.png" alt='calender'  />
                                                <span>{moment(subitem && subitem.created_on).format("Do MM YYYY")}</span>
                                            </div>
                                            
                                        </div>
                                </div>
                                </div>
                                </Grid>
                                ))}
                                </>
                            ) : (
                                <div style={{width:'100%', padding:"10px",display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Empty />
                                </div>
                            )}
                           
                            </Grid>
                               
                                
                                
                            </div>
                        </TabPanel>
                        ))}
                        
                    </TabContext>
                    </div>
            </div>
      </Container>
    </div>
  )
}

export default CommonBlog