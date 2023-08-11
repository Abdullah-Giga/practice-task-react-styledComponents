import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../Containers/Layout'

export default function PrivateRoutes () {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
