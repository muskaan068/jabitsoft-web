import { useRouter } from 'next/router'
import React from 'react'

function BlogBar({styles}) {
    const router=useRouter();
    const addNewPost=()=>{
        router.push({pathname:'blog/post',query:{type:'new'}})
    }
    const getPostList=()=>{
        router.push({pathname:'blog/post-list'})
    }
  return (
    <div className={styles.BlogBarContainer} >
        <div className={styles.Items} onClick={addNewPost}>
            <img src='/images/admin/add.png' alt='add' />
            <h5>New</h5>
        </div>
        <div className={styles.Items} onClick={getPostList}>
        <img src='/images/admin/edit.png' alt='edit' />
            <h5>Edit</h5>
        </div>

    </div>
  )
}

export default BlogBar