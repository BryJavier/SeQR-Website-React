import React from 'react'
import './../assets/css/Layout.css'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="content w-full m-4 p-4 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout