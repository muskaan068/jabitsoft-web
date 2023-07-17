import React from 'react'
import parse from 'html-react-parser';
function LeftSideBlogContent({
    styles,details
}) {
  return (
     <div className={styles.LeftSideContent} style={{width:'100%'}}>
                  <div dangerouslySetInnerHTML={{__html:details && details.description}} />
                  
    </div>
  )
}

export default LeftSideBlogContent