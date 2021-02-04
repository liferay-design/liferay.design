/** @jsx jsx */

import { jsx, Grid, Box, Flex, Button, Heading, Text } from 'theme-ui'
import { Container, LiveTag, NiceLink } from 'components/atoms'
import { CardDefault, SEO } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import { avatarPath } from 'utils'
import moment from 'moment'

export default ({ data }) => {
	const utcStartTime = '2300'
	const utcEndTime = '000'
	const time =
		moment(utcStartTime, 'hmm')
			.local(true)
			.format('HH') +
		'—' +
		moment(utcEndTime, 'hmm')
			.local(true)
			.format('HH')

	// logic we need:
	// 1. use date (today) between 3-4PM to show "weekdays @time"
	// 2. weekday check — if weekday between #1 show "live now"
	// abel has weekday
	// var currentDate = new Date()
	// var currentDayOfWeek = currentDate.getDay()
	// if (currentDayOfWeek < 6) {
	// do something on weekdays
	//}

	return (
		<MainLayout section="Office Hours">
			<SEO description="TODO" pageTitle="Liferay.Design | Figma Office Hours" />
			<Container padding={{ py: 5 }}>
				<Grid sx={{ variant: 'grids.twoCol' }}>
					<Box>
						<Heading as="h1" sx={{ fontSize: 7, mb: '.4em', color: 'white' }}>
							Office Hours
						</Heading>
						<LiveTag/>
						<Text sx={{ color: 'text', pr: 4 }}>
							Open office hours, anyone can join. Bring your design
							questions, problems, or just hangout. Come with ideas, tips,
							or available to help others. Excerpts from Office Hours will
							be recorded and available here.
						</Text>
						<Box sx={{ mt: 5, height: '600px', background: 'pink' }}>
							Lexicon
						</Box>
					</Box>
					<Box sx={{ mt: 5, height: '600px', background: 'red' }}>Figma</Box>
				</Grid>
			</Container>
			<Container background="white" padding={{ py: 4 }}>
				<Grid sx={{ variant: 'grids.twoCol' }}>
					<Flex sx={{ flexDirection: 'column' }}>
						<Heading
							as="h2"
							sx={{ mt: 5, mb: 3, fontSize: 7, color: 'background' }}
						>
							Requests
						</Heading>
						<Heading as="h3" sx={{ fontSize: 5, mb: 3, color: 'background' }}>
							We’re here to help.
						</Heading>
						<Text sx={{ pr: 4 }}>
							We’ll try to answer your requests during our office hours! If
							you can’t make our office hours you can still watch the
							recording any time. (You don’t have to submit a request to
							join Office Hours, show up whenever we are live!)
						</Text>
					</Flex>
					<Box>
						{/* https://docs.google.com/forms/d/1MYcTLCYE3EjOMGMnjmwWcmBsoeZ1WDv8o4mPTqgc-Zk/edit see @paul if you'd like to edit this form */}
						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSevLEeifGIzY2Hcp_UTpPUxTeC6FcAA3cT0p05VN4yKfVRcgA/viewform?embedded=true"
							width="640"
							height="640"
							frameborder="0"
							marginheight="0"
							marginwidth="0"
						>
							Loading…
						</iframe>
					</Box>
				</Grid>
			</Container>
			<Container
				heading="Previous Sessions"
				linkText="See all"
				linkDestination="/office-hours/sessions"
			>
				<Grid sx={{ variant: 'grids.threeCards' }}>
					{data.allMdx.edges.map(({ node }, index) => (
						<CardDefault
							delay={`${index}` * 0.1 + 's'}
							avatarImage
							key={node.id}
							imageURL={node.frontmatter.featuredImage}
							link={node.fields.slug}
							title={node.frontmatter.title}
							subtitle={`${node.timeToRead}` + ' Min Read'}
							avatarImageURL={avatarPath(node.frontmatter.author.id)}
						/>
					))}
				</Grid>
			</Container>
			<Container
				background="url(/images/office-hours/waveform.svg) no-repeat center/cover"
				padding={{ py: 5, my: 5 }}
			>
				<Grid sx={{ variant: 'grids.twoCol' }}>
					<Box>
						<Heading as="h2" sx={{ fontSize: 6, pb: '4rem' }}>
							Get the good vibes streaming.
						</Heading>
						<NiceLink to="#">Open the Spotify playlist</NiceLink>
					</Box>
					<Box>
						<iframe
							src="https://open.spotify.com/embed/playlist/7xclcaljk4yEJZoVMxbEWY"
							width="420"
							height="480"
							frameborder="0"
							allowtransparency="true"
							allow="encrypted-media"
							sx={{
								maxWidth: '100%',
								float: ['initial', 'right'],
								borderRadius: '2em',
								border: 'solid 1em rgba(255,255,255,0.05)',
							}}
						>
							Loading...
						</iframe>
					</Box>
				</Grid>
			</Container>
		</MainLayout>
	)
}

export const query = graphql`
	{
		allMdx(
			filter: {
				fileAbsolutePath: { regex: "/(articles)/" }
				frontmatter: {
					publish: { eq: true }
					tags: { nin: ["Talks", "Best Practices"] }
				}
			}
			sort: { order: DESC, fields: [frontmatter___date] }
			limit: 3
		) {
			totalCount
			edges {
				node {
					id
					timeToRead
					frontmatter {
						title
						featuredImage
						author {
							id
						}
						tags
					}
					fields {
						slug
					}
					excerpt
				}
			}
		}
	}
`
