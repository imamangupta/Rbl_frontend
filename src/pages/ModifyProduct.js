import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'

export default function ModifyProduct(props) {
  return (
    <>
      <Header />

      <div style={{ display: "flex", justifyContent: 'center' }}>

        <SideNav  setHeadProgress={props.setProgress} />

        <div className='main_contant_side'>

          <div style={{ padding: '20px' }}>
            <h2>Modify Product</h2>

            <div className='mp_class_container'>
              <div>
                <div  style={{padding:'15px'}}>
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

                <div  style={{padding:'15px'}}>
                  <label style={{ color: 'blue' }} for="pet-select">Product Id:</label>
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
              </div>
              <div>
                <button className='set_btn_col'>Edit</button>
                <button className='set_btn_col'>Delete</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
