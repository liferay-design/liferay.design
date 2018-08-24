const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode }).replace('/markdown/', '/')

		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							fields {
								slug
							}
						}
					}
				}
			}
		`).then(result => {
			result.data.allMarkdownRemark.edges.forEach(({ node }) => {
				const template = node.fields.slug.split('/')[1]

				function capFirstLetter(string) {
					return string.charAt(0).toUpperCase() + string.slice(1)
				}

				createPage({
					path: node.fields.slug,
					component: path.resolve(
						`./src/components/templates/${capFirstLetter(template)}/index.js`,
					),
					context: {
						slug: node.fields.slug,
					},
				})
			})
			resolve()
		})
	})
}

// Called after every page is created.
// This section is used for client only gated routes like blueprints pages
exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions

	if (page.path.match(/^\/blueprints/)) {
		page.matchPath = '/blueprints/*'

		// Update the page.
		createPage(page)
	}
}
