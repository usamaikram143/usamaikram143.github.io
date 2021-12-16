
import '../css/Nav.css'
import {Link} from 'react-router-dom';
import logo from "../logo.jpg"
function Nav(){
    return(
        <nav>
            <img src={logo} className="logo"/>
            <Link to="/" className="navLinks"> Home </Link>
            <Link to="/about" className="navLinks"> About </Link>
            <Link to="/projects" className="navLinks"> Projects </Link>
            <Link to="/contact" className="navLinks"> Contact </Link>

        </nav>
    );
}

export default Nav;