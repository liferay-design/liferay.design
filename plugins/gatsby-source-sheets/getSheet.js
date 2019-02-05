const fs = require('fs')
const readline = require('readline-sync')
const { google } = require('googleapis')
const camelCase = require('lodash.camelcase')

// If modifying these scopes, delete token.json.
const SCOPES = [
	'https://www.googleapis.com/auth/spreadsheets.readonly',
	'https://www.googleapis.com/auth/drive.readonly',
	'https://www.googleapis.com/auth/drive.metadata.readonly',
]

const TOKEN_PATH = `${process.cwd()}/token.json`

function fetchDoc(id, auth) {
	const drive = google.drive({ version: 'v3', auth })

	return drive.files.export({ fileId: id, mimeType: 'text/html' })
}

async function fetchRows(sheetId, tabName) {
	const auth = await authorize()

	const sheets = google.sheets({ version: 'v4', auth })

	const {
		data: { values },
	} = await sheets.spreadsheets.values.get({
		spreadsheetId: sheetId,
		range: tabName,
	})

	const columnNames = values[0]

	const structuredData = await Promise.all(
		values
			.slice(1)
			.map(structureData)
			.map(getDocHtml),
	)

	function structureData(row) {
		const rowObject = {}

		row.forEach((cell, i) => {
			rowObject[camelCase(columnNames[i])] = cell
		})

		return rowObject
	}

	async function getDocHtml(row) {
		if (row.doc) {
			try {
				var { data } = await fetchDoc(row.doc, auth)
			} catch (error) {
				throw new Error(`doin stuff ${error}`)
			}

			return { ...row, doc: data }
		}
	}

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
async function authorize() {
	const { client_secret, client_id, redirect_uris } = getCredentials().installed

	const oAuth2Client = new google.auth.OAuth2(
		client_id,
		client_secret,
		redirect_uris[0],
	)

	if (!fs.existsSync(TOKEN_PATH)) {
		var { tokens } = await getNewToken(oAuth2Client)

		fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens))

		console.log('Token stored to', TOKEN_PATH)
	} else {
		var tokens = JSON.parse(fs.readFileSync(TOKEN_PATH))
	}

	oAuth2Client.setCredentials(tokens)

	return oAuth2Client
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 */
function getNewToken(oAuth2Client) {
	const authUrl = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES,
	})

	console.log('Authorize this app by visiting this url:', authUrl)

	const code = readline.question('Enter the code from that page here: ')

	return oAuth2Client.getToken(code)
}

module.exports = fetchRows
