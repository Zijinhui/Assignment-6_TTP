

import { useState } from "react";
import "./style.css";

export default function Navbar({getData}) {
 const [zip, setZip] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setZip(event.target.zipcode.value)
    console.log(zip)
    getData(zip)

  }
  
    return ( 
        <div>
    <nav>
        <div className ="logo"> <h3>Zip Code Search</h3></div>
        <ul className="bar">
        <li>Showing Locations</li>
        </ul>
    </nav>

     <div className="searchBar">Zip Code:
     <form onSubmit={handleSubmit}>
    
    <input  
          type="text" 
          name="zipcode"
          placeholder="zip"
          className="input"
        //   onChange={handleSubmit}
        />
    <button >submit</button>
     </form>
     </div>
        </div> 
    )
}
