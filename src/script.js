
import React from "react";
import "./style.css";

export default function Navbar() {
    return ( 
        <div>
    <nav>
        <div className ="logo"> <h3>Zip Code Search</h3></div>
        <ul className="bar">
        <li>Showing Locations</li>
        </ul>
    </nav>
     <div className="searchBar">Zip Code:
    <input type="text" className="input"/>
     </div>
        </div> 
    )
}
