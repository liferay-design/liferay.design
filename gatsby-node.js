const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')
const moment = require(`moment`)

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

	const markdown = graphql(`
		{
			markdown: allMdx {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							tags
						}
						body
					}
				}
			}
		}
	`).then(({ data, errors }) => {
		if (errors) {
			console.log('Error creating markdown pages in `createPages` call ==>', errors)
			reject(errors)
		}

		const pages = data.markdown.edges
		pages.forEach(({ node }) => {
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
		const tagTemplate = path.resolve('src/components/templates/Tags/index.js')
		// Tag pages:
		let tags = []
		// Iterate through each post, putting all found tags into `tags`
		_.each(pages, edge => {
			if (_.get(edge, 'node.frontmatter.tags')) {
				tags = tags.concat(edge.node.frontmatter.tags)
			}
		})
		// Eliminate duplicate tags
		tags = _.uniq(tags)
		// Make tag pages
		tags.forEach(tag => {
			createPage({
				path: `/tags/${_.kebabCase(tag)}/`,
				component: tagTemplate,
				context: {
					tag,
				},
			})
		})
	})

	const newsletters = graphql(`
		{
			mailchimp: allNewsletters(
				filter: {
					settings: { title: { regex: "/Newsletter/" } }
					emails_sent: { gt: 20 }
				}
			) {
				edges {
					node {
						archive_url
						archive_html
						settings {
							title
							subject_line
							preview_text
						}
						emails_sent
						send_time
					}
				}
			}
		}
	`).then(({ data, errors }) => {
		if (errors) {
			console.log('Error creating newsletter pages in `createPages` call ==>', errors)
			reject(errors)
		}

		const newsletters = data.mailchimp.edges
		newsletters.forEach(({ node }) => {
			const templateFile = path.resolve(
				`./src/components/templates/Newsletters/index.js`,
			)

			const slug = `${moment(node.send_time).format('YYYY-MM')}`

			createPage({
				path: '/newsletter/' + slug,
				component: templateFile,
				context: {
					slug: slug,
					send_time: node.send_time,
				},
			})
		})
	})

	return Promise.all([markdown, newsletters])
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
