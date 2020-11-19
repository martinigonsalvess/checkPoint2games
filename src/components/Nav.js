import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Nav(){
    const navStyle = {
        color: 'white'
    }
    return(
        <nav>
            <h2>Logo</h2>
            <ul className="nav-links">

               <Link style={navStyle}to="/gamelist"> <li>GameList</li></Link>
               <Link style={navStyle}to="gamedetails"> <li>GameDetails</li></Link>
            </ul>
        </nav>

    );
}export default Nav;