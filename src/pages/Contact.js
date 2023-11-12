import React from 'react'
import UserHeader from '../components/UserHeader'

export default function Contact(props) {
    return (
        <>

            <UserHeader setHeadProgress={props.setProgress}/>
            <div className='uh_pagename_cont'>
                <div>
                    <img width={200} src="https://media.licdn.com/dms/image/C510BAQExrSB2_ZAV8Q/company-logo_200_200/0/1556392812980?e=2147483647&v=beta&t=E5u8ih9wrtlcDx-si-9t5JacZMHegTFgvTf7JynYahQ" alt="" />
                </div>
                <div>
                   Contact Us
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
                        Contact Us

                    </div>
                    <div>
                        <div style={{ paddingTop: '20px' }}>
                            <label for="fname">Subject:</label>
                            <input  type="text" id="fname" name="fname" />
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                            <label for="fname">Massage:</label>
                            <textarea type="text" id="fname" name="fname" />
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                            <label for="fname">Username:</label>
                            <input  type="text" id="fname" name="fname" />
                        </div>
                        <div style={{ paddingTop: '20px' }}>
                            <label for="fname">Email:</label>
                            <input type="text" id="fname" name="fname" />
                        </div>

                    </div>
                </div>
            </section>


            <section className='c_container'>
                <div className='c_container_inner'>
                    <div className='c_c_header'>
                        Excalation Matrix
                    </div>
                    <div style={{display: 'flex',    justifyContent: 'center'}}>
                        <table style={{width:'80%'}}>
                            <tr>
                                <th style={{textAlign:'start'}}>LEVEL</th>
                                <th style={{textAlign:'start'}}>Name</th>
                                <th style={{textAlign:'start'}}>EMAIL</th>
                                <th style={{textAlign:'start'}}>PHONE</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Sales</td>
                                <td>sales@parasprint.in</td>
                                <td>+91 2342342334</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Sales</td>
                                <td>sales@parasprint.in</td>
                                <td>+91 2342342334</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Sales</td>
                                <td>sales@parasprint.in</td>
                                <td>+91 2342342334</td>
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
