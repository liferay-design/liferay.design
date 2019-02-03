const fs = require('fs')
const readline = require('readline-sync')
const { google } = require('googleapis')

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
const TOKEN_PATH = `${process.cwd()}/token.json`

module.exports = getRows

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
async function getRows(sheetId, tabName) {
	const auth = await authorize()

	const sheets = google.sheets({ version: 'v4', auth })

	const {
		data: { values },
	} = await sheets.spreadsheets.values.get({
		spreadsheetId: sheetId,
		range: tabName,
	})

	const columnNames = values[0]

	const structuredData = values.slice(1).map(row => {
		const rowObject = {}

		row.forEach((cell, i) => {
			rowObject[columnNames[i]] = cell
		})

		return rowObject
	})

	console.log('structuredData', structuredData)

	return { data: structuredData }
}

function getCredentials() {
	try {
		var credentials = fs.readFileSync(`${process.cwd()}/credentials.json`)
	} catch (err) {
		throw new Error(`Error loading credentials for gatsby google sheets: ${err}`)
	}

	return JSON.parse(credentials)
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 */
function authorize() {
	const { client_secret, client_id, redirect_uris } = getCredentials().installed

	const oAuth2Client = new google.auth.OAuth2(
		client_id,
		client_secret,
		redirect_uris[0],
	)

	// Check if we have previously stored a token.
	try {
		var token = fs.readFileSync(TOKEN_PATH)
	} catch (err) {
		return getNewToken(oAuth2Client)
	}

	oAuth2Client.setCredentials(JSON.parse(token))

	return oAuth2Client
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 */
async function getNewToken(oAuth2Client) {
	const authUrl = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES,
	})

	console.log('Authorize this app by visiting this url:', authUrl)

	const code = readline.question('Enter the code from that page here: ')

	const token = await oAuth2Client.getToken(code)

	oAuth2Client.setCredentials(token)

	fs.writeFileSync(TOKEN_PATH, JSON.stringify(token))

	console.log('Token stored to', TOKEN_PATH)

	return oAuth2Client
}
