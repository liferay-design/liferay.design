import { Flex, Image, Heading, Text, Icon, ScrollProgress } from 'components/atoms'
import { Footer } from 'components/organisms'
import { SimpleCard, Nav, Designer, KeyArt } from 'pages/2019/components/_index'
import React from 'react'
import { Helmet } from 'react-helmet'
import Plx from 'react-plx'
import styles from './styles.module.scss'
import { SEO, FancyFooter } from 'components/molecules'
import data from  'markdown/annual-reports/TwentyNineteen.yaml'
import { Grid } from 'reakit'

const PlxUp1 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 50,
				endValue: -50,
				property: 'translateY',
			},
		],
	},
]

const TwentyNineteen = () => {
	return (
		<div className={styles.pagestyles}>
			<SEO
				pageTitle="Liferay.Design 2019 Annual Report | Stories, achievements, and more"
				description="TODO:Description"
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
				<title>Liferay Design | 2019 Annual Report</title>
			</Helmet>

			{/* ----------- SCROLL PROGRESS BAR ---------- */}
			<ScrollProgress />

			{/* ----------- ANCHOR LINKS ---------- */}
			<Nav />

			{/* --------- HERO ---------- */}
			<section id="top" className={styles.hero}>
				<Grid gap="4rem" templateColumns="1fr 40% 1fr">
					<Grid.Item area="1 / 2 / 2 / 3">
						<KeyArt />
					</Grid.Item>
					<Grid.Item area="1 / 3 / 2 / 4" className={styles.f2}>
						<Heading level="1" className={styles.f2}>
							{data.title}
						</Heading>
					</Grid.Item>
					<Grid.Item area="2 / 1 / 3 / 4">
						<p className={styles.pLarge}>{data.subtitle}</p>
					</Grid.Item>
				</Grid>
			</section>

			{/* DEPARTMENT */}
			<section id="department">
				<Flex
					direction="column"
					align="center"
					justify="center"
					className={styles.department}
				>
					<Grid templateColumns="1fr 1fr" className={styles.organizationContent}>
						<Grid.Item>
							<div className={styles.preHeader}>
								{data.departmentSection.pretitle}
							</div>
							<Heading level="2" className={styles.f2}>
								{data.departmentSection.title}
							</Heading>
							<p className={styles.p}>{data.departmentSection.content}</p>
						</Grid.Item>
						<Grid.Item className={styles.desicon}>
							<Icon
								name="liferayDesicon"
								fill="white"
								height="7.25vw"
								width="7.25vw"
							/>
							<p className={styles.pLarge}>
								{data.departmentSection.desicon.title}
							</p>
							<p className={styles.p}>
								{data.departmentSection.desicon.subtitle}
							</p>
						</Grid.Item>
					</Grid>
					<div className={styles.departmentNames}>
						{data.departmentSection.subDepartments.map(
							({ subDepartment }) => (
								<Flex direction="column" align="center" justify="center">
									<Heading level="3" className={styles.f4}>
										{subDepartment.title}
									</Heading>
									<span className={styles.pSmall}>
										{subDepartment.subtitle}
									</span>
								</Flex>
							),
						)}
					</div>
				</Flex>
				{/* <img src="/images/2019/dots-large.svg"/> */}
			</section>

			{/* FRESH FISH */}
			<section id="new-faces">
				<div className={styles.newFaces}>
					<div className={styles.preHeader}>
						{data.timelineSection.pretitle}
					</div>
					<Heading level="2" className={styles.f2}>
						{data.timelineSection.title}
					</Heading>
					<p className={styles.p}>{data.timelineSection.subtitle}</p>
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
									y2="100%"
									stroke="#006DE7"
									stroke-linejoin="round"
									stroke-dasharray="1 10"
								/>
							</svg>
						</div>
						<Designer
							profileUrl="/team/wood-jon"
							month="April"
							day="15"
							headshot="/images/headshots/wood-jon.jpg"
							name="Jon"
							detail="firstDay"
							country="California"
						/>
						<Designer
							profileUrl="/team/censi-andrea"
							month="May"
							day="14"
							headshot="/images/headshots/censi-andrea.jpg"
							name="Andrea"
							detail="birthRay"
							birthRay
						/>
						<Designer
							profileUrl="/team/francisco-marleny"
							month="Aug"
							day="12"
							headshot="/images/headshots/francisco-marleny.jpg"
							name="Marleny"
							detail="firstDay"
							country="Spain"
						/>
						<Designer
							profileUrl="/team/lyons-james"
							month="Sep"
							day="10"
							headshot="/images/headshots/lyons-james.jpg"
							name="James"
							detail="birthRay"
							birthRay
						/>
						<Designer
							profileUrl="/team/kim-david"
							month="Sep"
							day="17"
							headshot="/images/headshots/kim-david.jpg"
							name="David"
							detail="birthRay"
							birthRay
						/>
						<Designer
							profileUrl="/team/garcia-laura"
							month="Oct"
							day="14"
							headshot="/images/headshots/garcia-laura.jpg"
							name="Laura"
							detail="firstDay"
							country="Spain"
						/>
						<Designer
							profileUrl="/team/manso-miriam"
							month="Oct"
							day="15"
							headshot="/images/headshots/manso-miriam.jpg"
							name="Miriam"
							detail="birthRay"
							birthRay
						/>
					</Flex>
				</div>
			</section>

			{/* GROW */}
			<section id="growth" className={styles.growth}>
				<div className={styles.preHeader}>{data.careerSection.pretitle}</div>
				<Heading level="2" className={styles.f2}>
					{data.careerSection.title}
				</Heading>
				<p className={styles.p}>{data.careerSection.subtitle}</p>
				<Flex
					direction="column"
					align="center"
					className={styles.recentPromotions}
				>
					<img className={styles.growTool} src="/images/2019/path-tool.png" />
					{/* <Heading level="2" className={styles.f3}>
						Recent Promotions
					</Heading>
					<div>
						<div className={styles.promotionCard}>
							<img src="/images/headshots/connolly-ryan.jpg" />
							<div>
								<Heading level="3" className={styles.f3Large}>
									Ryan <span>Connolly</span>
								</Heading>
								<span>3 years with Liferay</span>
							</div>
							<div>
								<Heading level="4" className={styles.f4}>
									Warrior Princess
								</Heading>
								<span>Previous: Product Design Manager</span>
							</div>
						</div>
						<div className={styles.promotionCard}>
							<img src="/images/headshots/jeong-chris.jpg" />
							<div>
								<Heading level="3" className={styles.f3Large}>
									Chris <span>Jeong</span>
								</Heading>
								<span>2 years with Liferay</span>
							</div>
							<div>
								<Heading level="4" className={styles.f4}>
									Senior Product Designer
								</Heading>
								<span>Previous: Product Designer</span>
							</div>
						</div>
					</div> */}
				</Flex>
			</section>

			{/* ---------- INITIATIVES ----------- */}
			{/* HEADER - INITIATIVES */}
			<Plx
				tagName="h2"
				className={styles.sectionHeader}
				id="initiatives"
				parallaxData={PlxUp1}
			>
				Inititatives
			</Plx>

			{/* CHARITY DESIGN */}
			<section id="charityDesign" className={styles.charityDesign}>
				<div className={styles.fiftyFifty}>
					<Flex direction="column" justify="center" className={styles.left}>
						<div className={styles.preHeader}>
							{data.givingSection.pretitle}
						</div>
						<Heading level="2" className={styles.f2}>
							{data.givingSection.title}
						</Heading>
						<p className={styles.p}>{data.givingSection.subtitle}</p>
					</Flex>
					<img src="/images/2019/underground-writing.png" />
				</div>
				<div className={styles.services}>
					<Flex flexWrap="wrap" className={styles.p}>
						<span>{data.givingSection.what.title}</span>
						<ul>
							{data.givingSection.what.services.map(i => (
								<li>{i}</li>
							))}
						</ul>
					</Flex>
					<Flex flexWrap="wrap" className={styles.p}>
						<span>{data.givingSection.how.title}</span>
						<ul>
							{data.givingSection.how.technologies.map(i => (
								<li>{i}</li>
							))}
						</ul>
					</Flex>
				</div>
				<a href={data.givingSection.link.url} className={styles.link}>
					{data.givingSection.link.title}
				</a>
			</section>

			{/* THOUGHT LEADERSHIP */}
			<section id="thoughtLeadership">
				<div className={styles.dbp}>
					<div>
						<div className={styles.preHeader}>
							{data.designPractice.pretitle}
						</div>
						<Heading level="2" className={styles.f2}>
							{data.designPractice.title}
						</Heading>
						<p className={styles.p}>{data.designPractice.subtitle}</p>
						<a href={data.designPractice.link.url} className={styles.link}>
							{data.designPractice.link.title}
						</a>
					</div>
					<div className={styles.dbpGrid}>
						<img src="/images/2019/dbp/the-design-process.png" />
						<img src="/images/2019/dbp/Service-Design.png" />
						<img src="/images/2019/dbp/ethics-in-design.png" />
						<img src="/images/2019/dbp/data-driven-vs-data-infomred.png" />
						<img src="/images/2019/dbp/giving-feedback.png" />
						<img src="/images/2019/dbp/affordances.png" />
						<img src="/images/2019/dbp/banner-blindness.png" />
						<img src="/images/2019/dbp/what-is-a-mental-model.png" />
					</div>
				</div>
			</section>

			{/* COMMUNITY */}
			<section id="community" className={styles.ourEvents}>
				<div className={styles.preHeader}>{data.designCommunity.pretitle}</div>
				<Heading level="2" className={styles.f2}>
					{data.designCommunity.title}
				</Heading>
				<p className={styles.p}>{data.designCommunity.subtitle}</p>
				<div className={styles.cardGrid}>
					<SimpleCard
						image="/images/2019/logos/awwwards-logo 2-4.png"
						title="Digital thinkers Conference"
						subtitle="San Francisco"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan."
					/>
					<SimpleCard
						image="/images/2019/logos/awwwards-logo 2.png"
						title="The Creativity Conference"
						subtitle="Los Angeles"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan."
					/>
					<SimpleCard
						image="/images/2019/logos/awwwards-logo 2.png"
						title="UX Training Conferences"
						subtitle="Madrid"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan."
					/>
					<SimpleCard
						image="/images/2019/logos/awwwards-logo 2.png"
						title="EuroIA 2019 Impact"
						subtitle="Berlin"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan."
					/>
					<SimpleCard
						image="/images/2019/logos/awwwards-logo 2.png"
						title="Figma Meetup Los Angeles"
						subtitle="Diamond Bar"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis quis nunc quis sit accumsan."
					/>
					<Flex justify="center" align="center" className={styles.seeMoreCard}>
						<a href="/events" className={styles.link}>
							See More Events
						</a>
					</Flex>
				</div>
			</section>

			{/* ---------- PROJECTS ----------- */}
			{/* HEADER - PROJECTS */}
			<Plx
				tagName="h2"
				className={styles.sectionHeader}
				id="projects"
				parallaxData={PlxUp1}
			>
				Projects
			</Plx>

			{/* ---------- OPS ----------- */}
			{/* HEADER - OPS */}
			<Plx
				tagName="h2"
				className={styles.sectionHeader}
				id="ops"
				parallaxData={PlxUp1}
			>
				Ops
			</Plx>
			<Footer />
			<FancyFooter/>
		</div>
	)
}

export default TwentyNineteen
