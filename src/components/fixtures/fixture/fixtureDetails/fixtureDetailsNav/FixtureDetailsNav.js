import { NavLink } from "react-router-dom";


const fixtureDetailsNav = (props) => {
	return (
		<>
		<nav>
			<NavLink to={`/fixtures/${props.fixtureId}/stats`}>STATS</NavLink>
			{/* <NavLink>LINEUP</NavLink> */}
		</nav>

		</>
	)
}

export default fixtureDetailsNav;