import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
export default function ModifyUser(props) {
  return (
    <>
    <Header />

    <div style={{ display: "flex", justifyContent: 'center' }}>

      <SideNav   setHeadProgress={props.setProgress}/>

      <div className='main_contant_side'>

        <div>
          ModifyBranch

        </div>
      </div>
    </div>
  </>
  )
}
