/** @jsx jsx */

import { jsx, Flex, Text } from 'theme-ui'
import { SideTab } from 'components/molecules'
import MediaQuery from 'react-responsive'

const HeroBanner = () => (
	<Flex
		sx={{
			alignItems: 'center',
			justifyContent: ['flex-start', 'center', null],
			height: ['40vh', '448px', null],
			margin: '0 auto',
			pl: [3, 0, null],
			minWidth: '360px',
			position: 'relative',
			width: '100vw',
			maxWidth: '100%',
		}}
	>
		<Text
			as="h1"
			sx={{
				width: ['14ch', '20ch', null],
				fontSize: [5, 6, null],
				fontWeight: 'heading',
				color: 'white',
			}}
		>
			We are{' '}
			<Text as="span" sx={{ color: 'neutral1' }}>
				Liferayʼs global team of{' '}
			</Text>
			designers.
		</Text>
		<MediaQuery minWidth={'768px'}>
			<SideTab
				cta="We're&nbsp;Hiring"
				ctaUrl="/careers"
				image="/images/components/pj-thumb.jpg"
				innerCta="See Openings"
				subtitle="Read the job descriptions and apply to be a part of the team."
			/>
		</MediaQuery>
	</Flex>
)

export default HeroBanner
