import React from 'react'
import { Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

export default function SideNav() {

    
    const [progress, setProgress] = useState(0);

    const increasePro = () => {
        setProgress(100);
        console.log(progress);
    }

    return (
        <>
           <LoadingBar color='#ffc400' height={2} progress={progress} onLoaderFinished={() => setProgress(0)} />
            <div className='head_side_bar'>
                <Link style={{ textDecoration: 'none' }} to="/addproduct">
                    <div className='s_link' onClick={()=>{setProgress(100)}}>
                        Add Product
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/modifyproduct">
                    <div className='s_link' onClick={increasePro}>
                        Modify Product
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/adduser">
                    <div className='s_link' onClick={increasePro}>
                        Add User
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/modifyuser">
                    <div className='s_link' onClick={increasePro}>
                        Modify User
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/addbranch">
                    <div className='s_link' onClick={increasePro}>
                        Add Branch
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/modifybranch">
                    <div className='s_link' onClick={increasePro}>
                        Modify Branch
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/addproduct">
                    <div className='s_link' onClick={increasePro}>
                        Upload MIS
                    </div>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/addproduct">
                    <div className='s_link' onClick={increasePro}>
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
