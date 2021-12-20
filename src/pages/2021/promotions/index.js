/** @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui'
import theme from 'gatsby-plugin-theme-ui/2021'
import Header from './components/header.js'
import Footer from './components/footer.js'
import Designers from './components/designerSection.js'
import { Link, Icon, ScrollArrow } from 'components/atoms'
import { SEO } from 'components/molecules'
import { Global } from '@emotion/core'

const Promotions = () => {
	return (
		<ThemeProvider theme={theme}>
			<Global
				styles={theme => ({
					body: {
						fontFamily: theme.fonts.body,
						color: theme.colors.lightBlue,
						lineHeight: theme.lineHeights.body,
					},
				})}
			/>
			<div sx={{ fontFamily: 'modes.brand.body', color: 'mainL3' }}>
				<SEO
					pageTitle="Liferay Design | 2021 Promotions"
					description="Designers at Liferay are exceptional — a few this year earned title changes based on their hard work and in anticipation of expanded responsibility."
					previewImage="/images/2020/promotions-og.png" // TODO
					twitterHandle="@liferaydesign"
				/>

				<ScrollArrow
					sx={{
						left: 'calc(50% - 14px)',
						bottom: '1rem',
					}}
				/>

				<Header />

				<Designers />

				<Footer />
			</div>
		</ThemeProvider>
	)
}

export default Promotions
