import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import FixtureScore from "../fixtureScore/FixtureScore";
// import Stats from "../stats/Stats";
import "./FixtureDetails.css";

const FixtureDetails = () => {
	const [fixture, setFixture] = useState({})
	const {fixtureId} = useParams();
	console.log(fixture)
	
	try {
		useEffect(() => {
			const fetchData = async () => {
				const results = await axios.get(`/.netlify/functions/fixtureDetailsApi?id=${fixtureId}`)
				setFixture(results.data.response[0]);
				
			}
			fetchData()
		},[fixtureId])
		return (
			<section className="fixture-details">
				<div className="fixture-detail">
					<div className="fixture-detail-header">
							<span className="fixture-competition">{fixture.league.name} {new Date(fixture.fixture.date).toLocaleDateString('en-UK')}</span>
							<span className="fixture-status">{fixture.fixture.status.long}</span>
						</div>
						<div className="fixture-teams">
							<img className="fixture-team-badge" src={fixture.teams.home.logo} alt="" />
							<span className="fixture-score">{fixture.goals.home} - {fixture.goals.away}</span>
							<img className="fixture-team-badge" src={fixture.teams.away.logo} alt="" />
						</div>
						<div className="fixture-goals">

						</div>
				</div>
					
			</section>
		)
	} catch(error) {
		console.log(error)
	}

}

export default FixtureDetails;