import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'

export default function AddUser(props) {


  return (
    <>
      <Header />

      <div style={{ display: "flex", justifyContent: 'center' }}>

        <SideNav  setHeadProgress={props.setProgress}/>

        <div className='main_contant_side'>

          <div style={{ padding: '20px' }}>
            <h2>Add New User</h2>

            <div>
              <div style={{ display: 'flex' }}>
                <div className='add_product_container'>
                  <b>General Details</b>
                  <div className='table_aline_center'>
                    <label for="fname">User Id:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>


                  <div className='table_aline_center'>
                    <label for="fname">Password:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                  <div className='table_aline_center'>
                    <label for="fname">Name:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>
                  <div className='table_aline_center display_sitting'>
                    <label for="fname">address:</label>
                    <textarea className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                  <div className='table_aline_center'>
                    <label for="fname">Email:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>
                  <div className='table_aline_center'>
                    <label for="fname">Phone:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>
                  <div className='table_aline_center'>
                    <label for="fname">Aprove Id:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                </div>
                <div className='add_product_container'>
                  <b>Other</b>
                  <div className='table_aline_center'>
                    <label for="fname">Branch Code:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>


                  <div className='table_aline_center'>
                    <label for="fname">Emp Code:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                  <div className='table_aline_center'>
                    <label for="fname">Cost Center:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>
                  <div className='table_aline_center display_sitting'>
                    <label for="fname">Security Qu:</label>
                    <textarea className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                  <div className='table_aline_center'>
                    <label for="fname">Answer:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>
                  <div className='table_aline_center'>
                    <label for="fname">Phone:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>
                 

                </div>


              </div>


              <div style={{ textAlign: 'end', padding: ' 1px 40px' }}>
                <button className='set_btn_col'>Submit</button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
