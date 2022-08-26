const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
	res.json("ahoy")
})

app.get("/fixtures", (req, res) => {
	fetch("https://v3.football.api-sports.io/fixtures?season=2022&team=40&from=2022-07-11&to=2023-05-28", {
			method: "GET",
			headers: {
				"x-apisports-key" : process.env.LIVERPOOL_APP_X_APISPORTS_KEY
			}
		})
		.then(response => response.json())
		.then(data => res.json(data.response))
		.catch(error => console.log(error))
})

app.get("/squad", (req, res) => {
		fetch("https://v3.football.api-sports.io/players/squads?team=40", {
			method: "GET",
			headers: {
				"x-apisports-key" : process.env.LIVERPOOL_APP_X_APISPORTS_KEY
			}
		})
		.then(response => response.json())
		.then(data => res.json(data))
		.catch(error => console.log(error))
})

app.get("/table", (req, res) => {
	fetch("https://v3.football.api-sports.io/standings?league=39&season=2022", {
			method: "GET",
			headers: {
				"x-apisports-key" : process.env.LIVERPOOL_APP_X_APISPORTS_KEY
			}
		})
		.then(response => response.json())
		.then(data => res.json(data.response))
		.catch(error => console.log(error))
})

app.listen(8000, () => console.log(`Server running on port ${PORT}`));