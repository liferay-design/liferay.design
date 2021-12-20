/** @jsx jsx */

import { jsx, Box, Text } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import { Link, Image, AnimateIn } from 'components/atoms'
import { headshotPath, firstWord, makeAuthorSlug } from 'utils'

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
						}
					}
				}
			}
		}
	`)

	const graphqlData = data.allAnnualReportsYaml.nodes[0].promotionsPage

	const radius = '28'

	const Headshots = graphqlData.designers.map(({ name }, index) => (
		<Box
			sx={{
				display: 'inline-block',
				transform: 'rotate(' + index * 60 + 'deg)',
				transformOrigin: radius + 'vh ' + radius + 'vh',
				position: 'absolute',
			}}
		>
			<AnimateIn
				key={index}
				delay={0.1 + `${index}` * 0.1 + 's'}
				sx={
					{
						// '&:nth-of-type(2n+0)': {
						// 	mt: [4, 5, null],
						// },
					}
				}
			>
				<Link
					target="_self"
					to={'/2021/promotions#' + makeAuthorSlug(name.id)}
					sx={{
						position: 'relative',
						display: 'block',
						transform: 'rotate(' + index * -60 + 'deg)',
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
							borderRadius: '50%',
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
							borderRadius: '50%',
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
				<Text
					sx={{
						variant: 'text.preheader',
						textAlign: 'center',
						transform: 'rotate(' + index * -60 + 'deg)',
						transformOrigin: '5rem -6.5rem',
					}}
				>
					{firstWord(name.id)}
				</Text>
			</AnimateIn>
		</Box>
	))
	return (
		<Box
			sx={{
				position: 'absolute',
				left: '56%',
				width: radius * 2 + 'vh',
				height: radius * 2 + 'vh',
				my: 4,
			}}
		>
			{Headshots}
		</Box>
	)
}
