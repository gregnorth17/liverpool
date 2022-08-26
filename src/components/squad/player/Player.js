import "./Player.css";

const Player = (props) => {
	console.log(props)
	try {
		return props.squad.map(player => {
			return (
				<div className="player">
					<img src={player.photo} alt="" />
					<h4 className="player-name">{player.name}</h4>
					<p>Position: {player.position}</p>
					<p>Age: {player.age}</p>
					<p>{!player.number ? "" : `Squad Number: ${player.number}`}</p>
				</div>
			)
		})
	} catch(error) {
		console.error(error);
	}
}

export default Player;