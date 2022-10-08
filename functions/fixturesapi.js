const axios = require("axios");

exports.handler = async (event, context) => {
	const apiKey = process.env.API_KEY;
	const url = "https://v3.football.api-sports.io/fixtures?season=2022&team=40&from=2022-07-11&to=2023-05-28"
	const {data} = await axios.get(url, {
		headers: {
			"x-apisports-key" : apiKey
		}
	})
	try {
		return {
			statusCode: 200,
			body: JSON.stringify(data)
		}
	} catch (error) {
		console.log(error)
	}
}