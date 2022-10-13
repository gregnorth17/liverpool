import "./Stats.css";

const Stats = (props) => {
	return (
		<p>stats</p>
	)
	// console.log(props);
	// const [statsHome, setStatsHome] = useState([]);
	// const [statsAway, setStatsAway] = useState([]);
	// setStatsHome(results.data.response[0]);
	// setStatsAway(results.data.response[1]);
	// <table className="stats-table">
	// 				<thead>
	// 					<tr>
	// 						<th><img className="badge-stats" src={statsHome.team.logo} alt="Home team badge" /></th>
	// 						<th>TEAM STATS</th>
	// 						<th><img className="badge-stats" src={statsAway.team.logo} alt="Away team badge" /></th>
	// 					</tr>
	// 				</thead>
	// 				<tbody>
	// 					<Stats statsHome={statsHome} statsAway={statsAway} />
	// 				</tbody>
	// 			</table>	
	// try{
	// 	return props.statsHome.statistics.map((stat, index) => {
	// 		return  <tr>
	// 							<td>{stat.value}</td>
	// 							<td>{stat.type}</td>
	// 							<td>{props.statsAway.statistics[index].value}</td>
	// 						</tr>
	// 	})
	// } catch(error) {
	// 	console.log(error);
	// }
}

export default Stats;