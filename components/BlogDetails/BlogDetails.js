import { Grid } from '@mui/material';
import React from 'react'
import { Container } from 'react-bootstrap';
import styles from './BlogDetails.module.scss'
import LeftSideBlogContent from './LeftSideBlogContent';
import RightSideBlogItems from './RightSideBlogItems';

function BlogDetailsComponent({details,blogList}) {

  return (
    <div className={styles.BlogDeatilsWrapper}>
        <Container>
        <div className={styles.ContainerBox}>
        <Grid container direction={"row"} spacing={4}>
              <Grid item sm={8} md={8} lg={8}>
                <LeftSideBlogContent styles={styles} details={details} />
              </Grid>
              <Grid item sm={4} md={4} lg={4}>
                <RightSideBlogItems styles={styles} blogList={blogList} />
              </Grid>

          </Grid>
        </div>
          
        </Container>
    </div>
  )
}

export default BlogDetailsComponent