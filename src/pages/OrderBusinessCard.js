import React from 'react'
import UserHeader from '../components/UserHeader'

export default function OrderBusinessCard(props) {
    return (
        <>

            <UserHeader setHeadProgress={props.setProgress}/>
            <div className='uh_pagename_cont'>
                <div>
                    <img width={200} src="https://media.licdn.com/dms/image/C510BAQExrSB2_ZAV8Q/company-logo_200_200/0/1556392812980?e=2147483647&v=beta&t=E5u8ih9wrtlcDx-si-9t5JacZMHegTFgvTf7JynYahQ" alt="" />
                </div>
                <div>
                    Order Business Card
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

            <section style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ border: '1px solid #d7d7d7',margin:'10px 0px',borderRadius:'5px' }} className='main_contant_side'>
                    <div>
                        <p>Visiting Card Details </p>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label style={{ width: '30%' }} htmlFor="">Branch code/ Office code: </label>
                        </div>
                        <select name="cars" id="cars" style={{ width: '40%', padding:'3px' }}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Department: </label>
                        </div>
                        <select name="cars" id="cars" style={{ width: '40%', padding:'3px' }}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Cost Center: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Branch Name: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Card Type: </label>
                        </div>
                        <select name="cars" id="cars" style={{ width: '40%', padding:'3px' }}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">First Name: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Last Name: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Designation 1: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Designation 2: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Address line 1: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Address line 2: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">City: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">State: </label>
                        </div>
                        <select name="cars" id="cars" style={{ width: '40%', padding:'3px' }}>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Pincode: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>


                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Mobile: </label>
                        </div>
                        <div style={{ width: '40%', padding:'3px' }}>

                        <input type="text" style={{width:'40px',marginRight:'12px'}} value='+91'/>
                        <input type="text"  />
                        </div>
                    </div>
                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Phone: </label>
                        </div>
                        <div style={{ width: '40%', padding:'3px' }}>

                        <input type="text" style={{width:'40px',marginRight:'12px'}} value='+91'/>
                        <input type="text"  />
                        </div>
                    </div>


                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Email: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>
                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Qrdering Quantity: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>
                    <div style={{ width: '100%', display: 'flex',padding:'8px' }}>
                        <div style={{ width: '30%', textAlign: 'end' }}>
                            <label htmlFor="">Remarks: </label>
                        </div>
                        <input type="text"  style={{ width: '40%', padding:'3px' }}/>
                    </div>

                    <div style={{display:'flex',justifyContent:'end',padding:'0px 50px'}}>
                        <img width={200} src="https://bfsi.eletsonline.com/wp-content/uploads/2023/04/RBL-Bank.jpg" alt="" />
                    </div>

                    <div style={{display:'flex',justifyContent:'center',padding:'0px 50px'}}>
                    <button className='set_btn_col'>Priveus Cart</button>
                    <button style={{marginLeft:'10px'}} className='set_btn_col'>Save</button>
                    </div>

                </div>


            </section>




















            <section className='u_footer'>
                Copyright © Paras Print
            </section>
        </>
    )
}
