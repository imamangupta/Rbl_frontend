import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'

export default function ModifyBranch() {
  return (
    <>
    <Header />

    <div style={{ display: "flex", justifyContent: 'center' }}>

      <SideNav />

      <div className='main_contant_side'>

          <div style={{ padding: '20px' }}>
            <h2>Modify Branch</h2>

            <div>
              <div style={{ display: 'flex' }}>
                <div className='add_product_container'>
                  <b>General Details</b>
                  <div className='table_aline_center'>
                    <label for="fname">Branch Id:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>


                  <div className='table_aline_center'>
                    <label for="fname">Branch Name:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                 
                  <div className='table_aline_center display_sitting'>
                    <label for="fname">address line1:</label>
                    <textarea className='set_search_input' type="text" id="fname" name="fname" />
                  </div>
                  <div className='table_aline_center display_sitting'>
                    <label for="fname">address line2:</label>
                    <textarea className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                 

                </div>
                <div className='add_product_container'>
                  <b>Other</b>
                  <div className='table_aline_center'>
                    <label for="fname">City:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>


                  <div className='table_aline_center'>
                    <label for="fname">State:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                  <div className='table_aline_center'>
                    <label for="fname">Pincode:</label>
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
