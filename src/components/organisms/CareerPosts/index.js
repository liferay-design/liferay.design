/** @jsx jsx */

import { jsx, Grid } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { CardDefault } from 'components/molecules'

export default ({ limit, ...props }) => {
	const data = useStaticQuery(graphql`
	{
		allMdx(
			filter: {
				fileAbsolutePath: { regex: "/(careers)/" }
				frontmatter: { published: { eq: true } }
			}
			sort: { fields: frontmatter___date, order: ASC }
		) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						office {
							city
							region {
								countries
								countryIcon
							}
							country
							countryIcon
						}
						featuredImage
						remote
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
		<Grid {...props}>
			{data.allMdx.edges.slice(0, limit).map(({ node }, index) => (
						<CardDefault
							delay={`${index}` * 0.1 + 's'}
							avatarImage
							pill
							tag={node.frontmatter.remote === true ? 'Remote Available 😊' : null}
							key={node.id}
							imageURL={node.frontmatter.featuredImage}
							link={node.fields.slug}
							title={node.frontmatter.title}
							subtitle={
								node.frontmatter.remote === true
									? node.frontmatter.office.country
									: node.frontmatter.office.city
							}
							avatarImageURL={
								node.frontmatter.remote === true
									? node.frontmatter.office.countryIcon
									: node.frontmatter.office.countryIcon
							}
						/>
					))}
		</Grid>
	)
}
