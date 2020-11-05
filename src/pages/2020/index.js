/** @jsx jsx */

import { jsx, Grid, Box, Flex, Heading } from 'theme-ui'
import { Helmet } from 'react-helmet'

import { Link, Image, Icon, ScrollProgress, ScrollArrow } from 'components/atoms'
import { SEO, FancyFooter, FormNewsletter } from 'components/molecules'
import { Footer } from 'components/organisms'

import moment from 'moment'
import MediaQuery from 'react-responsive'

import {
	Nav,
	Designer,
	KeyArt,
	Content,
} from 'pages/2020/components/_index'
import styles from './styles.module.scss'
import data from 'markdown/annual-reports/TwentyTwenty.yaml'

const TwentyTwenty = () => {
	return (
		<div className={styles.pagestyles}>
			<SEO
				pageTitle="Liferay Design | 2019 Annual Report"
				description="Highlights, case studies, and more from Communication Design, Product Design, and Design Research at Liferay."
				previewImage="/images/2019/2019-open-graph.png"
				twitterHandle="@liferaydesign"
			/>
			<Helmet>
				<link
					rel="preload"
					href="./fonts/SourceSansVariable-Roman.ttf.woff2"
					as="font"
					type="font/woff2"
					crossorigin=""
				/>
			</Helmet>

			{/* ----------- SCROLL PROGRESS BAR ---------- */}
			<ScrollProgress />
			<MediaQuery minWidth={'768px'}>
				<ScrollArrow />
			</MediaQuery>

			{/* ----------- ANCHOR LINKS ---------- */}
			<Nav />
			{/* --------- HERO ---------- */}
			<Flex
				as="section"
				id="top"
				sx={{ height: '100vh', width: '100vw', flexDirection: 'column' }}
			>
				<KeyArt />
				<Heading
					level={1}
					sx={{
						textAlign: 'center',
						variant: 'text.caps',
						color: 'mainL3',
						fontWeight: 'body',
						letterSpacing: '1em',
					}}
				>
					{data.title}
				</Heading>
			</Flex>

			{/* ---------- TEAM ----------- */}
			{/* HEADER - TEAM */}
			<div id="team" />

			{/* DEPARTMENT */}
			<section id="department">
				
			</section>

			{/* FRESH FISH */}
			<section id="new-faces">
				<div className={styles.newFaces}>
					<Content
						pretitle={data.timelineSection.pretitle}
						title={data.timelineSection.title}
						copy={data.timelineSection.subtitle}
						align="center"
					/>
					<Flex
						direction="column"
						justify="space-between"
						className={styles.timeline}
					>
						<div className={styles.line}>
							<svg
								width="100%"
								height="calc(100% + 5vw)"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line
									x1="0.5"
									y1="0"
									x2="0.5"
									y2="99%"
									stroke="#006DE7"
									stroke-linejoin="round"
									stroke-dasharray="1 10"
								/>
							</svg>
						</div>
						{data.timelineSection.designers.map(({ designer }) => (
							<Designer
								profileUrl={'/team/' + `${designer.url}`}
								month={moment(designer.startDate).format('MMM')}
								day={moment(designer.startDate).format('DD')}
								headshot={
									'/images/headshots/' + `${designer.url}` + '.jpg'
								}
								name={designer.name}
								detail={designer.detail}
								country={designer.country}
								birthRay={
									designer.detail == 'birthRay' ? 'birthRay' : null
								}
							/>
						))}
					</Flex>
				</div>
			</section>

			{/* GROW */}
			<section id="growth" className={styles.growth}>
			</section>

			{/* ---------- INITIATIVES ----------- */}
			{/* HEADER - INITIATIVES */}
			<div id="initiatives" />

			{/* CHARITY DESIGN */}
			<section id="charityDesign" className={styles.mediaSection}>
			</section>

			{/* THOUGHT LEADERSHIP */}
			<section id="thoughtLeadership">
			
			</section>

			{/* COMMUNITY */}
			<section id="community" className={styles.ourEvents}>
			
			</section>

			{/* DRIBBBLE */}
			<section id="dribbble">
				
			</section>

			{/* ---------- PROJECTS ----------- */}
			{/* HEADER - PROJECTS */}
			<div id="projects" />

			{/* PROJECTS */}
			<section id="teamProjects" className={styles.ourEvents}>
			
			</section>

			{/* GLOBAL SERVICES */}
			<section id="globalServices">
				
			</section>

			{/* ---------- OPS ----------- */}
			{/* HEADER - OPS */}
			<div id="ops" />

			{/* OPERATIONS */}
			<section id="operations">
				
			</section>
			<section id="thankyou" className={styles.thankyou}>
				<div>
					<Content
						pretitle={data.thankYou.subtitle}
						title={data.thankYou.title}
						copy={data.thankYou.message}
						align="left"
					/>
					<div className={styles.p}>
						Juan Hidalgo
						<Image
							src="/images/2018/jh-signature.svg"
							className={styles.signature}
						/>
						<Image
							src="/images/headshots/small/hidalgo-juan.jpg"
							className={styles.headshot}
						/>
					</div>
				</div>
			</section>

			{/* ---------- SUBSCRIBE ----------- */}
			{/* HEADER - SUBSCRIBE */}
			<div id="subscribe" />

			<section>
				<Content
					pretitle={data.subscribe.pretitle}
					title={data.subscribe.title}
					copy={data.subscribe.subtitle}
					align="center"
				/>
				<FormNewsletter submitText="Subscribe" />
			</section>

			<Footer />
			<FancyFooter />
		</div>
	)
}

export default TwentyTwenty
