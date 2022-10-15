import { useEffect } from "react";
import { useState } from "react";
import "./Stats.css";

const Stats = (props) => {
	console.log(props);
	const [statsHome, setStatsHome] = useState([]);
	const [statsAway, setStatsAway] = useState([]);

	useEffect(() => {
		setStatsHome(props.stats[0]);
		setStatsAway(props.stats[1]);
		
	},[])

	const GetStats = () => {
		
	}

	try{
		return (
			<table className="stats-table">
				<thead>
					<tr>
						<th><img className="badge-stats" src={statsHome.team.logo} alt="Home team badge" /></th>
						<th className="heading-text">TEAM STATS</th>
						<th><img className="badge-stats" src={statsAway.team.logo} alt="Away team badge" /></th>
					</tr>
				</thead>
				<tbody>
				{statsHome.statistics.map((stat, index) => {
					return  <tr>
										<td className="table-data body-text">{stat.value}</td>
										<td className="table-data heading-text">{stat.type}</td>
										<td className="table-data body-text">{statsAway.statistics[index].value}</td>
									</tr>
				})}		
				</tbody>
			</table>	
		)
	} catch(error) {
		console.log(error);
	}
}

export default Stats;