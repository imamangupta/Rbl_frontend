import React from 'react'
import logo from '../assets/logo.jpeg'
import { Link } from 'react-router-dom'

export default function UserHeader(props) {
    const moveProgress = () => {
        props.setHeadProgress(10);
        props.setHeadProgress(100);
    }
    return (
        <section>
            <div className='u_header'>
                <div className='u_header_inner'>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='u_header_link'>
                            <Link onClick={moveProgress} to="/userhome">Home</Link>
                        </div>
                        <div className='u_header_link'>
                            <Link onClick={moveProgress} to="/userorderbusiness">Order Business Card</Link>
                        </div>
                        <div className='u_header_link'>
                            <Link onClick={moveProgress} to="/userordertrack">Track Order</Link>
                        </div>
                        <div className='u_header_link'>
                            <Link onClick={moveProgress} to="/usercontact">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
