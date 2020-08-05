/** @jsx jsx */

import { jsx, Grid, Box } from 'theme-ui'
import { Container, Link, Heading, Icon, NiceLink } from 'components/atoms'
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
			<Container
				padding="5rem 0 6rem"
				background="white"
				heading="Research Methods"
				color="black"
			>
				<Grid sx={{ variant: 'grids.threeCards' }}>
					{data.cards.edges.map(({ node }, index) => (
						<CardResource
							delay={`${index}` * 0.1 + 's'}
							key={node.id}
							title={slugToTitle('/resources/research/', node.fields.slug)}
							icon={slugToIcon('/resources/research/', node.fields.slug)}
							subtitle={node.frontmatter.subtitle}
							body={node.body}
						/>
					))}
					<Box sx={{ mt: '6rem' }}>
						<Link to="/resources/research-attribution">
							<Heading>Icon Attribution</Heading>
							<p>
								Thanks to the Noun Project for supplying many of the icons
								used in these cards.
							</p>
							<p>
								For a comprehensive list, visit our full attribution page.
							</p>
							<Icon
								sx={{ height: '1.4rem', stroke: 'primary' }}
								name="arrow"
							/>
						</Link>
					</Box>
				</Grid>
			</Container>
		</MainLayout>
	)
}

export const query = graphql`
	{
		cards: allMdx(
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
