import "./stats.css";

const Stats = (props) => {
	console.log(props);
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