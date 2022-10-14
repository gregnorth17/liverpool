import axios from "axios";
import { Routes, Route, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FixtureDetailsNav from "./fixtureDetailsNav/FixtureDetailsNav"
import Stats from "../stats/Stats";
import Lineup from "../lineup/Lineup";
import "./FixtureDetails.css";

const FixtureDetails = () => {
	const [fixture, setFixture] = useState({})
	const {fixtureId} = useParams();

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
							<div className="fixture-home-goals">{checkGoals(fixture.teams.home.name)}</div>
							<div className="fixture-home-goals">{checkGoals(fixture.teams.away.name)}</div>
						</div>
				<FixtureDetailsNav/>
				<Routes>
					<Route path="stats" element={<Stats stats={fixture.statistics} />} />
					<Route path="lineup" element={<Lineup lineup={fixture.lineups} />} />
				</Routes>
				</div>
			</section>
		)
	} catch(error) {
		console.log(error)
	}
}

export default FixtureDetails;