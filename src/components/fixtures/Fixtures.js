import { useEffect, useState } from "react";
import Fixture from "./fixture/Fixture";
import "./Fixtures.css";

const Fixtures = ({lfc}) => {
	const [fixtures, setFixtures] = useState([]);

	useEffect(() => {
		fetch("https://v3.football.api-sports.io/fixtures?season=2022&team=40&from=2022-07-11&to=2023-05-28", {
				method: "GET",
				headers: {
					"x-apisports-key" : process.env.REACT_APP_API_KEY
				}
			})
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