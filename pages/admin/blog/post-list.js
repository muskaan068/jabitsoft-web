import React from 'react'
import PostList from '../../../admin-components/Blogs/PostList';
import { Layout } from '../../../admin-components/Layout/Layout';

function postlist() {
  return (
    <div>
        <Layout>
            <PostList />
        </Layout>
    </div>
  )
}

export default postlist; 