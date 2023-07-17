import React from 'react'
import { Layout } from '../../../admin-components/Layout/Layout';
import PortfolioList from '../../../admin-components/Portfolio/PortfolioList';

function projectlist() {
  return (
    <div>
        <Layout>
            <PortfolioList />
        </Layout>
    </div>
  )
}

export default projectlist;