require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

const fs = require('fs')

module.exports = {
	access_token: process.env.GATSBY_ACCESS_TOKEN,
	refresh_token: process.env.GATSBY_REFRESH_TOKEN,
	scope:
		'https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/spreadsheets.readonly',
	token_type: 'Bearer',
	expiry_date: 1578359997406,
}

fs.writeFileSync(`${__dirname}/token.json`, JSON.stringify(module.exports))
