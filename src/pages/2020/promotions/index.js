/** @jsx jsx */

import { jsx } from 'theme-ui'
import Header from './components/header.js'
import Footer from './components/footer.js'
import Designers from './components/designerSection.js'
import { Link, Icon, ScrollArrow } from 'components/atoms'
import { SEO } from 'components/molecules'

const Promotions = () => {
	return (
		<div sx={{ fontFamily: 'modes.brand.body', color: 'mainL3' }}>
			<SEO
				pageTitle="Liferay Design | 2020 Promotions"
				description="Designers at Liferay are exceptional — a few this year earned title changes based on their hard work and in anticipation of expanded responsibility."
				previewImage="/images/2020/promotions-og.png"
				twitterHandle="@liferaydesign"
			/>

			<Link
				sx={{
					variant: 'links.nice',
					color: 'white',
					top: '2rem',
				}}
				to="/2020"
			>
				Go to 2020 Report
				<Icon sx={{ m: '0 1em' }} name="rightArrow" />
			</Link>

			<ScrollArrow
				sx={{
					left: ['initial', '2rem', null],
					right: ['2rem', 'initial', null],
				}}
			/>

			<Header />

			<Designers />

			<Footer />
		</div>
	)
}

export default Promotions
