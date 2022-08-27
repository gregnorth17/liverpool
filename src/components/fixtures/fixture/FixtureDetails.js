import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Fixture.css";

const FixtureDetails = (props) => {
	const {fixtureId} = useParams();
	console.log(fixtureId);

	useEffect(() => {
		fetch(`http://localhost:8000/fixturedetails`)
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