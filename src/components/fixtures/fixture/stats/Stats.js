import "./stats.css";

const Stats = (props) => {
	console.log(props);
	<table className="stats-table">
					<thead>
						<tr>
							<th><img className="badge-stats" src={props.statsHome.team.logo} alt="Home team badge" /></th>
							<th>TEAM STATS</th>
							<th><img className="badge-stats" src={props.statsAway.team.logo} alt="Away team badge" /></th>
						</tr>
					</thead>
					<tbody>
						<Stats statsHome={props.statsHome} statsAway={props.statsAway} />
					</tbody>
				</table>
	try{
		return props.statsHome.statistics.map((stat, index) => {
			return  <tr>
								<td>{stat.value}</td>
								<td>{stat.type}</td>
								<td>{props.statsAway.statistics[index].value}</td>
							</tr>
		})
	} catch(error) {
		console.log(error);
	}
}

export default Stats;