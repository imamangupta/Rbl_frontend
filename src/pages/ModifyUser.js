import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
export default function ModifyUser() {
  return (
    <>
    <Header />

    <div style={{ display: "flex", justifyContent: 'center' }}>

      <SideNav />

      <div className='main_contant_side'>

        <div>
          ModifyBranch

        </div>
      </div>
    </div>
  </>
  )
}
