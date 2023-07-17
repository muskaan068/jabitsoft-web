import Head from 'next/head'
import React from 'react'
import { Layout } from '../../admin-components/Layout/Layout'
import Login from '../../admin-components/Login/Login'

function index() {
  return (

    <div>
      <Head>
        <title>Admin - Login</title>
      </Head>
        <Login />
    </div>
  )
}

export default index