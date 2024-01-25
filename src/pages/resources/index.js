/** @jsx jsx */

import { jsx, Grid, Box } from 'theme-ui'
import { Container } from 'components/atoms'
import { CardLexicon } from 'components/molecules'
import { MainLayout } from 'components/templates'

const ResourcesPage = () => (
	<MainLayout section="Resources">
		<Container>
			<Grid gap="2rem">
				<Box sx={{ gridArea: ['1 / 1 / 4 / 2', null, '1 / 1 / 2 / 5'] }}>
					<CardLexicon
						dark
						icon="lexicon"
						title="Lexicon"
						text="Our Experience Language"
						to="/lexicon"
						cta="Get Started"
					/>
				</Box>
				<Box sx={{ gridArea: ['4 / 1 / 6 / 1', null, '1 / 5 / 2 / 7'] }}>
					<CardLexicon
						delay="0.1s"
						dark
						icon="liferayDesicon"
						title="Principles"
						text="What does good design look like at Liferay?"
						to="/principles"
						cta="First Things First"
					/>
				</Box>
				<Box sx={{ gridArea: ['6 / 1 / 7 / 1', null, '2 / 1 / 3 / 3'] }}>
					<CardLexicon
						delay=".4s"
						dark
						icon="heuristic_evaluation"
						title="Research Methods"
						text="Resources for design researchers"
						to="/resources/research"
						cta="Science!"
					/>
				</Box>
				<Box sx={{ gridArea: ['7 / 1 / 8 / 1', null, '2 / 3 / 3 / 7'] }}>
					<CardLexicon
						delay=".3s"
						dark
						icon="figma"
						title="Figma Resources"
						text="Open Source Design Projects"
						to="/resources/figma"
						cta="Help Us, Help You"
					/>
				</Box>
				<Box sx={{ gridArea: ['9 / 1 / 10 / 1', null, '3 / 1 / 4 / 4'] }}>
					<CardLexicon
						delay="0.2s"
						dark
						icon="whyBlueprints_one_color"
						title="Brand"
						text="Liferay's Brand Style Guidelines"
						to="https://brand.liferay.com"
						cta="Uncover Brand Insights"
					/>
				</Box>
				<Box sx={{ gridArea: ['11 / 1 / 12 / 1', null, '3 / 4 / 4 / 7'] }}>
					<CardLexicon
						delay=".5s"
						dark
						icon="waffle"
						title="Style"
						text="Digital Marketing Styleguide"
						to="https://style.liferay.design"
						cta="Get in Style"
					/>
				</Box>
				{/* <CardLexicon
						dark
						icon="fa_terminal"
						title="Dashboard"
						text="Coming Soon!"
						to="https://dashboard.liferay.design"
						cta="Sneak a Peek"
					/> */}
			</Grid>
		</Container>
	</MainLayout>
)

export default ResourcesPage
