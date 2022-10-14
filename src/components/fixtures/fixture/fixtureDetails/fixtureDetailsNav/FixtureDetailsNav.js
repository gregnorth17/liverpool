import { NavLink } from "react-router-dom";


const fixtureDetailsNav = (props) => {
	return (
		<>
		<nav>
			<NavLink to={`stats`}>STATS</NavLink>
			<NavLink to={`lineups`}>LINEUP</NavLink>
		</nav>

		</>
	)
}

export default fixtureDetailsNav;