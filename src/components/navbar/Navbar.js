import {NavLink} from "react-router-dom"
// import Dashboard from "../das"
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="nav">
			<NavLink className="nav-link" to="/fixtures">Fixtures</NavLink>
			<NavLink className="nav-link" to="/table">Table</NavLink>
			<NavLink className="nav-link" to="/squad">Squad</NavLink>
		</nav>
	)
}

export default Navbar;