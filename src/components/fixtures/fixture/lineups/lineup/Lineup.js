import "./Lineup.css";

const Lineup = ({lineup}) => {
	
	try {
			return (
				<div className="lineup">
					<div className="line-teams">
						<h2 className="lineup-team-name heading-text">{lineup.team.name} <span className="body-text">{lineup.formation}</span></h2>
						<img className="lineup-team-logo" src={lineup.team.logo} alt="" />
					</div>
					<div>
						<h3 className="lineup-title heading-text">coach</h3>
						<span>{lineup.coach.name}</span>
						<h3 className="lineup-title heading-text">starting XI</h3>
						{lineup.startXI.map(player => <p className="body-text" id={player.player.id}><span className="body-text">{player.player.number}</span>{player.player.name}</p>)}
						<h3 className="lineup-title heading-text">substitutes</h3>
						{lineup.substitutes.map(player => <p className="body-text" id={player.player.id}><span className="body-text">{player.player.number}</span>{player.player.name}</p>)}
					</div>
				</div>
			)

	}catch (error) {
		console.log(error);
	}
}

export default Lineup;