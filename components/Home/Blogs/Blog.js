import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from 'react-bootstrap';
import styles from '../Blogs/Blog.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Grid } from '@mui/material';
import BlogSlider from './BlogSlider';
import { useRouter } from 'next/router';
import axios from 'axios';
import { endPoint, envUrl } from '../../../utils/Factory';
import moment from 'moment';
import { Empty } from 'antd';


function Blog({blogList}) {
    const baseUrl=envUrl.baseUrl;
    const router=useRouter();
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
    <div className={styles.BlogWrapper} >
        <Container>
            <div className={styles.ContainerBox}>
            <div className={styles.InfoText}>
                   <h1>BLOGS</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                   incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu. </p>
               </div>
            </div>
            <div className={styles.BlogSliderBoxContainer}>
                <h4>LATEST BLOG</h4>
                <BlogSlider blogList={blogList} />
            </div>
            <div className={styles.BlogContentBox}>
                    <div className={styles.BlogTabCaontainer} id="BlogItem">
                    <TabContext value={value}>
                        <Box >
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {blogCategory && blogCategory.map((item,index)=>(
                                <Tab label={item && item.name} value={item && item.id} onClick={(e)=>handleBlogTab(item && item.id)}  key={index} />
                            ))}
                            {/* <Tab label="TECHNOLOGIES" value="TECHNOLOGIES" />
                            <Tab label="BUSINESS" value="BUSINESS" />
                            <Tab label="OTHERS" value="OTHERS" /> */}
                            {/* <Tab label="SEE ALL" value="ALL"> */}
                             
                            <button value={"00"} className={styles.BlogAllButton}>SEE ALL <img src="/images/arrow.png" style={{width:'45px',height:'45px',marginLeft:'10px'}} alt='arrow' /> </button>
                   
                        </TabList>
                       
                        </Box>
                        {blogCategory && blogCategory.map((item,index)=>(
                            <TabPanel value={item && item.id} key={index}>
                            <div className={styles.BlogListContainer}>
                            <Grid container direction={"row"} spacing={2}>
                                { blogListByCat && blogListByCat.length>0 ? (
                                    <>
                                    {blogListByCat && blogListByCat.map((item,i)=>(
                                <Grid item md={4} key={i}>
                                <div className={styles.BlogItem} >
                                <img src={`${baseUrl}${item.cover_img_path}/${item.cover_img}`} alt='img1' />
                                <div className={styles.BlogContent}>
                                        <div className={styles.BlogTitle}>
                                            <h3>{item && item.title.length>80 ? item.title.substr(0,80)+"..." : item.title}</h3>
                                        </div>
                                        <div className={styles.BlogBottom}>
                                            <button onClick={(e)=>blogReadmore(item && item.id)}>Read Now</button>
                                            <div className={styles.BlogDateBox}>
                                                <img src="/images/calender.png" alt='calender'  />
                                                <span>{moment(item && item.created_on).format("Do MM YYYY")} </span>
                                            </div>
                                            
                                        </div>
                                </div>
                                </div>
                                </Grid>
                                ))}
                                    </>
                                ) : (
                                    <div style={{width:'100%', padding:"50px",display:'flex',justifyContent:'center',alignItems:'center'}}>
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
            {/* //Responsive Blog */}
            <div className={styles.RespnsiveBlogContentBox} id="BlogTab">
            <div className={styles.BlogTabCaontainer} id="BlogItem">
                    <TabContext value={value}>
                        <Box >
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {blogCategory && blogCategory.map((item,index)=>(
                                <Tab label={item && item.name} value={item && item.id} onClick={(e)=>handleBlogTab(item && item.id)}  key={index} />
                            ))}
                            {/* <Tab label="TECHNOLOGIES" value="2" />
                            <Tab label="BUSINESS" value="3" />
                            <Tab label="OTHERS" value="4" /> */}
                            {/* <Tab label="SEE ALL" value="ALL">  */}
                           
                        </TabList>
                        </Box>
                        {blogCategory && blogCategory.map((item,index)=>(
                            <TabPanel value={item && item.id} key={index}>
                            <div className={styles.BlogListContainer}>
                            <Grid container direction={"row"} spacing={2}>
                                {blogListByCat && blogListByCat.map((item,i)=>(
                                <Grid item xs={6} sm={6} md={4} lg={4} key={i}>
                                <div className={styles.BlogItem} style={{background:`url(${baseUrl}${item.cover_img_path}/${item.cover_img})`,backgroundRepeat:'no-repeat',objectFit:'cover'}} >
                                {/* <img src="/images/bl-bg.png" alt='img1' /> */}
                                <div className={styles.BlogContent}>
                                        <div className={styles.BlogTitle}>
                                            <h3>{item && item.title.length>80 ? item.title.substr(0,80)+"..." : item.title}</h3>
                                        </div>
                                        <div className={styles.BlogBottom}>
                                            <button  onClick={(e)=>blogReadmore(item && item.id)}>Read Now</button>
                                            <div className={styles.BlogDateBox}>
                                                <img src="/images/calender.png" alt='calender'  />
                                                <span>{moment(item && item.created_on).format("Do MM YYYY")} </span>
                                            </div>
                                            
                                        </div>
                                </div>
                                </div>
                                </Grid>
                                ))}
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

export default Blog