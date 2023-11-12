import React from 'react'
import { Link } from "react-router-dom";


export default function SideNav(props) {

    
    const moveProgress = () => {
        props.setHeadProgress(10);
        props.setHeadProgress(100);
    }

    return (
        <>
          
            <div className='head_side_bar'>
                <Link style={{ textDecoration: 'none' }} to="/addproduct">
                    <div className='s_link' onClick={moveProgress}>
                        Add Product
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/modifyproduct">
                    <div className='s_link' onClick={moveProgress}>
                        Modify Product
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/adduser">
                    <div className='s_link' onClick={moveProgress}>
                        Add User
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/modifyuser">
                    <div className='s_link' onClick={moveProgress}>
                        Modify User
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/addbranch">
                    <div className='s_link' onClick={moveProgress}>
                        Add Branch
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/modifybranch">
                    <div className='s_link' onClick={moveProgress}>
                        Modify Branch
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/addproduct">
                    <div className='s_link' onClick={moveProgress}>
                        Upload MIS
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/addproduct">
                    <div className='s_link' onClick={moveProgress}>
                        Export Data
                    </div>
                </Link>
                <div>
                    <button>SignOut</button>
                </div>
            </div>



        </>
    )
}
