/** @jsx jsx */

import { jsx, Flex, Box, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { Image } from 'components/atoms'
import { headshotPath, makeAuthorSlug } from 'utils'
import Background from './background'
import Foreground from './foreground'

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

	const screenshots = [1, 2]

	const Designers = graphqlData.designers.map(
		({ name, summary, highlights }, index) => (
			<Flex
				id={makeAuthorSlug(name.id)}
				key={index}
				sx={{
					position: 'relative',
					zIndex: 2,
					flexDirection: 'column',
					py: '10rem',
					'&:nth-of-type(2n+1)': {
						backgroundColor: 'hsla(205,57%,91%,0.2)',
						backdropFilter: 'blur(32px)',
						'> div#flip > :last-child': {
							order: '-1',
						},
					},
				}}
			>
				<Flex sx={{ maxWidth: '1280px', margin: '4rem auto' }} id="flip">
					<Box sx={{ width: '50%', mr: '10%' }}>
						<Text sx={{ color: 'primary', fontSize: 4 }}>{name.id}</Text>
						<Text
							as="h1"
							sx={{ fontSize: 6, maxWidth: '16ch', color: 'black', my: 2 }}
						>
							{name.title}
						</Text>
						<Text sx={{ fontSize: 4, lineHeight: 1.5 }}>{summary}</Text>
					</Box>
					<Box sx={{ width: '32%' }}>
						<Box
							sx={{
								position: 'relative',
								height: '16rem',
								width: '16rem',
							}}
						>
							<Image
								sx={{
									borderRadius: '1rem',
									position: 'absolute',
									top: 2,
									height: '100%',
									right: '0',
									left: '0',
									filter: 'blur(32px)',
									opacity: 0.8,
									zIndex: 0,
								}}
								src={headshotPath(name.id)}
							/>
							<Image
								sx={{
									height: '16rem',
									borderRadius: '1rem',
									position: 'relative',
									zIndex: 1,
								}}
								title={name.id}
								src={headshotPath(name.id)}
								alt={`${name.id}` + '‘s headshot'}
							/>
						</Box>
					</Box>
				</Flex>
				<Flex
					sx={{ maxWidth: '1280px', margin: '0 auto', flexDirection: 'column' }}
				>
					<Flex sx={{ width: '100%', justifyContent: 'space-between', my: 4 }}>
						{screenshots.map(index => (
							<Image
								key={index}
								sx={{ borderRadius: '1rem', width: '90%' }}
								src={
									'/images/2020/screenshots/' +
									makeAuthorSlug(name.id) +
									'-' +
									index +
									'.png'
								}
							/>
						))}
					</Flex>
					<Box sx={{ alignSelf: 'flex-start' }}>
						<Text
							sx={{
								color: 'black',
								fontSize: 4,
								fontWeight: 'heading',
								mb: 3,
							}}
						>
							Highlights
						</Text>
						<Text sx={{ fontSize: 4 }}>
							<ul
								sx={{
									columns: 2,
									columnWidth: '24ch',
									listStyle: 'none',
									ml: '4ch',
									'& li': {
										position: 'relative',
									},
									'& li:before': {
										content:
											'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxOSAxOSI+CiAgPHBhdGggc3Ryb2tlPSIjMDBCRjc2IiBzdHJva2Utd2lkdGg9IjUiIGQ9Ik0yLjA2MiAxMC43MzZsNS44MDUgNC4wMzdMMTYuNzQ3IDIiLz4KPC9zdmc+Cg==")',
										position: 'absolute',
										left: '-3.9ch',
										width: '.8em',
									},
								}}
							>
								{highlights.map(i => (
									<li key={i}>{i}</li>
								))}
							</ul>
						</Text>
					</Box>
				</Flex>
			</Flex>
		),
	)
	return (
		<section
			sx={{
				position: 'relative',

				background: 'white',
			}}
		>
			<Background />
			{Designers}
			<Foreground />
		</section>
	)
}
