/** @jsx jsx */

import { jsx, Flex, Heading, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { Link, Image, AnimateIn } from 'components/atoms'
import { headshotPath, firstWord, makeAuthorSlug } from 'utils'

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

	const graphqlData = data.allAnnualReportsYaml.nodes[0].promotionsPage

	const Header = (
		<Flex sx={{ background: 'white', height: '100vh' }}>
			<Flex
				sx={{
					justifyContent: 'center',
					maxWidth: '1280px',
					margin: '0 auto',
					flexDirection: 'column',
					width: '100%',
				}}
			>
				<Heading sx={{ ml: '17%', mb: 4, color: 'main', fontSize: 6 }}>
					{promotions.title}
				</Heading>
				<Flex
					sx={{
						width: '100%',
						justifyContent: 'space-between',
						my: 4,
					}}
				>
					{graphqlData.designers.map(({ name }, index) => (
						<AnimateIn
							key={index}
							delay={`${index}` * 0.1 + 's'}
							sx={{
								'&:nth-of-type(2n+0)': {
									mt: 4,
								},
							}}
						>
							<Link
								target="_self"
								to={'#' + makeAuthorSlug(name.id)}
								sx={{
									position: 'relative',
									display: 'block',
									'&:hover > figure:nth-of-type(2)': {
										transform: 'translateY(-.2em) scale(1.04)',
										transition: 'transform .2s ease-in-out',
									},
									'& > figure:nth-of-type(2)': {
										transition: 'transform .3s ease-in-out',
									},
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
										height: '10rem',
										width: '10rem',
										borderRadius: '1rem',
									}}
									title={name.id}
									src={headshotPath(name.id)}
									alt={`${name.id}` + '‘s headshot'}
								/>
							</Link>
							<Text sx={{ color: 'mainL4' }}>{firstWord(name.id)}</Text>
						</AnimateIn>
					))}
				</Flex>
				<Text
					as="h2"
					sx={{
						ml: '17%',
						width: '48ch',
						lineHeight: '1.5',
						fontFamily: 'modes.brand.body',
						fontSize: 4,
						fontWeight: 'body',
					}}
				>
					{promotions.subtitle}
				</Text>
			</Flex>
		</Flex>
	)
	return <div>{Header}</div>
}
