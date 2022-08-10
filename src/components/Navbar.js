import React, {useState} from 'react';
import {Link} from "react-router-dom";
 import {GrAdd} from 'react-icons/gr'
import {useDispatch} from "react-redux";
import {saidbarOpen} from "../actions/bookActions";

const Navbar = () => {
     const dispatch  = useDispatch()

    return (
        <nav className='navbar'>
            <div className="nav-box">
                    <h1 className='logo'>BOOK SHOP</h1>
                <ul>
                    <li><Link className='link-list' to='/'>Shop</Link></li>
                    <li><Link className='link-list' to='contact'>Contact</Link></li>
                    <li><Link className='link-list' to='about'>About</Link></li>
                    <li><Link className='link-list' to='cart'>Cart</Link></li>

                    <li><Link className='link-list' to='category'>Category</Link></li>
                </ul>
                <div className="search">
                    <input type="text" placeholder='Search...' />
                </div>
                    <GrAdd className='add-icon' onClick={()=>{dispatch(saidbarOpen(true))}}/>
                <div className="login">
                    <Link className='login-link' to='kgj'>Login</Link>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;