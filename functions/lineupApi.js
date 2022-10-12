const axios = require("axios");

exports.handler = async (event, context) => {
	const fixtureId = event.queryStringParameters.fixture;
	const apiKey = process.env.API_KEY;
	const url = `https://v3.football.api-sports.io/fixtures/lineups?fixture=${fixtureId}`
	const { data } = await axios.get(url, {
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