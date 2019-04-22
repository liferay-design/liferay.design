const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === 'Mdx') {
		const slug = createFilePath({ node, getNode }).replace('/markdown/', '/')

		createNodeField({
			node,
			name: 'slug',
			value: slug,
		})
	}
}

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		resolve(
			graphql(`
				query {
					allMdx {
						edges {
							node {
								id
								fields {
									slug
								}
								code {
									scope
								}
							}
						}
					}
				}
			`).then(({ data, errors }) => {
				if (errors) {
					console.log('Error creating pages in `createPages` call ==>', errors)
					reject(errors)
				}

				data.allMdx.edges.forEach(({ node }) => {
					const template = node.fields.slug.split('/')[1]

					const templateFile = path.resolve(
						`./src/components/templates/${capFirstLetter(template)}/index.js`,
					)

					createPage({
						path: node.fields.slug,
						component: templateFile,
						context: {
							slug: node.fields.slug,
						},
					})
				})
			}),
		)
	})
}

function capFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

// Called after every page is created.
// This section is used for client only gated routes like blueprints pages
exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions

	var pageMap = {
		['blueprints']: ['blueprints'],
		['handbook']: ['handbook'],
	}

	for (key in pageMap)
		if (page.path.match(/^\/pageMap[key]/)) {
			page.matchPath = '/key/*'

			// Update the page.
			createPage(page)
		}
}
