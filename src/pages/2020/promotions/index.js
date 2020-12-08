/** @jsx jsx */

import { jsx, Grid, Box } from 'theme-ui'
import Header from './components/header.js'
import Designers from './components/designers.js'
import {
	Flex,
	Link,
	Heading,
	Container,
	Image,
	Icon,
	ScrollProgress,
	ScrollArrow,
} from 'components/atoms'
import { SEO, FancyFooter, FormNewsletter } from 'components/molecules'
import { Footer } from 'components/organisms'

import data from 'markdown/annual-reports/TwentyTwenty.yaml'

const promotions = data.promotionsPage

const Promotions = () => {
	return (
		<div>
			<SEO
				pageTitle="Liferay Design | 2020 Promotions"
				description="Designers at Liferay are exceptional — a few this year earned title changes based on their hard work and in anticipation of expanded responsibility."
				previewImage=""
				twitterHandle="@liferaydesign"
			/>

			{/* ----------- SCROLL PROGRESS BAR ---------- */}
			<ScrollProgress />
			<ScrollArrow />

			{/* --------- HERO ---------- */}
			<Box sx={{ background: 'white', height: '100vh' }}>
				<Header />
			</Box>

			<Designers />
			<Footer />
			<FancyFooter />
		</div>
	)
}

export default Promotions
