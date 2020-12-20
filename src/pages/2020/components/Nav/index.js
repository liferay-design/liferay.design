import React, { Component } from 'react'
import { Icon, Link } from 'components/atoms'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Plx from 'react-plx'
import styles from './styles.module.scss'
import { colors } from 'theme/'

const top = [
	{
		start: 0,
		end: '#adapt',
		properties: [
			{
				startValue: colors.primary,
				endValue: colors.primary,
				property: 'backgroundColor',
			},
			{
				startValue: 2.5,
				endValue: 2.5,
				property: 'scale',
			},
		],
	},
	{
		start: '#adapt',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: colors.primary,
				endValue: colors.neutral4,
				property: 'backgroundColor',
			},
			{
				startValue: 2.5,
				endValue: 1,
				property: 'scale',
			},
		],
	},
]
const adapt = [
	{
		start: '#adapt',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: colors.neutral4,
				endValue: colors.primary,
				property: 'backgroundColor',
			},
			{
				startValue: 1,
				endValue: 2.5,
				property: 'scale',
			},
		],
	},
	{
		start: '#impact',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: colors.primary,
				endValue: colors.neutral4,
				property: 'backgroundColor',
			},
			{
				startValue: 2.5,
				endValue: 1,
				property: 'scale',
			},
		],
	},
]
const impact = [
	{
		start: '#impact',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: colors.neutral4,
				endValue: colors.primary,
				property: 'backgroundColor',
			},
			{
				startValue: 1,
				endValue: 2.5,
				property: 'scale',
			},
		],
	},
	{
		start: '#consult',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: colors.primary,
				endValue: colors.neutral4,
				property: 'backgroundColor',
			},
			{
				startValue: 2.5,
				endValue: 1,
				property: 'scale',
			},
		],
	},
]
const consult = [
	{
		start: '#consult',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: colors.neutral4,
				endValue: colors.primary,
				property: 'backgroundColor',
			},
			{
				startValue: 1,
				endValue: 2.5,
				property: 'scale',
			},
		],
	},
	{
		start: '#ops',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: colors.primary,
				endValue: colors.neutral4,
				property: 'backgroundColor',
			},
			{
				startValue: 2.5,
				endValue: 1,
				property: 'scale',
			},
		],
	},
]
const campaign = [
	{
		start: '#campaign',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: colors.neutral4,
				endValue: colors.primary,
				property: 'backgroundColor',
			},
			{
				startValue: 1,
				endValue: 2.5,
				property: 'scale',
			},
		],
	},
	{
		start: '#future',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: colors.primary,
				endValue: colors.neutral4,
				property: 'backgroundColor',
			},
			{
				startValue: 2.5,
				endValue: 1,
				property: 'scale',
			},
		],
	},
]

export default class Nav extends Component {
	constructor(props) {
		super(props)

		this.state = {
			navOpen: false,
			menuButtonStyles: {
				borderRadius: '50%',
				width: '64px',
				height: '64px',
				bottom: '16px',
				right: '16px',
			},
			span: {
				opacity: 0,
			},
			close: {
				opacity: 1,
			},
		}

		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({ navOpen: !this.state.navOpen })
	}

	render() {
		return (
			<div>
				<Link to="/">
					<Icon
						sx={{ fill: 'white', width: '2rem' }}
						name="liferayDesicon"
						className={styles.desicon}
					/>
				</Link>
				<Plx
					id="nav"
					className={`${styles.anchorLinks} ${
						this.state.navOpen ? 'navOpen' : ''
					}`}
				>
					<button className={styles.menuButton} onClick={this.toggle}>
						<span>Menu</span>
					</button>
					<div className={styles.linkWrapper}>
						<AnchorLink offset="80" href="#top">
							<Plx parallaxData={top} className={styles.anchorBlock} />
							<div className={styles.anchorText}>2020</div>
						</AnchorLink>
						<AnchorLink offset="100" href="#adapt">
							<Plx parallaxData={adapt} className={styles.anchorBlock} />
							<div className={styles.anchorText}>Adapt</div>
						</AnchorLink>
						<AnchorLink href="#impact">
							<Plx parallaxData={impact} className={styles.anchorBlock} />
							<div className={styles.anchorText}>Impact</div>
						</AnchorLink>
						<AnchorLink offset="200" href="#consult">
							<Plx parallaxData={consult} className={styles.anchorBlock} />
							<div className={styles.anchorText}>Consult</div>
						</AnchorLink>
						<AnchorLink href="#campaign">
							<Plx parallaxData={campaign} className={styles.anchorBlock} />
							<div className={styles.anchorText}>Campaign</div>
						</AnchorLink>
					</div>
				</Plx>
			</div>
		)
	}
}
