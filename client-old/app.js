const express = require('express');
const app = express();
const path = require('path');

const clientRoot = path.join(__dirname, './client/');

app.use(
	'/public',
	express.static(
		path.join(clientRoot, '/dist')
	)
);

app.listen(
	8585,
	function() {
		console.log('listening on *:8585');
	}
);

const siteRoute = (request, response) => {
	response.sendFile(
		'index.html',
		{
			root: clientRoot
		}
	);
};

app.get(
	'/*',
	siteRoute
)