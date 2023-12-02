import React from 'react'
import AdSidebar from './AdSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
    <AdSidebar/>
    <Outlet/>
        
    </>
  )
}

export default AdminLayout