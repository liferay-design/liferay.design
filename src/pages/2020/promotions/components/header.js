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
							}
						}
					}
				}
			}
		}
	`)

	const imagePath = '/images/headshots/'

	const graphqlData = data.allAnnualReportsYaml.nodes[0].promotionsPage

	console.log(graphqlData, 'data')

	const Header = (
		<Container>
			<Grid
				sx={{
					gridTemplateColumns: 'repeat(6, 1fr)',
					gridTemplateRows: 'repeat(3, 1fr)',
					gridColumnGap: '16px',
					gridRowGap: '16px',
					alignItems: 'center',
				}}
			>
				<Heading sx={{ color: 'main', fontSize: 6, gridArea: '1 / 2 / 2 / 6' }}>
					{promotions.title}
				</Heading>
				<Flex
					sx={{
						gridArea: '2 / 1 / 3 / 7',
						width: '100%',
						justifyContent: 'space-between',
					}}
				>
					{graphqlData.designers.map(({ name }, index) => (
						<AnimateIn
							delay={`${index}` * 0.1 + 's'}
							sx={{
								'&:nth-child(2n+0)': {
									mt: 4,
								},
							}}
						>
							<Box sx={{ position: 'relative' }}>
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
										height: '10rem',
										width: '10rem',
										borderRadius: '1rem',
									}}
									title={name.id}
									src={headshotPath(name.id)}
									alt={`${name.id}` + '‘s headshot'}
								/>
							</Box>
							<Text sx={{ color: 'mainL4' }}>{firstWord(name.id)}</Text>
						</AnimateIn>
					))}
				</Flex>
				<Heading
					sx={{
						gridArea: '3 / 2 / 4 / 6',
						width: '48ch',
						lineHeight: '1.5',
						color: 'mainL3',
						fontFamily: 'modes.brand.body',
						fontSize: 4,
						fontWeight: 'body',
					}}
				>
					{promotions.subtitle}
				</Heading>
			</Grid>
		</Container>
	)
	return <section>{Header}</section>
}
