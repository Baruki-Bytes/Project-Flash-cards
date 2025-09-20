import React from "react";
import logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";


function Navbar() {
    return(
        <div>
            <img src={logo} alt=""/>
            <ul>
                <Link to='/' ><li>Home</li></Link>
                <Link to='/products'><li>Produtcs</li></Link>
                <Link to='/about'><li>About</li></Link>
            </ul>
        </div>
    )
}

export default Navbar;