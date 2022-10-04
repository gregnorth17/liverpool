import { Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Fixtures from "../fixtures/Fixtures";
import FixtureDetails from "../fixtures/fixture/FixtureDetails";
import Table from "../table/Table";
import Squad from "../squad/Squad";

import backgroundRed from "../../images/home-lfc.jpg";
import "./Dashboard.css";

const Dashboard = ({lfc}) => {
	
	const style = {
		backgroundImage: `url(${backgroundRed})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "contain",
		backgroundAttachment: "fixed",
		backgroundColor: "black",
		minHeight: "100vh"
	}
	
	return (
		<>
			<Navbar lfc={lfc} />
			<section style={style} className="dashboard">
			<Routes>
				{/* <Route path="/" element={<Home/>} /> */}
				<Route path="/fixtures" element={<Fixtures />} />
				<Route path="/fixtures/:fixtureId" element={<FixtureDetails />} />
				{/* <Route path="/liverpool/news" element={<News />} /> */}
				<Route path="/table" element={<Table />} />
				<Route path="/squad" element={<Squad />} />
			</Routes>
			</section>
		</>
	)
}

export default Dashboard;