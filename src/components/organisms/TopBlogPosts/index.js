/** @jsx jsx */

import { jsx, Grid } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { CardDefault } from 'components/molecules'
import { avatarPath } from 'utils'

export default () => {
	const data = useStaticQuery(graphql`
		{
			allMdx(
				limit: 3
				filter: {
					fileAbsolutePath: { regex: "/(articles)/|/(events)/" }
					frontmatter: { publish: { eq: true }, tags: { nin: ["Talks"] } }
				}
				sort: { order: DESC, fields: [frontmatter___date] }
			) {
				totalCount
				edges {
					node {
						id
						timeToRead
						frontmatter {
							title
							featuredImage
							author {
								id
							}
							tags
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`)
	return (
		<Grid sx={{ variant: 'grids.threeCards' }}>
			{data.allMdx.edges.map(({ node }, index) => (
				<CardDefault
					avatarImage
					delay={`${index}` * 0.1 + 's'}
					key={node.id}
					imageURL={node.frontmatter.featuredImage}
					link={node.fields.slug}
					title={node.frontmatter.title}
					subtitle={`${node.timeToRead}` + ' Min Read'}
					avatarImageURL={avatarPath(node.frontmatter.author.id)}
				/>
			))}
		</Grid>
	)
}
