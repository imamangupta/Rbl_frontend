import React from 'react'
import Header from '../components/Header'
import AdminHomeContant from '../components/AdminHomeContant'
import SideNav from '../components/SideNav'

export default function AdminHome() {
  return (
    <>

      <Header />

      <div style={{ display: "flex", justifyContent: 'center' }}>

        <SideNav />
        <AdminHomeContant/>

      </div>

    </>
  )
}
