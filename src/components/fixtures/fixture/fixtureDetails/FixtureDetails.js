import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import FixtureScore from "../fixtureScore/FixtureScore";
// import Stats from "./stats/Stats";
import "./FixtureDetails.css";

const FixtureDetails = (props) => {
	const [statsHome, setStatsHome] = useState([]);
	const [statsAway, setStatsAway] = useState([]);
	const {fixtureId} = useParams();
	console.log(props.fixture);
	
	try {
		useEffect(() => {
			const fetchData = async () => {
				const results = await axios.get(`/.netlify/functions/fixtureDetailsApi?fixture=${fixtureId}`)
				console.log(results.data);
				setStatsHome(results.data.response[0]);
				setStatsAway(results.data.response[1]);
			}
			fetchData()
		},[fixtureId])
		return (
			<section className="fixture-details">
				{/* <FixtureScore /> */}
				ahoy
			</section>
		)
	} catch(error) {
		console.log(error)
	}

}

export default FixtureDetails;