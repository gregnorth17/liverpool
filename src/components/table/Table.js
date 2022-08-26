import { useEffect, useState } from "react";
import TableData from "./tabledata/TableData";
import "./Table.css";

const Table = () => {
	const [table, setTable] = useState([]);
	useEffect(() => {
		try {
			fetch("http://localhost:8000/table")
			.then(response => response.json())
			.then(data => setTable(data))
		} catch(error) {
			console.log(error)
		}
	},[])
	
	return (
		<section className="table-section">
		
			<table>
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