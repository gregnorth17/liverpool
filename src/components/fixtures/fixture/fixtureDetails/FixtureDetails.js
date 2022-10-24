import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import FixtureDetailsNav from "./fixtureDetailsNav/FixtureDetailsNav"
import Stats from "../stats/Stats";
import Lineups from "../lineups/Lineups";
import "./FixtureDetails.css";
import Fixtures from "../../Fixtures";

const FixtureDetails = () => {
	const [fixture, setFixture] = useState({})
	const {fixtureId} = useParams();
	console.log(fixture);
	try {
		useEffect(() => {
			const fetchData = async () => {
				const results = await axios.get(`/.netlify/functions/fixtureDetailsApi?id=${fixtureId}`)
				setFixture(results.data.response[0]);
			}
			fetchData()
		},[fixtureId])

		const checkGoals = (team) => {
			return fixture.events.filter(goal => goal.team.name === team && goal.type === "Goal")
													 .map(goal => <p>{goal.player.name} {goal.time.elapsed}</p>)
		}

		return (
			<section className="fixture-details transition-fade">
				<div className="fixture-detail">
				<Link to="/fixtures">{fixture.teams.home.name} vs {fixture.teams.away.name}</Link>
					<div className="fixture-detail-header">
							<span className="fixture-competition body-text">{fixture.league.name} {new Date(fixture.fixture.date).toLocaleDateString('en-UK')}</span>
							<span className="fixture-status heading-text">{fixture.fixture.status.long}</span>
						</div>
						<div className="fixture-teams">
							<div className="fixture-home-team">
								<img className="fixture-team-badge" src={fixture.teams.home.logo} alt="Home team badge" />
								<p className="fixture-team-name heading-text">{fixture.teams.home.name}</p>
							</div>
							<span className="fixture-score heading-text">{fixture.goals.home} - {fixture.goals.away}</span>
							<div className="fixture-away-team">
								<img className="fixture-team-badge" src={fixture.teams.away.logo} alt="Away team badge" />
								<p className="fixture-team-name heading-text">{fixture.teams.away.name}</p>
							</div>
						</div>
						<div className="fixture-goals">
							<div className="fixture-home-goals body-text heading-text">{checkGoals(fixture.teams.home.name)}</div>
							<div className="fixture-away-goals body-text heading-text">{checkGoals(fixture.teams.away.name)}</div>
						</div>
				<FixtureDetailsNav/>
				<Routes>
					<Route path="stats" element={<Stats stats={fixture.statistics} />} />
					<Route path="lineups" element={<Lineups lineups={fixture.lineups} />} />
				</Routes>
				</div>
			</section>
		)
	} catch(error) {
		console.log(error)
	}
}

export default FixtureDetails;