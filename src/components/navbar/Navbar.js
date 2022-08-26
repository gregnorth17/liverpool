import {NavLink} from "react-router-dom"
import "./Navbar.css";

const Navbar = ({lfc}) => {
	const style = {
		background: lfc ? "var(--red)" : "var(--blue)"
	}
	return (
		<nav style={style}>
			<NavLink className="nav-link" to="/fixtures">Fixtures</NavLink>
			{/* <NavLink className="nav-link" to="/liverpool/news">News</NavLink> */}
			<NavLink className="nav-link" to="/table">Table</NavLink>
			<NavLink className="nav-link" to="/squad">Squad</NavLink>
		</nav>
	)
}

export default Navbar;