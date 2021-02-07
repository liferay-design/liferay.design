/** @jsx jsx */

import { jsx, Grid, Box, Flex, Button, Heading, Text } from 'theme-ui'
import { Container, Link, LiveTag, NiceLink } from 'components/atoms'
import { CardDefault, SEO } from 'components/molecules'
import { MainLayout } from 'components/templates'
import { graphql } from 'gatsby'
import { avatarPath } from 'utils'
import moment from 'moment'
import Card from './components/Card'

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
			<Container padding={{ py: [3, 5] }}>
				<Grid sx={{ variant: 'grids.twoCol' }}>
					<Box>
						<Heading
							as="h1"
							sx={{ fontSize: [6, 7], mb: '.4em', color: 'white' }}
						>
							Office Hours
						</Heading>
						<LiveTag />
						<Text sx={{ color: 'text', pr: 4, mb: [4, 0] }}>
							<p>
								An open time for anyone to ask questions, solve problems,
								or just hangout!
							</p>
							<p>
								{' '}
								Come with ideas, tips, or make yourself available to help
								others.{' '}
							</p>
							{/* hiding until we have recordings
							<p>
								Excerpts from Office Hours will be recorded and available
								at{' '}
								<Link
									sx={{ variant: 'links.light' }}
									to="/office-hours/sessions"
								>
									/office-hours/sessions
								</Link>
								.
							</p> */}
						</Text>
						<Card
							background="primary"
							title="Lexicon"
							hosts={['David Aragones', 'Ruben Jimenez']}
							schedule={[
								{
									startDate: '02/01/2021 15:00:00 UTC',
									endDate: '02/01/2021 16:00:00 UTC',
									calendarEvent:
										'https://liferay.design/office-hours/add-to-calendar/lexicon-1',
								},
								{
									startDate: '02/03/2021 11:30:00 UTC',
									endDate: '02/03/2021 12:30:00 UTC',
									calendarEvent:
										'https://liferay.design/office-hours/add-to-calendar/lexicon-2',
								},
							]}
						/>
					</Box>
					<Card
						background="charts.blue"
						title="Figma"
						icon="figma_app"
						hosts={['Paul Hanaoka', 'Abel Hancock']}
						schedule={[
							{
								label: 'Weekdays',
								startDate: '02/01/2021 23:00:00 UTC',
								endDate: '02/01/2021 24:00:00 UTC',
								calendarEvent:
									'https://liferay.design/office-hours/add-to-calendar/figma',
							},
						]}
					/>
				</Grid>
			</Container>
			<Container background="white" padding={{ py: 4 }}>
				<Grid sx={{ variant: 'grids.twoCol' }}>
					<Flex sx={{ flexDirection: 'column' }}>
						<Heading
							as="h2"
							sx={{
								mt: [0, 5],
								mb: 3,
								fontSize: [6, 7],
								color: 'background',
							}}
						>
							Requests
						</Heading>
						<Heading as="h3" sx={{ fontSize: [4,5], mb: 3, color: 'background' }}>
							We’re here to help.
						</Heading>
						<Text sx={{ pr: 4 }}>
							We’ll try to answer your requests during our office hours! If
							you can’t make our office hours you can still watch the
							recording any time. (You don’t have to submit a request to
							join Office Hours, show up whenever we are live!)
						</Text>
					</Flex>
					<Box sx={{ ml: ['-5vw', 'initial'] }}>
						{/* https://docs.google.com/forms/d/1MYcTLCYE3EjOMGMnjmwWcmBsoeZ1WDv8o4mPTqgc-Zk/edit see @paul if you'd like to edit this form */}
						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSevLEeifGIzY2Hcp_UTpPUxTeC6FcAA3cT0p05VN4yKfVRcgA/viewform?embedded=true"
							// width="540"
							// height="640"
							sx={{
								width: ['calc(100% + 5vw)', 540],
								height: [840, 640],
								float: ['initial', 'right'],
							}}
							frameborder="0"
							marginheight="0"
							marginwidth="0"
						>
							Loading…
						</iframe>
					</Box>
				</Grid>
			</Container>
			{/* hiding this for now
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
			</Container> */}
			<Container
				background="url(/images/office-hours/waveform.svg) no-repeat center/cover"
				padding={{ py: [2, 5], my: [2, 5] }}
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
