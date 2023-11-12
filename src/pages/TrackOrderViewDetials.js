import React from 'react'
import UserHeader from '../components/UserHeader'

export default function TrackOrderViewDetials() {
  return (
    <>

            <UserHeader />
            <div className='uh_pagename_cont'>
                <div>
                    <img width={200} src="https://media.licdn.com/dms/image/C510BAQExrSB2_ZAV8Q/company-logo_200_200/0/1556392812980?e=2147483647&v=beta&t=E5u8ih9wrtlcDx-si-9t5JacZMHegTFgvTf7JynYahQ" alt="" />
                </div>
                <div>
                   Track Order View Details
                </div>

            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: ' 0px 16px' }}            >

                <div>
                    <p>You are logged in as RBL112</p>

                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="">Logout</a>
                </div>
            </div>



            <section className='c_container'>
                <div className='c_container_inner'>
                    <div className='c_c_header'>
                        Order ID : 23432432432
                    </div>
                    <div style={{display: 'flex',    justifyContent: 'center'}}>
                        <table style={{width:'80%'}}>
                            <tr>
                                <th style={{textAlign:'start'}}>Product Id</th>
                                <th style={{textAlign:'start'}}>Name</th>
                                <th style={{textAlign:'start'}}>Qty</th>

                            </tr>
                            <tr>
                                <td>EN19</td>
                                <td>White Envelope A4 plain</td>
                                <td>500</td>
                               
                            </tr>
                            <tr>
                                <td>EN19</td>
                                <td>White Envelope A4 plain</td>
                                <td>500</td>
                               
                            </tr>
                            <tr>
                                <td>EN19</td>
                                <td>White Envelope A4 plain</td>
                                <td>500</td>
                               
                            </tr>
                            <tr>
                                <td>EN19</td>
                                <td>White Envelope A4 plain</td>
                                <td>500</td>
                               
                            </tr>
                           
                        
                        </table>

                    </div>
                </div>
            </section>



            <section className='c_container'>
                <div className='c_container_inner'>
                    <div className='c_c_header'>
                        Other Details
                    </div>
                    <div style={{display: 'flex',    justifyContent: 'center'}}>
                        <table style={{width:'80%'}}>
                            <tr>
                                <th style={{textAlign:'start'}}>Total Items</th>
                                <th style={{textAlign:'start'}}>2</th>
                               

                            </tr>
                            <tr>
                                <td>Delivery Address</td>
                                <td>6-3-865 Ground Floor, My Home Jupaliy.. Opp Green park hotel Green lands Hyderabad Telangana, 500016</td>
                               
                               
                            </tr>
                            <tr>
                                <td>Dispatch Details</td>
                                <td>6-3-865 Ground Floor, My Home Jupaliy.. Opp Green park hotel Green lands Hyderabad Telangana, 500016</td>
                               
                               
                            </tr>
                            <tr>
                                <td>AwB No</td>
                                <td>None</td>
                            </tr>
                            <tr>
                                <td>Challan No</td>
                                <td>None</td>
                            </tr>
                            <tr>
                                <td>Attached Document</td>
                                <td>None</td>
                            </tr>
                           
                           
                        
                        </table>

                    </div>
                </div>
            </section>












            <section >
                page
            </section>
            <section className='u_footer'>
                Copyright © Paras Print
            </section>
        </>
  )
}
