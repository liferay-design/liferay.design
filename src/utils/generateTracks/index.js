// require('dotenv').config({ path: '../../.env' })

const fs = require('fs')
const readline = require('readline-sync')
const { google } = require('googleapis')
const { camelCase } = require('lodash')

// If modifying these scopes, delete token.json.
const SCOPES = [
	'https://www.googleapis.com/auth/spreadsheets.readonly',
	'https://www.googleapis.com/auth/drive.readonly',
	'https://www.googleapis.com/auth/drive.metadata.readonly',
]

const TOKEN_PATH = `${__dirname}/token.json`

/* Program Init */
fetchRows('1SSXTk-tmV89v7EzGpK81PHLlUcbZKehYkVcjvEgnsbY', 'live')
	.then(({ data }) => {
		const reducer = (accum, current) => accum.concat(current)

		const tracksObject = data.map(mapHtmlToTracks).reduce(reducer)

		fs.writeFileSync(
			`../../src/markdown/handbook/grow/career-paths/pathTracks.json`,
			`${JSON.stringify(tracksObject, null, 4)}`,
		)
	})
	.catch(e => console.log('error', e))

/* ------------------- */

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
				throw new Error(`error getting doc\n${error}`)
			}

			return { ...row, doc: data }
		}
	}

	return { data: structuredData }
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 */
async function authorize() {
	// TODO figure out how to get the key working
	// const CLIENT_SECRET = `${process.env.GATSBY_CLIENT_SECRET}`

	// if (!CLIENT_SECRET) {
	// 	console.log('No client secret. Will not pull updated tracks from Google Doc.')
	// 	process.exit(0)
	// }
	// console.log(process.env.development.GATSBY_CLIENT_SECRET)

	const credentials = {
		client_id:
			'655698641995-7ndk7eafer91crt2sph6ra323bqfe3rs.apps.googleusercontent.com',
		project_id: 'liferay-design-264322',
		auth_uri: 'https://accounts.google.com/o/oauth2/auth',
		token_uri: 'https://oauth2.googleapis.com/token',
		auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
		client_secret: 'TODO',
		redirect_uris: [
			'urn:ietf:wg:oauth:2.0:oob',
			'http://localhost',
			'https://happy-jackson-1b6bb8.netlify.com/',
		],
	}

	const { client_secret, client_id, redirect_uris } = credentials

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

function mapHtmlToTracks({ doc: html }) {
	const cheerio = require('cheerio')
	let tracks = []

	let currentTrack = {}

	const regex = /(<body.*>)(<h1.*)(<\/body>)/
	const extractedHtml = regex.exec(html)[2]

	const $ = cheerio.load(extractedHtml)

	let skill = ''

	let first = true

	const vertical = $('h1').text()

	$('h1')
		.siblings()
		.map(function(i, el) {
			if (el.name === 'h2') {
				if (first) {
					first = false
				} else if (!first) {
					tracks.push(currentTrack)
				}

				skill = $(this)
					.find('span')
					.text()

				currentTrack = {
					vertical: vertical,
					label: skill,
					levels: [],
				}
			} else if (el.attribs.class === 'subtitle') {
				const subtitle = $(this)
					.find('span')
					.text()

				currentTrack.description = subtitle
			} else if (el.name === 'h3') {
				const summary = $(this)
					.find('span')
					.text()

				summary.length > 0 &&
					currentTrack.levels.push({
						summary,
					})
			} else if (el.name === 'ul') {
				const milestoneLen = currentTrack.levels.length - 1
				currentTrack.levels[milestoneLen].signals = []

				$(this)
					.find('li')
					.map(function(_, el) {
						const signal = $(this)
							.find('span')
							.text()

						signal.length > 0 &&
							currentTrack.levels[milestoneLen].signals.push(signal)
					})
			}
		})

	if (tracks.length === 4) {
		tracks.push(currentTrack)
	}

	return tracks
}
