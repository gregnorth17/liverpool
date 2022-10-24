import axios from "axios";
import {useEffect, useState} from "react";
import Player from "./player/Player";
import "./Squad.css";

const Squad = () => {
	const [squad, setSquad] = useState([])

	const fetchData = async () => {
		const results = await axios.get("/.netlify/functions/squadapi")
		setSquad(results.data.response)
	}

	useEffect(() => {
		fetchData();
	},[])
	
	return (
		<div className="squad transition-fade">
			<Player squad={squad} />
		</div>
	)
}

export default Squad;