/** @jsx jsx */

import { jsx } from 'theme-ui'
import Header from './components/header.js'
import Footer from './components/footer.js'
import Designers from './components/designers.js'
import { ScrollProgress, ScrollArrow } from 'components/atoms'
import { SEO } from 'components/molecules'

const Promotions = () => {
	return (
		<div sx={{ fontFamily: 'modes.brand.body', color: 'mainL3' }}>
			<SEO
				pageTitle="Liferay Design | 2020 Promotions"
				description="Designers at Liferay are exceptional — a few this year earned title changes based on their hard work and in anticipation of expanded responsibility."
				previewImage=""
				twitterHandle="@liferaydesign"
			/>

			<ScrollProgress />
			<ScrollArrow />

			<Header />
			<Designers />

			<Footer />
		</div>
	)
}

export default Promotions
