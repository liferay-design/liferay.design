/** @jsx jsx */

import { jsx, Flex, Grid, Heading, Box, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { Link, Icon, Image, Container, AnimateIn } from 'components/atoms'
import { headshotPath, firstWord } from 'utils'

const { kebabCase } = require(`lodash`)

import yaml from 'markdown/annual-reports/TwentyTwenty.yaml'

const promotions = yaml.promotionsPage

export default ({}) => {
	const data = useStaticQuery(graphql`
		{
			allAnnualReportsYaml(
				filter: { promotionsPage: { title: { eq: "Congratulations" } } }
			) {
				nodes {
					promotionsPage {
						designers {
							name {
								id
								title
							}
							summary
							highlights
						}
					}
				}
			}
		}
	`)

	const graphqlData = data.allAnnualReportsYaml.nodes[0].promotionsPage

	const Designers = graphqlData.designers.map(
		({ name, summary, highlights }, index) => (
			<Flex
				sx={{
					'&:nth-child(2n+0)': {
						backgroundColor: 'hsla(205,57%,91%,0.2)',
						backdropFilter: 'blur(32px)',
						'> div > :last-child': {
							order: '-1',
						},
					},
				}}
			>
				<Flex sx={{ maxWidth: '1280px', margin: '10rem auto' }}>
					<Box sx={{ width: '60%' }}>
						<Text sx={{ color: 'mainL4' }}>{name.id}</Text>
						<Heading>{name.title}</Heading>
						<Text>{summary}</Text>
						<ul>
							{highlights.map(i => (
								<li>{i}</li>
							))}
						</ul>
					</Box>
					<Box sx={{ width: '40%' }}>
						<Box
							sx={{
								position: 'relative',
								height: '20rem',
								width: '20rem',
							}}
						>
							<Image
								sx={{
									borderRadius: '1rem',
									position: 'absolute',
									top: 1,
									height: '100%',
									right: '0',
									left: '0',
									filter: 'blur(32px)',
									opacity: 0.8,
									zIndex: -1,
								}}
								src={headshotPath(name.id)}
							/>
							<Image
								sx={{
									height: '20rem',
									borderRadius: '1rem',
								}}
								title={name.id}
								src={headshotPath(name.id)}
								alt={`${name.id}` + '‘s headshot'}
							/>
						</Box>
					</Box>
				</Flex>
			</Flex>
		),
	)
	return (
		<section sx={{ background: 'url("/images/2020/background.svg") center/cover no-repeat fixed' }}>
			{Designers}
		</section>
	)
}
