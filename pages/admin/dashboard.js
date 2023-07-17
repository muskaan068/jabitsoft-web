import React from 'react'
import Dashboard from '../../admin-components/Dashboard/Dashboard'
import { Layout } from '../../admin-components/Layout/Layout'

function dashboard() {
  return (
    <div>
        <Layout>
            <Dashboard />
        </Layout>
    </div>
  )
}

export default dashboard