import React from "react";
import NewBlog from "../../../admin-components/Blogs/NewPost";
import { Layout } from "../../../admin-components/Layout/Layout";

function post() {
  return (
    <div>
      <Layout>
        <NewBlog />
      </Layout>
    </div>
  );
}

export default post;
