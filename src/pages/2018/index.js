import { Flex, Link } from 'components/atoms'
import { Footer } from 'components/organisms'
import {
	BrandCarousel,
	Designer,
	IllustrationsCarousel,
	VanityMetric,
} from 'pages/2018/components/_index'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Helmet } from 'react-helmet'
import Plx from 'react-plx'
import styles from './styles.module.scss'

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

const TwentyEighteen = () => {
	return (
		<div className={styles.pagestyles}>
			<Helmet>
				<link
					rel="preload"
					href="./fonts/SourceSansVariable-Roman.ttf.woff2"
					as="font"
					type="font/woff2"
					crossorigin=""
				/>
				<title>Liferay Design | 2018 Annual Report</title>
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
					<div>UX</div>
					<div>18</div>
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
						<img src="/images/2018/sketch.png" />
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
						<img src="/images/2018/figma.png" />
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

			{/* brand */}
			<section id="rebrand" className={styles.brand}>
				<div className={styles.navDark} />
				<Plx parallaxData={PlxUp2} className={styles.heading}>
					<h2 className={styles.textHuge}>Brand</h2>
				</Plx>
				<Flex justify="space-between" align="center">
					<div className={styles.liferayLogo}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 94">
							<path
								d="M66 16H20c-2.2 0-4 1.8-4 4v46c0 2.2 1.8 4 4 4h46c2.2 0 4-1.8 4-4V20c0-2.2-1.8-4-4-4zM32 51c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm10 30c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-20c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm10 30c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-20c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm10 30c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6zm0-10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6z"
								fill="#0b63ce"
							/>
							<path
								d="M114.4 65.3H90.7v-49c0-.3-.2-.5-.5-.5h-3.7c-.3 0-.5.2-.5.5v52.6c0 .3.2.5.5.5h27.9c.3 0 .5-.2.5-.5v-3.2c0-.2-.2-.4-.5-.4zm35.1-35.2h-8.4v-7.8c0-5.5 1.8-8.2 5.5-8.2 1.5 0 3 .4 4.4 1 .1.1.3.1.4 0l.3-.3 1-2.9c.1-.2 0-.5-.3-.6-1.9-.8-4-1.3-5.8-1.3-6.4 0-10 4.3-10 12v8.1l-4.8.3c-.3 0-.5.2-.5.5v2.7c0 .3.2.5.5.5h4.8v34.8c0 .3.2.5.5.5h3.5c.3 0 .5-.2.5-.5V34.1h8.4c.3 0 .5-.2.5-.5v-3.1c0-.2-.2-.4-.5-.4zm18.2-1c-8.3 0-17.2 7.3-17.2 20.7 0 12.1 7.5 20.6 18.2 20.6 5.7 0 9.2-1.9 12.4-3.8.2-.1.3-.4.2-.7l-1.5-2.7c-.1-.1-.2-.2-.3-.2s-.3 0-.4.1c-3.2 2.3-6.4 3.3-10 3.3-8.1 0-13.6-6.3-13.9-15.6h27.1c.2 0 .4-.2.5-.4.2-1 .2-2.1.2-3-.2-11.5-5.8-18.3-15.3-18.3zm-12.6 17.7c.9-8.1 6-13.7 12.6-13.7 6.9 0 10.7 4.9 10.8 13.7h-23.4zM208.4 30c-1.2-.6-2.4-.8-4-.8-4 0-7.8 2.5-10.7 7.2l-.3-5.8c0-.3-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5V69c0 .3.2.5.5.5h3.5c.3 0 .5-.2.5-.5V43c2.4-6 6.1-9.5 10-9.5 1.4 0 2 .2 3.3.6h.4c.1-.1.2-.2.2-.3l.8-3.2c.1-.3 0-.5-.2-.6zm31.6.1h-3.1c-.3 0-.5.2-.5.5l-.2 2.9c-3.3-2.6-6.5-4.3-11.1-4.3-10.2 0-17.5 8.7-17.5 20.7 0 12.9 6.1 20.6 16.4 20.6 4.2 0 8.4-1.9 12.3-5.5l.3 4.1c0 .3.2.5.5.5h3c.3 0 .5-.2.5-.5V30.6c-.1-.3-.3-.5-.6-.5zm-4 7.8v22.3c-4.1 4.2-7.7 6-11.5 6-7.6 0-12.2-6.2-12.2-16.5 0-9.3 5.7-16.6 13-16.6 3.8.1 7 1.5 10.7 4.8zm42.2-7.6c-.1-.1-.2-.2-.4-.2h-3.6c-.2 0-.4.1-.5.3l-8.2 24.1c-.4 1.3-.9 2.7-1.3 4.1-.6 2-1.3 4-1.9 5.8-.8-2-1.6-4.2-2.4-6.3-.5-1.3-1-2.5-1.4-3.7l-9.2-24.1c-.1-.2-.3-.3-.5-.3H245c-.2 0-.3.1-.4.2-.1.1-.1.3 0 .5l15.7 38.9-1 3.2c-1.5 4.5-4.3 9.8-9.4 9.8-1 0-2.2-.3-3-.6h-.4l-.3.3-.8 3.1c-.1.2.1.5.3.6 1.1.5 2.7.8 4.1.8 5.9 0 10.5-4.5 13.4-13l15.1-43.2c.1 0 0-.2-.1-.3zm-153.8-8.9c.6 0 1.1-.5 1.1-1.1v-3.6c0-.6-.5-1.1-1.1-1.1h-3.6c-.6 0-1.1.5-1.1 1.1v3.6c0 .6.5 1.1 1.1 1.1h3.6zm-3.6 8.7h3.5c.3 0 .5.2.5.5V69c0 .3-.2.5-.5.5h-3.5c-.3 0-.5-.2-.5-.5V30.6c0-.3.2-.5.5-.5z"
								fill="#101820"
							/>
						</svg>
					</div>
					<div className={styles.p}>
						<p>
							We took another step in the evolution of the Liferay brand,
							working with a diverse group from Engineering, Marketing,
							Sales, and other departments.
						</p>
						<Link to="/articles/2018/necessity-for-brand-updates/">
							Read more about the necessity for brand updates
						</Link>
					</div>
				</Flex>
				<Plx parallaxData={PlxUp3} className={styles.waffles}>
					<Flex justify="center" align="center" className={styles.blackWaffle}>
						<Plx parallaxData={PlxUp1}>
							<svg
								width="100%"
								height="100%"
								viewBox="0 0 100 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M23 27a4 4 0 0 1 4-4h46a4 4 0 0 1 4 4v46a4 4 0 0 1-4 4H27a4 4 0 0 1-4-4V27zm8 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm11-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm-19 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm21-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zM31 52a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm21-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm-19 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm11-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6z"
									fill="#fff"
								/>
							</svg>
						</Plx>
					</Flex>
					<Flex justify="center" align="center" className={styles.blueWaffle}>
						<Plx parallaxData={PlxUp2}>
							<svg
								width="100%"
								height="100%"
								viewBox="0 0 100 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M23 27a4 4 0 0 1 4-4h46a4 4 0 0 1 4 4v46a4 4 0 0 1-4 4H27a4 4 0 0 1-4-4V27zm8 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm11-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm-19 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm21-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zM31 52a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm21-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm-19 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6zm9 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-6zm11-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6z"
									fill="#0B63CE"
								/>
							</svg>
						</Plx>
					</Flex>
				</Plx>
			</section>

			{/* redefined */}
			<section id="redefined" className={styles.redefined}>
				<h2 className={styles.textLarge}>Rede&#xFB01;ned</h2>
				<BrandCarousel />
			</section>

			{/* illustrations */}
			<section id="illustrations" className={styles.illustrations}>
				<div className="carousel-wrapper">
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
						profileUrl=""
						month="Jan"
						day="08"
						headshot="/images/headshots/small/balbas-cassandra.jpg"
						name="Cassandra"
						detail="firstDay"
						country="California"
					/>
					<Designer
						profileUrl="/team/bargaid-duuriimaa"
						month="Feb"
						day="08"
						headshot="/images/headshots/small/bargaid-duuriimaa.jpg"
						name="Duuriimaa"
						detail="firstDay"
						country="Spain"
					/>
					<Designer
						profileUrl=""
						month="Apr"
						day="18"
						headshot="/images/headshots/small/hisamoto-naoki.jpg"
						name="Naoki"
						detail="birthRay"
						birthRay
					/>
					<Designer
						profileUrl="/team/connolly-ryan"
						month="Apr"
						day="24"
						headshot="/images/headshots/small/connolly-ryan.jpg"
						name="Ryan"
						detail="birthRay"
						birthRay
					/>
					<Designer
						profileUrl=""
						month="May"
						day="01"
						headshot="/images/headshots/small/wu-rebecca.jpg"
						name="Rebecca"
						detail="birthRay"
						birthRay
					/>
					<Designer
						profileUrl=""
						month="May"
						day="07"
						headshot="/images/headshots/small/-sunglasses.png"
						name="Andras"
						detail="firstDay"
						country="Hungary"
					/>
					<Designer
						profileUrl=""
						month="May"
						day="14"
						headshot="/images/headshots/small/-heart-eyes-cat.png"
						name="Andrea"
						detail="firstDay"
						country="Italy"
					/>
					<Designer
						profileUrl=""
						month="Jul"
						day="03"
						headshot="/images/headshots/small/oliveira-cassia.jpg"
						name="Cassia"
						detail="birthRay"
						country=""
						birthRay
					/>
					<Designer
						profileUrl="/team/pentz-patrick"
						month="Aug"
						day="07"
						headshot="/images/headshots/small/pentz-patrick.jpg"
						name="Patrick"
						detail="birthRay"
						country=""
						birthRay
					/>
					<Designer
						profileUrl="/team/lyons-james"
						month="Sep"
						day="10"
						headshot="/images/headshots/small/lyons-james.jpg"
						name="James"
						detail="firstDay"
						country="California"
					/>
					<Designer
						profileUrl=""
						month="Sep"
						day="11"
						headshot="/images/headshots/small/-upside-down-face.png"
						name="Gabryelle"
						detail="birthRay"
						country=""
						birthRay
					/>
					<Designer
						profileUrl="/team/hancock-abel"
						month="Sep"
						day="15"
						headshot="/images/headshots/small/hancock-abel.jpg"
						name="Abel"
						detail="birthRay"
						country=""
						birthRay
					/>
					<Designer
						profileUrl="/team/kim-david"
						month="Sep"
						day="17"
						headshot="/images/headshots/small/kim-david.jpg"
						name="David"
						detail="firstDay"
						country="California"
					/>
					<Designer
						profileUrl=""
						month="Sep"
						day="18"
						headshot="/images/headshots/small/shama-davi.jpg"
						name="Davi"
						detail="birthRay"
						country=""
						birthRay
					/>
					<Designer
						profileUrl="/team/manso-miriam"
						month="Oct"
						day="15"
						headshot="/images/headshots/small/manso-miriam.jpg"
						name="Miriam"
						detail="firstDay"
						country="Spain"
					/>
					<Designer
						profileUrl=""
						month="Oct"
						day="02"
						headshot="/images/headshots/small/fernandes-rafael.jpg"
						name="Rafael"
						detail="birthRay"
						country=""
						birthRay
					/>
					<Designer
						profileUrl="/team/jeong-chris"
						month="Oct"
						day="16"
						headshot="/images/headshots/small/jeong-chris.jpg"
						name="Chris"
						detail="birthRay"
						country=""
						birthRay
					/>
					<Designer
						profileUrl="/team/vazquez-susana"
						month="Oct"
						day="18"
						headshot="/images/headshots/small/vazquez-susana.jpg"
						name="Susana"
						detail="birthRay"
						country=""
						birthRay
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

			{/* stats */}
			<section id="vanity-metrics" className={styles.stats} scroll="no">
				<Plx className={styles.title} parallaxData={PlxUp2}>
					<h2 className={styles.f2}>Vanity Metrics</h2>
				</Plx>
				<Plx className={styles.grid}>
					<VanityMetric number="" description="" size="0" />
					<VanityMetric number="06" description="Events Hosted" size="64%" />
					<VanityMetric number="18" description="Events Attended" size="64%" />
					<VanityMetric number="12" description="Talks Given" size="64%" />
					<VanityMetric number="849" description="Applications" size="112%" />
					<VanityMetric number="33" description="Interviews" size="64%" />
					<VanityMetric number="06" description="New Hires" size="64%" />
					<VanityMetric
						number="4.5k"
						description="Documents Created"
						size="144%"
					/>
					<VanityMetric number="205" description="Icons Created" size="112%" />
					<VanityMetric number="23" description="Loop Posts" size="64%" />
					<VanityMetric
						number="112"
						description="Critique Sessions"
						size="112%"
					/>
					<VanityMetric
						number="7.7k"
						description="Sticky Notes Used"
						size="144%"
					/>
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
					<Link href="/lexicon">version 2.0</Link> and was spread to different
					products and projects.
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
						src="/images/2018/jh-signature.svg"
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

export default TwentyEighteen
