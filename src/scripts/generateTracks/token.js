require('dotenv').config()
const fs = require('fs')

module.exports = {
	access_token: process.env.ACCESS_TOKEN,
	refresh_token: process.env.REFRESH_TOKEN,
	scope:
		'https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/spreadsheets.readonly',
	token_type: 'Bearer',
	expiry_date: 1558633516205,
}

fs.writeFileSync(`${__dirname}/token.json`, JSON.stringify(module.exports))
