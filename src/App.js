import Navbar from "./script";
import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
	
	const [isLoaded, setIsLoaded] = useState(false);
  	const [items, setItems] = useState([]);

	useEffect(() => {
    fetch("http://ctp-zip-api.herokuapp.com/zip/10016")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
      )
  }, []);


return (

	<div>
        <Navbar/> 
        <ul>
				{items.map(item => (
       		<li key={item.id}> 
        		State: {item.State} <br/>
        		City: {item.City} <br/>
        		Location:{item.Location} <br/>
        		Population (Estimated): {item.EstimatedPopulation} <br/>
        		Total Wages: {item.TotalWages}
        	</li>
        ))}
      </ul>
	</div>
		);
}

