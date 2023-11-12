import React from 'react'
import Header from '../components/Header'
import AdminHomeContant from '../components/AdminHomeContant'
import SideNav from '../components/SideNav'

export default function AdminHome(props) {
  return (
    <>

      <Header />

      <div style={{ display: "flex", justifyContent: 'center' }}>

        <SideNav setHeadProgress={props.setProgress} />
        <AdminHomeContant/>

      </div>

    </>
  )
}
