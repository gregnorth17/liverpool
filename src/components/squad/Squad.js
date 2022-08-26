import {useEffect, useState} from "react";
import Player from "./player/Player";
import "./Squad.css";

const Squad = () => {
	const [squad, setSquad] = useState([])
	useEffect(() => {
		fetch("http://localhost:8000/squad")
		.then(response => response.json())
		.then(data => setSquad(data.response[0].players))
		.catch(error => console.log(error))
	},[])
	
	return (
		<div className="squad">
			<Player squad={squad} />
		</div>
	)
}

export default Squad;