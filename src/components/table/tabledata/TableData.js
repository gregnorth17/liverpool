import "./TableData.css";
const TableData = (props) => {
	
	try {
			const leagueTable = props.table[0].league.standings[0];
			console.log(leagueTable);
			
			return leagueTable.map((position, index) => {

				const addBorderLeft = promotionPlaces => {
					const promotionColor = {
						"Promotion - Champions League (Group Stage)" : "#4285F4",
						"Promotion - Europa League (Group Stage)" : "#FA7B17",
						"Promotion - Europa Conference League (Qualification)" : "#34A853",
						"Relegation - Championship" : "#EA4335"
					}

					return promotionColor[promotionPlaces];
				}

				const style = {
					borderLeft: `2px solid ${addBorderLeft(position.description)}`
				}

					return (
						<>
							<tr className="position-data" key={index} colSpan="15">
								<td style={style}></td>
								<td>{position.rank}</td>
								<td className="club-badge-td"><img className="club-badge" src={position.team.logo} alt="team badge" /></td>
								<td className="club-name" colSpan="12">{position.team.name}</td>
								<td>{position.all.played}</td>
								<td>{position.all.win}</td>
								<td>{position.all.draw}</td>
								<td>{position.all.lose}</td>
								<td>{position.all.goals.for}</td>
								<td>{position.all.goals.against}</td>
								<td>{position.goalsDiff}</td>
								<td><strong>{position.points}</strong></td>
								<td>{position.form}</td>
								<td></td>
							</tr>
						</>
					)
				})
		} catch(error) {
			console.error(error);
		}

}

export default TableData;