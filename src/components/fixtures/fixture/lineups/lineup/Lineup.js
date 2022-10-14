import "./Lineup.css";

const Lineup = ({lineup}) => {
	
	try {
			return (
				<div className="lineup">
					<div className="line-teams">
						<h2 className="lineup-team-name">{lineup.team.name} <span>{lineup.formation}</span></h2>
						<img className="lineup-team-logo" src={lineup.team.logo} alt="" />
					</div>
					<div>
						<h3 className="lineup-title">coach</h3>
						<span>{lineup.coach.name}</span>
						<h3 className="lineup-title">starting XI</h3>
						{lineup.startXI.map(player => <p id={player.player.id}><span>{player.player.number}</span>{player.player.name}</p>)}
						<h3 className="lineup-title">substitutes</h3>
						{lineup.substitutes.map(player => <p id={player.player.id}><span>{player.player.number}</span>{player.player.name}</p>)}
					</div>
				</div>
			)

	}catch (error) {
		console.log(error);
	}
}

export default Lineup;