import React from "react";
//import Dashboard from '../../admin-components/Dashboard/Dashboard'
import { Layout } from "../../admin-components/Layout/Layout";
import Inquiries from "../../admin-components/Inquiries/Inquiries";

function dashboard() {
  return (
    <div>
      <Layout>
        <Inquiries></Inquiries>
      </Layout>
    </div>
  );
}

export default dashboard;
