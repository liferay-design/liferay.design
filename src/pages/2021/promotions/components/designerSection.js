/** @jsx jsx */

import { jsx, Flex, Box, Text, Heading } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { Image } from 'components/atoms'
import { headshotPath, makeAuthorSlug } from 'utils'
import Background from './background'
import Foreground from './foreground'

export default ({}) => {
	const data = useStaticQuery(graphql`
		{
			allAnnualReportsYaml(filter: { year: { eq: 2021 } }) {
				nodes {
					promotionsPage {
						designers {
							name {
								id
							}
							title
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
		({ name, title, summary, highlights }, index) => (
			<Flex
				id={makeAuthorSlug(name.id)}
				key={index}
				sx={{
					position: 'relative',
					zIndex: 2,
					flexDirection: 'column',
					py: [4, '10rem', null],
					px: [1, 'initial', null],
					'&:nth-of-type(2n+1)': {
						backdropFilter: 'blur(64px)',
						backgroundColor: 'hsla(0,0%,97%,0.08)',
						'> div#flip > :last-child': {
							order: '-1',
						},
					},
				}}
			>
				<Flex
					sx={{
						maxWidth: '1280px',
						px: [2, 0, null],
						margin: '4rem auto',
						flexWrap: ['wrap', 'no-wrap', null],
					}}
					id="flip"
				>
					<Box
						sx={{
							width: ['100%', '50%', null],
							mr: '10%',
							mt: [3, 'initial', null],
						}}
					>
						<Text sx={{ variant: 'text.preheader' }}>{name.id}</Text>
						<Heading
							as="h1"
							sx={{
								variant: 'text.display',
								color: 'darkHeadline',
								py: 2,
								ml: '-.16ch',
							}}
						>
							{title}
						</Heading>
						<Text sx={{ variant: 'text.body', color: 'darkText' }}>
							{summary}
						</Text>
					</Box>
					<Box
						sx={{
							width: ['100%', '32%', null],
							order: [-1, 'initial', null],
						}}
					>
						<Box
							sx={{
								position: 'relative',
								height: ['12rem', '16rem', null],
								width: ['12rem', '16rem', null],
								ml: ['-.5rem', 'initial'],
							}}
						>
							<Image
								sx={{
									borderRadius: '50%',
									position: 'absolute',
									visibility: ['hidden', 'initial', null],
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
									height: ['12rem', '16rem', null],
									borderRadius: '50%',
									position: 'relative',
									zIndex: 1,
									boxShadow: [
										'0 .2rem 3rem -.2rem rgba(0, 14, 85, .2), 0 .4rem 2rem -.3rem rgba(0, 74, 215, .4)',
										'none',
										null,
									],
								}}
								title={name.id}
								src={headshotPath(name.id)}
								alt={`${name.id}` + '‘s headshot'}
							/>
						</Box>
					</Box>
				</Flex>
				<Flex
					sx={{
						maxWidth: '1280px',
						px: [2, 0, null],
						margin: '0 auto',
						flexDirection: 'column',
					}}
				>
					<Flex
						sx={{
							width: '100%',
							justifyContent: 'space-between',
							flexDirection: ['column', 'row', null],
							my: [0, 4, null],
						}}
					>
						{screenshots.map(index => (
							<Image
								key={index}
								sx={{
									borderRadius: '1rem',
									boxShadow: '0 6px 36px -4px rgba(36,41,70,0.1)',
									width: ['100%', '90%', null],
									my: [3, 'initial', null],
								}}
								src={
									'/images/2021/screenshots/' +
									makeAuthorSlug(name.id) +
									'-' +
									index +
									'.png'
								}
							/>
						))}
					</Flex>
					<Box sx={{ alignSelf: 'flex-start', width: '100%' }}>
						<Text
							sx={{
								variant: 'text.preheader',
								py: 2,
							}}
						>
							Highlights
						</Text>
						<Text sx={{ variant: 'text.body' }}>
							<ul
								sx={{
									columns: 3,
									columnWidth: '24ch',
									listStyle: 'none',
									ml: '.1ch',
									'& li': {
										position: 'relative',
									},
									'& li:before': {
										content: '""',
										display: 'inline-block',
										height: '.8em',
										width: '.8em',
										backgroundImage:
											'url(/images/2020/green-check.png)',
										backgroundImage:
											'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxOSAxOSI+CiAgPHBhdGggc3Ryb2tlPSIjMDBCRjc2IiBzdHJva2Utd2lkdGg9IjUiIGQ9Ik0yLjA2MiAxMC43MzZsNS44MDUgNC4wMzdMMTYuNzQ3IDIiLz4KPC9zdmc+Cg==")',
										backgroundSize: ' contain',
										backgroundRepeat: 'no-repeat',
										mr: '2ch',
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
				backgroundColor: theme => theme.colors.backgroundLight,
			}}
		>
			{/* <Background /> */}
			{Designers}
			{/* <Foreground /> */}
		</section>
	)
}
