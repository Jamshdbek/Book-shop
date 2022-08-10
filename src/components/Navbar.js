import React, {useState} from 'react';
import {Link} from "react-router-dom";
 import {GrAdd} from 'react-icons/gr'
import {useDispatch, useSelector} from "react-redux";
import {saidbarOpen} from "../actions/bookActions";
import { useEffect } from 'react';

const Navbar = () => {
     const dispatch  = useDispatch()
     const prices = useSelector((state) => state.books);
     const buy = useSelector((state)=>state.cart)
     const [ priceBook ,setPrice] = useState(0)
     
     useEffect(()=>{
        prices.map((book)=>{
            return(
                setPrice( book.price )
            )
        })
     },[prices])
// setPrice(prices)
    return (
        <nav className='navbar'>
            <div className="nav-box">
                    <h1 className='logo'>BOOK SHOP</h1>
                <ul>
                    <li><Link className='link-list' to='/'>Shop</Link></li>
                    <li><Link className='link-list' to='contact'>Contact</Link></li>
                    <li><Link className='link-list' to='about'>About</Link></li>

                    <li><Link className='link-list' to='category'>Category</Link></li>
                </ul>
                      <h1>{priceBook}</h1>
  
                    <li><Link className='link-list' to='cart'><img src="https://www.clipartmax.com/png/full/284-2849169_red-simple-shopping-cart-icon-image-recurring-payment.png" alt="" /></Link></li>
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