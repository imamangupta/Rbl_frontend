import React from 'react'

export default function AdminHomeContant() {
    return (
        <>
            <div className='main_contant_side'>

                <div style={{ padding: '20px' }}>
                    <label style={{ color: 'blue' }} for="pet-select">Filter Orders:</label>

                    <select className='set_select_tag' name="pets" id="pet-select">
                        <option value="">--Please choose an option--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select>
                    <div style={{ paddingTop: '20px' }}>
                        <form action="/action_page.php">
                            <label for="fname">Search Order:</label>
                            <input className='set_search_input' type="text" id="fname" name="fname" />
                            <button className='set_btn_col'>Search</button>
                        </form>
                    </div>
                </div>

                <div>
                    <table style={{width:'100%',padding:'20px'}}>
                        <tr style={{background:'#ede0b5'}}>
                            <th style={{textAlign:'start',padding:'15px'}}>Order Id</th>
                            <th style={{textAlign:'start',padding:'15px'}}>Date</th>
                            <th style={{textAlign:'start',padding:'15px'}}>Go Code</th>
                            <th style={{textAlign:'start',padding:'15px'}}>Status</th>
                            <th style={{textAlign:'start',padding:'15px'}}>Details</th>
                        </tr>
                        <tr>
                            <td style={{padding:'15px'}}>PR234234323323 </td>
                            <td style={{padding:'15px'}}>15/10/23 6:17:29 AM</td>
                            <td style={{padding:'15px'}}>RBL155</td>
                            <td style={{padding:'15px'}}>Aprove</td>
                            <td style={{padding:'15px'}}><a href="">View Details</a></td>
                        </tr>
                       
                       
                     
                     
                        <tr>
                            <td style={{padding:'15px'}}>PR234234323323 </td>
                            <td style={{padding:'15px'}}>15/10/23 6:17:29 AM</td>
                            <td style={{padding:'15px'}}>RBL155</td>
                            <td style={{padding:'15px'}}>Aprove</td>
                            <td style={{padding:'15px'}}><a href="">View Details</a></td>
                        </tr>
                       
                    </table>
                </div>
            </div>
        </>
    )
}
