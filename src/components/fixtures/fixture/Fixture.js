import { useState } from "react";
import { Link } from "react-router-dom";
import "./Fixture.css";

const Fixture = (props) => {
	
	console.log(props.fixtures);
	
	try {
		return props.fixtures.response.map(fixture => {
			return (
				<Link to={`/fixtures/${fixture.fixture.id}`}>
					<div className="fixture">
						<div className="teams">
						<p className="competition">{fixture.league.name}</p>
							<div className="team">
								<img className="team-image" src={fixture.teams.home.logo} alt="tb" />
								<p className="team-name">
									{fixture.teams.home.name}
								</p>
									{fixture.fixture.status.short === "FT" ? 
										<span className="score">{fixture.score.fulltime.home}</span> : ""
									}
							</div>
							<div className="team">
								<img className="team-image" src={fixture.teams.away.logo} alt="tb" />
								<p className="team-name">
									{fixture.teams.away.name}
								</p>
									{fixture.fixture.status.short === "FT" ? 
									<span className="score">{fixture.score.fulltime.away}</span> : ""}
							</div>
						</div>
						{fixture.fixture.status.short === "FT" ? 
						<>
							<div className="final-score date-time">
								<p className="full-time">{fixture.fixture.status.short}</p>
								<p className="date">{new Date(fixture.fixture.date).toLocaleDateString('en-UK')}</p>
							</div>
						</>
						:
						<div className="date-time">
							<p className="date">{new Date(fixture.fixture.date).toLocaleDateString('en-UK')}</p>
							<p className="time">{new Date(fixture.fixture.date).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'})}</p>
							<p className="location">{fixture.fixture.venue.name}</p>
						</div>
						}
					</div>
				</Link>
			)
		})
	}
	catch(error) {
		console.log(error)
	}
}

export default Fixture
