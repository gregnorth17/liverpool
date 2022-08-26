import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Fixture.css";

const FixtureDetails = (props) => {
	const {fixtureId} = useParams();
	console.log(fixtureId);

	useEffect(() => {
		fetch(`https://v3.football.api-sports.io/fixtures/statistics?fixture=${fixtureId}&team=40`, {
			method: "GET",
			headers: {
				"x-apisports-key" : "db05fa99096787857df941d04fd5ec6e"
			}
		})
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(err => {
			console.log(err);
		});
		
	},[])


	return (
		<div>FixtureDetails</div>
	)
}

export default FixtureDetails;