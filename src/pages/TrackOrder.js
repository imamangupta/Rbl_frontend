import React from 'react'
import UserHeader from '../components/UserHeader'
import { Link } from 'react-router-dom'

export default function TrackOrder(props) {
    return (
        <>

            <UserHeader setHeadProgress={props.setProgress}/>
            <div className='uh_pagename_cont'>
                <div>
                    <img width={200} src="https://media.licdn.com/dms/image/C510BAQExrSB2_ZAV8Q/company-logo_200_200/0/1556392812980?e=2147483647&v=beta&t=E5u8ih9wrtlcDx-si-9t5JacZMHegTFgvTf7JynYahQ" alt="" />
                </div>
                <div>
                    Track Order Status Online
                </div>

            </div>
            <div style={{    display: 'flex',    justifyContent: 'space-between'   , padding:' 0px 16px'}}            >
                
                <div>
                    <p>You are logged in as RBL112</p>

                </div>
                <div style={{    display: 'flex',    alignItems: 'center'}}>
                    <a href="">Logout</a>
                </div>
            </div>




            
            <section style={{ display: 'flex', justifyContent: 'center' ,marginBottom:'30px'}}>



                <div style={{ border: '1px solid #d7d7d7' }} className='main_contant_side'>

                    <div style={{ padding: '20px' }}>

                       
                        <p style={{ color: '#fc911d' }}>Order History</p>
                        
                    </div>

                    <div>
                        <table style={{ width: '100%', padding: '20px' }}>
                            <tr style={{ background: '#ede0b5' }}>
                                <th style={{ textAlign: 'start', padding: '15px' }}>Order Id</th>
                                <th style={{ textAlign: 'start', padding: '15px' }}>Order Date</th>
                                <th style={{ textAlign: 'start', padding: '15px' }}>Status</th>
                                <th style={{ textAlign: 'start', padding: '15px' }}>Status Date</th>
                                <th style={{ textAlign: 'start', padding: '15px' }}>Details</th>
                        
                            </tr>
                            <tr>
                                <td style={{ padding: '15px' }}>PRP2329490-RBL112</td>
                                <td style={{ padding: '15px' }}>08/08/2023 06:18:27</td>
                                <td style={{ padding: '15px' }}>Dispatched</td>
                                <td style={{ padding: '15px' }}>08/08/2023 06:18:27</td>
                                <td style={{ padding: '15px' }}><Link to="/ordertrackview">View Details</Link></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '15px' }}>PRP2329490-RBL112</td>
                                <td style={{ padding: '15px' }}>08/08/2023 06:18:27</td>
                                <td style={{ padding: '15px' }}>Dispatched</td>
                                <td style={{ padding: '15px' }}>08/08/2023 06:18:27</td>
                                <td style={{ padding: '15px' }}><Link to="/ordertrackview">View Details</Link></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '15px' }}>PRP2329490-RBL112</td>
                                <td style={{ padding: '15px' }}>08/08/2023 06:18:27</td>
                                <td style={{ padding: '15px' }}>Dispatched</td>
                                <td style={{ padding: '15px' }}>08/08/2023 06:18:27</td>
                                <td style={{ padding: '15px' }}><Link to="/ordertrackview">View Details</Link></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '15px' }}>PRP2329490-RBL112</td>
                                <td style={{ padding: '15px' }}>08/08/2023 06:18:27</td>
                                <td style={{ padding: '15px' }}>Dispatched</td>
                                <td style={{ padding: '15px' }}>08/08/2023 06:18:27</td>
                                <td style={{ padding: '15px' }}><Link to="/ordertrackview">View Details</Link></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '15px' }}>PRP2329490-RBL112</td>
                                <td style={{ padding: '15px' }}>08/08/2023 06:18:27</td>
                                <td style={{ padding: '15px' }}>Dispatched</td>
                                <td style={{ padding: '15px' }}>08/08/2023 06:18:27</td>
                                <td style={{ padding: '15px' }}><Link to="/ordertrackview">View Details</Link></td>
                            </tr>
                           

                        </table>
                    </div>
                   
                </div>


            </section>















       
            <section className='u_footer'>
                Copyright © Paras Print
            </section>
        </>
    )
}
