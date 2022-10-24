import { useEffect, useState } from "react";
import TableData from "./tabledata/TableData";
import "./Table.css";
import axios from "axios";

const Table = () => {
	const [table, setTable] = useState([]);

	const fetchData = async () => {
		const results = await axios.get("/.netlify/functions/tableapi");
		console.log(results.data.response);
		setTable(results.data.response)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<section className="table-section transition-fade">
		
			<table className="league-table">
				<caption className="table-caption">
					<h2 className="table-caption-title">Qualification/Relegation</h2>
					<div className="table-key">
						<p className="competition champ-league">UEFA Champions League group stage</p>
						<p className="competition europa-league">Europa League group stage</p>
						<p className="competition europa-conference">Europa Conference League qualifiers</p>
						<p className="competition relegation">Relegation</p>
					</div>
				</caption>
				<thead>
						<tr>
							<th className="row-header" colSpan="15">Club</th>
							<th>MP</th>
							<th>W</th>
							<th>D</th>
							<th>L</th>
							<th>GF</th>
							<th>GA</th>
							<th>GD</th>
							<th>Pts</th>
							<th>Last 5</th>
						</tr>
				</thead>
				<tbody>
					<TableData table={table} />
				</tbody>
	</table>
		</section>
	)
}

export default Table