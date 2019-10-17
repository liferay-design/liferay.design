import { Container, Icon, Flex, Text, Heading, Link } from 'components/atoms'
import { CardLexicon, FancyFooter, FormNewsletter } from 'components/molecules'
import { Banner, Footer, ChangelogFeed } from 'components/organisms'
import React from 'react'
import MediaQuery, {useMediaQuery} from 'react-responsive'
import { Grid } from 'reakit'
import blueprints from 'theme/blueprints.module.scss'
import documentation from 'theme/documentation.module.scss'
import styles from './styles.module.scss'
import { colors, spacing } from 'theme'

const Handbook = () => {
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' })
	const gridTemplate = `	"a a . . . ." 
                                "a a b b . ." 
                                "a a b b c c" 
                                ". . b b c c" 
                                ". . . . c c" auto / 1fr 1fr 1fr 1fr 1fr 1fr`
	const mobileGridTemplate = `"a" 
                                "b" 
                                "c" auto / 1fr `
	return (
		<div
			className={`${blueprints.theme} ${documentation.theme} ${
				styles.handbook
			}`}
		>
			<Banner
				simpleNav
				preTitle="Liferay.Design"
				headline="Handbook"
				subtitle="How to be a good designer and do other things good too."
				section="Handbook"
				background='#13141F'
				underlineColor={colors.primary}
			/>
			<div className={styles.wrapper}>
				<Container>
					<Grid
						className={styles.teasers}
						gap="2rem"
						template={isTabletOrMobile ? mobileGridTemplate : gridTemplate}
					>
						<Grid.Item
							area="a"
						>
							<CardLexicon
								handbook
								preTitle="First Things First"
								title="Principles"
								text="These principles guide our work, and provide standards for what good design means at Liferay."
								to="/handbook/welcome"
							/>
						</Grid.Item>
						<Grid.Item
							area="b"
						>
							<CardLexicon
								delay="0.1s"
								handbook
								preTitle="Get Things Done"
								title="Work"
								text="Policies, guidelines, and best-practices for creating value in Liferay’s Design Department."
								to="/handbook/work/remotely"
							/>
						</Grid.Item>
						<Grid.Item
							area="c"
						>
							<CardLexicon
								delay="0.2s"
								handbook
								preTitle="Better Every Day"
								title="Grow"
								text="A core trait of a Liferay Designer is a desire for growth — see what that looks like and how we do it."
								to="/handbook/grow/introduction"
							/>
						</Grid.Item>
					</Grid>
					<div className={styles.gagb}>
						<Text color="lightGrey" weight="inherit" className={styles.date}>
							Since 2004
						</Text>
						<Heading>
							Growing &amp; <br />
							Getting Better. <br />
							<span>Together.</span>
						</Heading>
					</div>
				</Container>
			</div>
			<Footer light />
			<FancyFooter />
		</div>
	)}

export default Handbook