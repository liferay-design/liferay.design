/** @jsx jsx */

import { jsx, Flex, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { Link, Image, AnimateIn } from 'components/atoms'
import { headshotPath, firstWord, makeAuthorSlug } from 'utils'

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

	const Headshots = graphqlData.designers.map(({ name }, index) => (
		<AnimateIn
			key={index}
			delay={0.1 + `${index}` * 0.1 + 's'}
			sx={{
				'&:nth-of-type(2n+0)': {
					mt: [3, 4, null],
				},
			}}
		>
			<Link
				target="_self"
				to={'/2020/promotions#' + makeAuthorSlug(name.id)}
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
						visibility: ['hidden', 'initial', null],
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
			</Link>
			<Text sx={{ color: 'mainL4' }}>{firstWord(name.id)}</Text>
		</AnimateIn>
	))
	return (
		<Flex
			sx={{
				width: '100%',
				justifyContent: ['space-around', 'space-between', null],
				my: 4,
				flexWrap: ['wrap', 'no-wrap', null],
			}}
		>
			{Headshots}
		</Flex>
	)
}
