import { useEffect, useState } from "react";
import Lineup from "./lineup/Lineup";
import "./Lineups.css";


const Lineups = (props) => {
	const [lineupHome, setLineupHome] = useState([])
	const [lineupAway, setLineupAway] = useState([])
	useEffect(() => {
		setLineupHome(props.lineups[0]);
		setLineupAway(props.lineups[1]);
	},[])

	
	try {
		return (
			<div className="lineups">
				<Lineup lineup={lineupHome} />
				<Lineup lineup={lineupAway} />
			</div>
		)
	} catch(error) {
		console.log(error);
	}
}

export default Lineups;