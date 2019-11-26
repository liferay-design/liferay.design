import { Flex, Link } from 'components/atoms'
import { Footer } from 'components/organisms'
import {
	BrandCarousel,
	Designer,
	IllustrationsCarousel,
	VanityMetric,
} from 'pages/2019/components/_index'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Helmet } from 'react-helmet'
import Plx from 'react-plx'
import styles from './styles.module.scss'
import { SEO } from 'components/molecules'

//custom plx data
const anchorLinks = [
	{
		start: '100',
		duration: 200,
		properties: [
			{
				startValue: 0,
				endValue: 1,
				property: 'opacity',
			},
		],
	},
]
const anchorLinksText = [
	{
		start: '#rebrand',
		startOffset: '90vh',
		duration: 1,
		properties: [
			{
				startValue: '#ffffff',
				endValue: '#272A2C',
				property: 'color',
			},
		],
	},
	{
		start: '#redefined',
		startOffset: '90vh',
		duration: 1,
		properties: [
			{
				startValue: '#272A2C',
				endValue: '#ffffff',
				property: 'color',
			},
		],
	},
	{
		start: '#illustrations',
		startOffset: '90vh',
		duration: 1,
		properties: [
			{
				startValue: '#ffffff',
				endValue: '#272A2C',
				property: 'color',
			},
		],
	},
	{
		start: '#designers-hired',
		startOffset: '90vh',
		duration: 1,
		properties: [
			{
				startValue: '#272A2C',
				endValue: '#ffffff',
				property: 'color',
			},
		],
	},
	{
		start: '#lexicon',
		startOffset: '90vh',
		duration: 1,
		properties: [
			{
				startValue: '#ffffff',
				endValue: '#272A2C',
				property: 'color',
			},
		],
	},
	{
		start: '#thankyou',
		startOffset: '90vh',
		duration: 1,
		properties: [
			{
				startValue: '#272A2C',
				endValue: '#ffffff',
				property: 'color',
			},
		],
	},
]
const anchorLinksBlocks = [
	{
		start: '#redefined',
		duration: 1,
		properties: [
			{
				startValue: 0,
				endValue: 1,
				property: 'opacity',
			},
		],
	},
]
const bannerTitle = [
	{
		start: '0',
		duration: '50vh',
		properties: [
			{
				startValue: 0,
				endValue: -100,
				property: 'translateY',
			},
		],
	},
]
const bannerPie = [
	{
		start: '0',
		duration: '50vh',
		properties: [
			{
				startValue: 15,
				endValue: -15,
				property: 'translateY',
			},
		],
	},
]

//   constant plx data
const InView = [
	{
		start: 'self',
		duration: 1,
		properties: [],
	},
]
const InView10 = [
	{
		start: 'self',
		duration: 1,
		startOffset: '10vh',
		properties: [],
	},
]
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
const PlxUp2 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 100,
				endValue: -100,
				property: 'translateY',
			},
		],
	},
]
const PlxUp3 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 150,
				endValue: -150,
				property: 'translateY',
			},
		],
	},
]
const PlxDown1 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: -50,
				endValue: 50,
				property: 'translateY',
			},
		],
	},
]
const PlxDown2 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: -100,
				endValue: 100,
				property: 'translateY',
			},
		],
	},
]
const PlxDown3 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: -150,
				endValue: 150,
				property: 'translateY',
			},
		],
	},
]
const PlxRotateUp1 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 0,
				endValue: -60,
				property: 'rotate',
			},
		],
	},
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 150,
				endValue: -150,
				property: 'translateY',
			},
		],
	},
]
const PlxRotateLeft1 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 0,
				endValue: -60,
				property: 'rotate',
			},
		],
	},
]
const PlxRotateRight1 = [
	{
		start: 'self',
		duration: '200vh',
		properties: [
			{
				startValue: 0,
				endValue: 60,
				property: 'rotate',
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
				previewImage="TODO:PreviewImage"
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
			{/* overlay for small screens */}
			<Flex
				align="center"
				justify="center"
				direction="column"
				className={styles.tooSmall}
			>
				<div className={styles.f1}>Too small!</div>
				<div className={styles.f3}>
					Make your window bigger or view this report on a larger device to
					see&nbsp;all&nbsp;the&nbsp;goods.
				</div>
				<div className={styles.arrowA}>
					<svg
						viewBox="0 0 195 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="1.75e-07"
							y1="6"
							x2="162"
							y2="6"
							stroke="#006DE7"
							stroke-width="4"
							stroke-linejoin="round"
							stroke-dasharray="1 10"
						/>
						<path d="M195 6L188.5 10.76V1.24L195 6Z" fill="#006DE7" />
					</svg>
				</div>
				<div className={styles.arrowB}>
					<svg
						viewBox="0 0 195 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="1.75e-07"
							y1="6"
							x2="162"
							y2="6"
							stroke="#006DE7"
							stroke-width="4"
							stroke-linejoin="round"
							stroke-dasharray="1 10"
						/>
						<path d="M195 6L188.5 10.76V1.24L195 6Z" fill="#006DE7" />
					</svg>
				</div>
			</Flex>
			{/* anchor links */}
			<Plx className={styles.anchorLinks} parallaxData={anchorLinks}>
				<AnchorLink href="#header">
					<Plx
						className={styles.anchorBlock}
						parallaxData={anchorLinksBlocks}
					/>
					<Plx className={styles.anchorText} parallaxData={anchorLinksText}>
						Top
					</Plx>
				</AnchorLink>
				<AnchorLink offset="100" href="#team">
					<Plx
						className={styles.anchorBlock}
						parallaxData={anchorLinksBlocks}
					/>
					<Plx className={styles.anchorText} parallaxData={anchorLinksText}>
						Team
					</Plx>
				</AnchorLink>
				<AnchorLink href="#products-launched">
					<Plx
						className={styles.anchorBlock}
						parallaxData={anchorLinksBlocks}
					/>
					<Plx className={styles.anchorText} parallaxData={anchorLinksText}>
						Products Launched
					</Plx>
				</AnchorLink>
				<AnchorLink offset="200" href="#rebrand">
					<Plx
						className={styles.anchorBlock}
						parallaxData={anchorLinksBlocks}
					/>
					<Plx className={styles.anchorText} parallaxData={anchorLinksText}>
						Brand
					</Plx>
				</AnchorLink>
				<AnchorLink href="#designers-hired">
					<Plx
						className={styles.anchorBlock}
						parallaxData={anchorLinksBlocks}
					/>
					<Plx className={styles.anchorText} parallaxData={anchorLinksText}>
						Big Moments
					</Plx>
				</AnchorLink>
				<AnchorLink href="#dribbble">
					<Plx
						className={styles.anchorBlock}
						parallaxData={anchorLinksBlocks}
					/>
					<Plx className={styles.anchorText} parallaxData={anchorLinksText}>
						Dribbble Campaign
					</Plx>
				</AnchorLink>
				<AnchorLink href="#vanity-metrics">
					<Plx
						className={styles.anchorBlock}
						parallaxData={anchorLinksBlocks}
					/>
					<Plx className={styles.anchorText} parallaxData={anchorLinksText}>
						Vanity Metrics
					</Plx>
				</AnchorLink>
				<AnchorLink offset="200" href="#lexicon">
					<Plx
						className={styles.anchorBlock}
						parallaxData={anchorLinksBlocks}
					/>
					<Plx className={styles.anchorText} parallaxData={anchorLinksText}>
						Lexicon
					</Plx>
				</AnchorLink>
				<AnchorLink href="#thankyou">
					<Plx
						className={styles.anchorBlock}
						parallaxData={anchorLinksBlocks}
					/>
					<Plx className={styles.anchorText} parallaxData={anchorLinksText}>
						Thank You
					</Plx>
				</AnchorLink>
			</Plx>

			{/* header */}

			<Plx className={styles.headerPlx} parallaxData={PlxDown2}>
				<Flex
					id="header"
					className={styles.header}
					align="center"
					justify="center"
				>
					<div>20</div>
					<div>Design</div>
					<div>19</div>
				</Flex>
			</Plx>

			{/* banner */}
			<section id="top" className={styles.banner}>
				<Plx className={styles.title} parallaxData={bannerTitle}>
					<h1 className={styles.f1}>Annual Report</h1>
				</Plx>
				<div className={styles.backgroundElements}>
					<div className={styles.circle}>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 850 850"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="50%" cy="50%" r="50%" fill="#006DE7" />
						</svg>
					</div>
					<Plx parallaxData={PlxRotateRight1} className={styles.biggestcircle}>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 850 850"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="50%"
								cy="50%"
								r="49%"
								stroke="#fff"
								stroke-width="1"
								stroke-dasharray="1, 10"
							/>
						</svg>
					</Plx>
					<div className={styles.square} />
					<Plx parallaxData={PlxRotateLeft1} className={styles.dashedcircle}>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 461 461"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="50%"
								cy="50%"
								r="49%"
								stroke="#006DE7"
								stroke-width="4"
								stroke-dasharray="1, 10"
							/>
						</svg>
					</Plx>
					<div className={styles.circle}>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 850 850"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="50%"
								cy="50%"
								r="49%"
								stroke="#006DE7"
								stroke-width="12"
							/>
						</svg>
					</div>
					<Plx parallaxData={bannerPie} className={styles.pie}>
						<svg
							width="100%"
							height="100%"
							viewBox="0 0 438 457"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M0 438.5C0 196.5 196.053.27 438 0v457H.383A446 446 0 0 1 0 438.5z"
								fill="#000"
							/>
						</svg>
					</Plx>
				</div>
			</section>

			{/* team overview */}
			<section id="team" className={styles.team}>
				<Plx parallaxData={PlxRotateUp1} className={styles.circle}>
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 461 461"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="50%"
							cy="50%"
							r="48%"
							stroke="#006DE7"
							stroke-width="4"
							stroke-linejoin="round"
							stroke-dasharray="1 10"
						/>
					</svg>
				</Plx>
				<Flex className={styles.designers}>
					<Flex align="center" className={styles.designersHired}>
						<h2 className={styles.textHuge}>
							06
							<div className={styles.f3}>Designers</div>
							<div className={styles.f3}>Hired</div>
						</h2>
					</Flex>
					<Flex className={styles.designerRatios} direction="column">
						<Flex
							justify="center"
							align="center"
							direction="column"
							className={styles.designersToDev}
						>
							<Flex
								justify="center"
								align="flex-end"
								className={styles.devBlocksWrapper}
							>
								<Flex
									direction="column"
									align="center"
									justify="flex-end"
									className={styles.devBlocks}
								>
									<div />
									<p className={styles.psmall}>Designers</p>
								</Flex>
								<p className={styles.psmall}>:</p>
								<Flex
									direction="column"
									align="center"
									className={styles.devBlocks}
								>
									<div className={styles.grid}>
										<div />
										<div />
										<div />
									</div>
									<p className={styles.psmall}>Projects</p>
								</Flex>
							</Flex>
						</Flex>
						<svg
							viewBox="0 0 516 1"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								opacity="0.5"
								y1="0.5"
								x2="516"
								y2="0.5"
								stroke="white"
								stroke-linejoin="round"
								stroke-dasharray="1 8"
							/>
						</svg>
						<Flex
							justify="center"
							align="center"
							direction="column"
							className={styles.designersToProjects}
						>
							<Flex
								justify="center"
								align="flex-end"
								className={styles.projectBlocksWrapper}
							>
								<Flex
									direction="column"
									align="center"
									justify="flex-end"
									className={styles.projectBlocks}
								>
									<div />
									<p className={styles.psmall}>Designers</p>
								</Flex>
								<p className={styles.psmall}>:</p>
								<Flex
									direction="column"
									align="center"
									className={styles.projectBlocks}
								>
									<div className={styles.grid}>
										<div />
										<div />
										<div />
										<div />
										<div />
										<div />
										<div />
										<div />
										<div />
										<div />
									</div>
									<p className={styles.psmall}>Devs</p>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
				<Flex justify="space-around" className={styles.stats}>
					<Flex direction="column" justify="center" align="center">
						<Plx className={styles.f3Large} parallaxData={InView}>
							25
						</Plx>
						<div className={styles.pLarge}>Designers</div>
					</Flex>
					<Flex direction="column" justify="center" align="center">
						<Plx className={styles.f3Large} parallaxData={InView}>
							32
						</Plx>
						<div className={styles.pLarge}>Projects</div>
					</Flex>
					<Flex direction="column" justify="center" align="center">
						<Plx className={styles.f3Large} parallaxData={InView}>
							1,108
						</Plx>
						<div className={styles.pLarge}>Customers &amp; Partners</div>
					</Flex>
				</Flex>
				<Flex className={styles.sketchToFigma}>
					<Flex
						justify="center"
						direction="column"
						align="center"
						className={styles.sketch}
					>
						<img src="/images/2019/sketch.png" />
						<div className={styles.p}>
							Bye,&nbsp;
							<Plx className={styles.p} parallaxData={InView10}>
								Sketch
							</Plx>
						</div>
					</Flex>
					<Flex
						justify="center"
						direction="column"
						align="center"
						className={styles.figma}
					>
						<img src="/images/2019/figma.png" />
						<div className={styles.p}>
							Hello,&nbsp;
							<Plx className={styles.p} parallaxData={InView10}>
								Figma
							</Plx>
						</div>
					</Flex>
					<Plx parallaxData={InView} className={styles.arrow}>
						<svg
							viewBox="0 0 195 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line
								x1="1.75e-07"
								y1="6"
								x2="162"
								y2="6"
								stroke="#006DE7"
								stroke-width="4"
								stroke-linejoin="round"
								stroke-dasharray="1 10"
							/>
							<path d="M195 6L188.5 10.76V1.237L195 6Z" fill="#006DE7" />
						</svg>
					</Plx>
				</Flex>
			</section>
			{/* products launched */}
			<section id="products-launched" className={styles.productsLaunched}>
				<div className={styles.textMega}>04</div>
				<Plx parallaxData={PlxUp3} className={styles.f2}>
					Products Launched
				</Plx>
				<Plx parallaxData={InView10} className={styles.products}>
					<div className={styles.pSmall}>Analytics Cloud</div>
					<div className={styles.dotSmall} />
					<div className={styles.pSmall}>Commerce</div>
					<div className={styles.dotSmall} />
					<div className={styles.pSmall}>Digital Experience Platform</div>
					<div className={styles.dotSmall} />
					<div className={styles.pSmall}>DXP Cloud</div>
				</Plx>
				<Plx parallaxData={PlxUp3} className={styles.f3}>
					Supporting Releases
				</Plx>
				<Plx parallaxData={InView10} className={styles.releases}>
					<div className={styles.pSmall}>Help Center</div>
					<div className={styles.dotSmall} />
					<div className={styles.pSmall}>University</div>
					<div className={styles.dotSmall} />
					<div className={styles.pSmall}>Partner Portal</div>
					<div className={styles.dotSmall} />
					<div className={styles.pSmall}>Liferay.com</div>
					<div className={styles.dotSmall} />
					<div className={styles.pSmall}>Lexicon 2.0</div>
					<div className={styles.dotSmall} />
					<div className={styles.pSmall}>LPN</div>
				</Plx>
				<Plx parallaxData={PlxUp3} className={styles.circle}>
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 850 850"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="50%" cy="50%" r="50%" fill="#006DE7" />
					</svg>
				</Plx>
				<Plx parallaxData={PlxRotateUp1} className={styles.biggestcircle}>
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 850 850"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="50%"
							cy="50%"
							r="50%"
							stroke="#fff"
							stroke-width="0.5"
							stroke-dasharray="0.5, 5"
						/>
					</svg>
				</Plx>
			</section>

			{/* redefined */}
			<section id="redefined" className={styles.redefined}>
				<h2 className={styles.textLarge}>Rede&#xFB01;ned</h2>
				<BrandCarousel />
			</section>

			{/* illustrations */}
			<section id="illustrations" className={styles.illustrations}>
				<div class="carousel-wrapper">
					<IllustrationsCarousel />
				</div>
			</section>

			{/* Designers hired */}
			<section id="designers-hired" className={styles.designersHired}>
				<Plx className={styles.title} parallaxData={PlxUp2}>
					<h2 className={styles.f2}>Big Moments</h2>
				</Plx>
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
						month="Apr"
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
						profileUrl="/team/manso-miriam"
						month="Oct"
						day="15"
						headshot="/images/headshots/manso-miriam.jpg"
						name="Miriam"
						detail="birthRay"
						birthRay
					/>
					<Designer
						profileUrl="/team/garcia-laura"
						month="Oct"
						day="18"
						headshot="/images/headshots/garcia-laura.jpg"
						name="Laura"
						detail="firstDay"
						country="Spain"
					/>
				</Flex>
			</section>

			{/* dribbble */}
			<section id="dribbble" className={styles.dribbble}>
				<Plx className={styles.title} parallaxData={PlxUp2}>
					<div className={styles.pie} />
					<h2 className={styles.f2}>
						<Link href="https://dribbble.com/liferay">Dribbble</Link>
					</h2>
				</Plx>
				<Plx className={styles.p} parallaxData={PlxUp1}>
					A 6-week daily posting regimen coordinated between all three regions
					created significant results on the primary social media platform for
					designers.
				</Plx>
				<Plx parallaxData={PlxRotateRight1} className={styles.dashedcircle}>
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 461 461"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle
							cx="50%"
							cy="50%"
							r="49%"
							stroke="#006DE7"
							stroke-width="4"
							stroke-dasharray="1, 10"
						/>
					</svg>
				</Plx>
				<Plx parallaxData={PlxUp1} className={styles.circle} />
				<Plx parallaxData={InView} className={styles.grid}>
					<div className={styles.left}>
						<div className={styles.f1}>1k</div>
						<div className={styles.p}>followers</div>
					</div>
					<div className={styles.topLeft}>
						<div className={styles.f3}>18k</div>
						<div className={styles.pSmall}>views</div>
					</div>
					<div className={styles.topRight}>
						<div className={styles.f3}>1.3k</div>
						<div className={styles.pSmall}>likes</div>
					</div>
					<div className={styles.bottomLeft}>
						<div className={styles.f3}>61</div>
						<div className={styles.pSmall}>buckets</div>
					</div>
					<div className={styles.bottomRight}>
						<div className={styles.pie} />
					</div>
				</Plx>
			</section>

			{/* lexicon */}
			<section id="lexicon" className={styles.lexicon}>
				<div className={styles.navDark} />
				<Plx parallaxData={PlxUp3} className={styles.heading}>
					<h2 className={styles.textHuge}>Lexicon</h2>
				</Plx>
				<p className={styles.p}>
					Our Design System evolved into{' '}
					<a href="https://lexicondesign.io/" target="_new">
						version 2.0
					</a>{' '}
					and was spread to different products and projects.
				</p>
				<p className={styles.p}>
					Utilizing Lexicon in more interfaces allow us to gain robustness and
					improve communication through a consistent language.
				</p>
				<div className={styles.wrapper}>
					<div className={styles.lexiconBackground}>
						<div className={styles.justblue} />
						<div className={styles.svgpattern} />
					</div>
					<Plx parallaxData={PlxUp3} className={styles.grid}>
						<div className={styles.image} />
						<Flex
							justify="center"
							align="center"
							direction="column"
							className={styles.projects}
						>
							<div className={styles.textLarge}>06</div>
							<div className={styles.p}>Projects Using Lexicon</div>
						</Flex>
						<div className={styles.snapshot} />
					</Plx>
				</div>
			</section>

			{/* thank you */}
			<section id="thankyou" className={styles.thankyou}>
				<h2 className={styles.f1}>Thank you for a great year</h2>
				<p className={styles.pLarge}>From el Director</p>
				<p className={styles.p}>
					This has been an incredible year of opportunity and growth for the
					User Experience Department at Liferay. It&nbsp;has been a pleasure to
					see our design culture evolve this year.
				</p>
				<p className={styles.p}>
					I want to applaud the efforts of the entire team and thank everyone at
					Liferay for helping us grow, get better and spread design-thinking at
					this company. We’re excited to do even more next year.
				</p>
				<p className={styles.p}>Thank you all.</p>

				<Plx parallaxData={PlxUp2} className={styles.p}>
					Juan Hidalgo
					<Plx
						parallaxData={PlxUp3}
						tagName="img"
						src="/images/2019/jh-signature.svg"
						className={styles.signature}
					/>
					<Plx
						parallaxData={PlxUp1}
						tagName="img"
						src="/images/headshots/small/hidalgo-juan.jpg"
						className={styles.headshot}
					/>
				</Plx>
			</section>

			<Footer />
		</div>
	)
}

export default TwentyNineteen
