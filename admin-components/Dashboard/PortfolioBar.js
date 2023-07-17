import { useRouter } from 'next/router'
import React from 'react'

function PortfolioBar({styles}) {
  const router=useRouter();
  const addPortfolioHandle=()=>{
    router.push({pathname:'/admin/portfolio/project',query:{type:'new'}})
  }
  const listPortfolioHandle=()=>{
    router.push({pathname:'/admin/portfolio/project-list'})
  }
  return (
    <div className={styles.PortfolioBarConatiner}>
         <div className={styles.Items} onClick={addPortfolioHandle}>
            <img src='/images/admin/add.png' alt='add' />
            <h5>New</h5>
        </div>
        <div className={styles.Items}  onClick={listPortfolioHandle}>
        <img src='/images/admin/edit.png' alt='edit' />
            <h5>Edit</h5>
        </div>

    </div>
  )
}

export default PortfolioBar