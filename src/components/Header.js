import React from 'react'
import './style/Header.css'
import logo from '../assets/logo.jpeg'
import { Link } from "react-router-dom";


export default function Header() {

  

    return (
        <>
    
            <div className='head_top'>
                <div style={{ display: 'flex' }}>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <p style={{ marginLeft: '20px', color: 'blue' }}>Welcom Addministator:- admin</p>
                </div>
                <div>
                    <Link style={{ textDecoration: "none" }} to='/adminhome' >
                        <p className='head_top_home_btn'><span className="material-symbols-outlined">home</span></p>
                    </Link>
                </div>
            </div>

        </>
    )
}
