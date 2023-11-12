import React from 'react'

import '../components/style/Userheader.css'
import UserHeader from '../components/UserHeader'

export default function Userhome(props) {
    return (
        <>
            <UserHeader setHeadProgress={props.setProgress}/>
            <div className='uh_pagename_cont'>
                <div>
                    <img width={200} src="https://media.licdn.com/dms/image/C510BAQExrSB2_ZAV8Q/company-logo_200_200/0/1556392812980?e=2147483647&v=beta&t=E5u8ih9wrtlcDx-si-9t5JacZMHegTFgvTf7JynYahQ" alt="" />
                </div>
                <div>
                    Simple way to place Order
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

                        <div style={{ paddingTop: '20px' }}>
                            <form action="/action_page.php">
                                <label for="fname">Search Order:</label>
                                <input className='set_search_input' type="text" id="fname" name="fname" />
                                <button className='set_btn_col'>Search</button>
                            </form>
                        </div>
                        <p style={{ color: '#fc911d' }}>Order Limit after that press Add To Cart button</p>
                        <div style={{ paddingTop: '20px' }}>
                            <form action="/action_page.php">
                                <label for="fname">Search by name:</label>
                                <input className='set_search_input' type="text" id="fname" name="fname" />
                                <button className='set_btn_col'>Find</button>
                            </form>
                        </div>
                    </div>

                    <div>
                        <table style={{ width: '100%', padding: '20px' }}>
                            <tr style={{ background: '#ede0b5' }}>
                                <th style={{ textAlign: 'start', padding: '15px' }}>Product</th>
                                <th style={{ textAlign: 'start', padding: '15px' }}>Name</th>
                                <th style={{ textAlign: 'start', padding: '15px' }}>MoQ</th>
                                <th style={{ textAlign: 'start', padding: '15px' }}>MaxQ</th>
                                <th style={{ textAlign: 'start', padding: '15px' }}>Quantity</th>
                                <th style={{ textAlign: 'start', padding: '15px' }}>View Product</th>
                            </tr>
                            <tr>
                                <td style={{ padding: '15px' }}>ST01</td>
                                <td style={{ padding: '15px' }}>Stencil For Mutilated Notes Calculation</td>
                                <td style={{ padding: '15px' }}>2</td>
                                <td style={{ padding: '15px' }}>5</td>
                                <td style={{ padding: '15px' }}> <input type="name" value='0' /> </td>
                                <td style={{ padding: '15px' }}><a href="">View Product</a></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '15px' }}>ST01</td>
                                <td style={{ padding: '15px' }}>Stencil For Mutilated Notes Calculation</td>
                                <td style={{ padding: '15px' }}>2</td>
                                <td style={{ padding: '15px' }}>5</td>
                                <td style={{ padding: '15px' }}> <input type="name" value='0' /> </td>
                                <td style={{ padding: '15px' }}><a href="">View Product</a></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '15px' }}>ST01</td>
                                <td style={{ padding: '15px' }}>Stencil For Mutilated Notes Calculation</td>
                                <td style={{ padding: '15px' }}>2</td>
                                <td style={{ padding: '15px' }}>5</td>
                                <td style={{ padding: '15px' }}> <input type="name" value='0' /> </td>
                                <td style={{ padding: '15px' }}><a href="">View Product</a></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '15px' }}>ST01</td>
                                <td style={{ padding: '15px' }}>Stencil For Mutilated Notes Calculation</td>
                                <td style={{ padding: '15px' }}>2</td>
                                <td style={{ padding: '15px' }}>5</td>
                                <td style={{ padding: '15px' }}> <input type="name" value='0' /> </td>
                                <td style={{ padding: '15px' }}><a href="">View Product</a></td>
                            </tr>
                            <tr>
                                <td style={{ padding: '15px' }}>ST01</td>
                                <td style={{ padding: '15px' }}>Stencil For Mutilated Notes Calculation</td>
                                <td style={{ padding: '15px' }}>2</td>
                                <td style={{ padding: '15px' }}>5</td>
                                <td style={{ padding: '15px' }}> <input type="name" value='0' /> </td>
                                <td style={{ padding: '15px' }}><a href="">View Product</a></td>
                            </tr>



                        </table>
                    </div>
                    <div className='User_datatable'>
                        <div><p>Counted for the next Day</p></div>
                        <button className='set_btn_col'>Add New Cart</button>

                    </div>
                </div>


            </section>










            <section className='u_footer'>
                Copyright © Paras Print
            </section>

        </>
    )
}
