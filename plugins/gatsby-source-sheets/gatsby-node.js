const getSheet = require('./getSheet')

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }, configOptions) => {
	const { createNode } = actions

	delete configOptions.plugins

	return getSheet(configOptions.sheetId, configOptions.tabName).then(rows => {
		rows.data.forEach((row, i) => {
			const id = createNodeId(`${configOptions.tabName}-row-${i}`)

			const nodeData = processRow(row, id, createContentDigest)

			createNode(nodeData)
		})
	})
}

function processRow(row, id, createContentDigest) {
	const nodeContent = JSON.stringify(row)

	return {
		...row,
		id,
		parent: null,
		children: [],
		internal: {
			type: `GoogleDocs`,
			content: nodeContent,
			contentDigest: createContentDigest(row),
		},
	}
}
