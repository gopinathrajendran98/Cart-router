import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css"
import {IoSearch} from "react-icons/io5"
import {FaShoppingCart} from "react-icons/fa" 


const Navbar = () =>{
    return (
        <>
        {/* <div className="navbar-container">
         <div className="navbar">
            <h1>SHOPPING</h1>
           <Link to={"/"}>
            </Link> 
            
            <div className="navbar-cart">
                               <Link to={"/cart"} className="cart">
                    Cart
                </Link>
            </div>
            </div>
            </div> */}
            {/* <div className="Cart-icon">
                    <FaShoppingCart/>
                </div> */}

        </>
    )
}

export default Navbar;