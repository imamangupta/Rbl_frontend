import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'

export default function AddProduct() {
  return (
    <>
      <Header />

      <div style={{ display: "flex", justifyContent: 'center' }}>

        <SideNav />

        <div className='main_contant_side'>

          <div style={{ padding: '20px' }}>
            <h2>Add New Product</h2>

            <div>
              <div style={{display:'flex'}}>
                <div className='add_product_container'>
                  <b>General Details</b>
                  <div className='table_aline_center'>
                    <label for="fname">Product Id:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                  <div className='table_aline_center'>
                    <label style={{ color: 'blue' }} for="pet-select">Manufacture:</label>
                    <select className='set_select_tag' name="pets" id="pet-select">
                      <option value="">--Please choose an option--</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="hamster">Hamster</option>
                      <option value="parrot">Parrot</option>
                      <option value="spider">Spider</option>
                      <option value="goldfish">Goldfish</option>
                    </select>
                  </div>

                  <div className='table_aline_center'>
                    <label for="fname">Name:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                  <div className='table_aline_center display_sitting'>
                    <label for="fname">Details:</label>
                    <textarea className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                </div>

                <div className='add_product_container'>
                  <b>Stock</b>
                  <div className='table_aline_center'>
                    <label for="fname">Price:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                  <div className='table_aline_center'>
                    <label for="fname">MoQ:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>
                  <div className='table_aline_center'>
                    <label for="fname">Max:</label>
                    <input className='set_search_input' type="text" id="fname" name="fname" />
                  </div>

                  <div className='table_aline_center'>
                    <label style={{ color: 'blue' }} for="pet-select">Printer:</label>
                    <select className='set_select_tag' name="pets" id="pet-select">
                      <option value="">--Please choose an option--</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="hamster">Hamster</option>
                      <option value="parrot">Parrot</option>
                      <option value="spider">Spider</option>
                      <option value="goldfish">Goldfish</option>
                    </select>
                  </div>

                  <div className='table_aline_center'>
                    <label for="fname">Image:</label>
                    <input className='set_search_input' type="file" id="fname" name="fname" />
                  </div>

                 

              

                </div>
              
                

              </div>


              <div style={{    textAlign: 'end',    padding:' 1px 40px'}}>
                <button className='set_btn_col'>Submit</button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
