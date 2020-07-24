/** @jsx jsx */

import { jsx, Grid } from 'theme-ui'
import { Container } from 'components/atoms'
import { SEO, CardResource } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import { slugToTitle, slugToIcon } from 'utils'

export default ({ data }) => {
	return (
		<MainLayout section="Resources">
			<SEO
				description="Liferay Design Research"
				pageTitle="Liferay.Design | Research Resources"
			/>
			<Container background="white" heading="Research Methods" color="black">
				<Grid sx={{ variant: 'grids.threeCards' }}>
					{data.allMdx.edges.map(({ node }, index) => (
						<CardResource
							delay={`${index}` * 0.1 + 's'}
							key={node.id}
							title={slugToTitle('/resources/research/', node.fields.slug)}
							icon={slugToIcon('/resources/research/', node.fields.slug)}
							subtitle={node.frontmatter.subtitle}
							body={node.body}
						/>
					))}
				</Grid>
			</Container>
		</MainLayout>
	)
}

export const query = graphql`
	{
		allMdx(
			sort: { order: ASC, fields: fields___slug }
			filter: { fileAbsolutePath: { regex: "/(resources/research/)/" } }
		) {
			edges {
				node {
					id
					frontmatter {
						subtitle
					}
					body
					fields {
						slug
					}
				}
			}
		}
	}
`
