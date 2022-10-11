import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Stats from "./stats/Stats";
import "./Fixture.css";

const FixtureDetails = (props) => {
	const [statsHome, setStatsHome] = useState([]);
	const [statsAway, setStatsAway] = useState([]);
	const {fixtureId} = useParams();
	console.log(fixtureId);

	
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
			<>
				<table>
					<thead>
						<tr>
							<th><img src={statsHome.team.logo} alt="Home team badge" /></th>
							<th>TEAM STATS</th>
							<th><img src={statsAway.team.logo} alt="Away team badge" /></th>
						</tr>
					</thead>
					<tbody>
						<Stats statsHome={statsHome} statsAway={statsAway} />
					</tbody>
				</table>
			</>
			</section>
		)
	} catch(error) {
		console.log(error)
	}

}

export default FixtureDetails;