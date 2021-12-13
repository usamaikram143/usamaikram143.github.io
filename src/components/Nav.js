import React,{Component} from "react";
import '../css/Nav.css'
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <nav>
            <Link to="/" className="navLinks"> Home </Link>
            <Link to="/about" className="navLinks"> About </Link>
            <Link to="/projects" className="navLinks"> Projects </Link>
            <Link to="/contact" className="navLinks"> Contact </Link>

        </nav>
    );
}

export default Nav;