import axios from "axios";
import { useEffect, useState } from "react";
import Fixture from "./fixture/Fixture";
import "./Fixtures.css";

const Fixtures = ({lfc}) => {
	const [fixtures, setFixtures] = useState([]);

	const fetchData = async () => {
		const results = await axios.get("/.netlify/functions/fixturesapi");
		setFixtures(results.data.response)
	}

	useEffect(() => {
		fetchData();
	},[])

	return (
		<section className="fixtures-section">
			<div className="fixtures">
				<Fixture fixtures={fixtures} />
			</div>
		</section>
	)
}

export default Fixtures;