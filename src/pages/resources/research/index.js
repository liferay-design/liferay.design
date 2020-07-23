import { CardGrid, Container, Heading, AnimateIn, Icon } from 'components/atoms'
import { CardDefault, SEO } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import React from 'react'
import { slugToTitle, slugToIcon } from 'utils'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styles from './styles.module.scss'
import { fontSizes } from 'theme/'


export default ({ data }) => {

	return (
		<MainLayout section="Resources">
			<SEO
				description="Liferay Design Research"
				pageTitle="Liferay.Design | Research Resources"
			/>
			<Container background="white" heading="Research Methods" color="black">
				<CardGrid>
					{data.allMdx.edges.map(({ node }, index) => (
						<AnimateIn key={node.id} delay={`${index}` * 0.1 + 's'}>
							<article>
								<header>
									<Heading
										level={1}
										additionalStyles={{ fontSize: fontSizes.medium }}
									>
										{slugToTitle(
											'/resources/research/',
											node.fields.slug,
										)}
									</Heading>
									<Icon
										name={slugToIcon(
											'/resources/research/',
											node.fields.slug,
                                        )}
                                        color='white'
									/>
								</header>
								<section>
									<Heading
										level={2}
										additionalStyles={{ fontSize: fontSizes.base }}
									>
										{node.frontmatter.subtitle}
									</Heading>
									<MDXRenderer>{node.body}</MDXRenderer>
								</section>
							</article>
						</AnimateIn>
					))}
				</CardGrid>
			</Container>
		</MainLayout>
	)
}

export const query = graphql`
	{
		allMdx(filter: { fileAbsolutePath: { regex: "/(resources/research)/" } }) {
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
