import { useEffect, useState } from "react";
import Fixture from "./fixture/Fixture";
import "./Fixtures.css";

const Fixtures = ({lfc}) => {
	const [fixtures, setFixtures] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/fixtures")
		.then(response => response.json())
		.then(data => setFixtures(data))
		.catch(error => console.log(error))
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