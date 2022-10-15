import { NavLink } from "react-router-dom";
import "./FixtureDetailsNav.css";

const fixtureDetailsNav = (props) => {
	return (
		<>
		<nav className="fixture-detail-nav">
			<NavLink className="fixture-detail-nav-link" to={`stats`}>STATS</NavLink>
			<NavLink className="fixture-detail-nav-link" to={`lineups`}>LINEUP</NavLink>
		</nav>

		</>
	)
}

export default fixtureDetailsNav;