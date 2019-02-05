const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')

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

	return Promise.all([generateMarkdownPages(createPage, graphql)])
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

function generateGoogleDocPages(createPage, graphql) {
	return graphql(`
		query {
			allGoogleDocs {
				edges {
					node {
						id
						doc
					}
				}
			}
		}
	`).then(({ data, errors }) => {
		if (errors) {
			console.log('Error creating pages in `createPages` call ==>', errors)
			reject(errors)
		}

		data.allGoogleDocs.edges.forEach(({ node }) => {
			const templateFile = path.resolve(
				`./src/components/templates/${capFirstLetter(template)}/index.js`,
			)

			createPage({
				path: node.fields.slug,
				component: componentWithMDXScope(templateFile, node.code.scope),
				context: {
					slug: node.fields.slug,
				},
			})
		})
	})
}

function generateMarkdownPages(createPage, graphql) {
	return graphql(`
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
				component: componentWithMDXScope(templateFile, node.code.scope),
				context: {
					slug: node.fields.slug,
				},
			})
		})
	})
}
