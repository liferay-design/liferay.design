import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Plx from 'react-plx'
import styles from '../../styles.module.scss'

const top = [
	{
		start: 0,
		end: '#team',
		properties: [
			{
				startValue: '#006DE7',
				endValue: '#006DE7',
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
		start: '#team',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: '#006DE7',
				endValue: '#6B6C7E',
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
const team = [
	{
		start: '#team',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: '#6b6c7e',
				endValue: '#006DE7',
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
		start: '#initiatives',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: '#006DE7',
				endValue: '#6B6C7E',
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
const initiatives = [
	{
		start: '#initiatives',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: '#6b6c7e',
				endValue: '#006DE7',
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
		start: '#projects',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: '#006DE7',
				endValue: '#6B6C7E',
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
const projects = [
	{
		start: '#projects',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: '#6b6c7e',
				endValue: '#006DE7',
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
				startValue: '#006DE7',
				endValue: '#6B6C7E',
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
const ops = [
	{
		start: '#ops',
		duration: 100,
		startOffset: '25vh',
		properties: [
			{
				startValue: '#6b6c7e',
				endValue: '#006DE7',
				property: 'backgroundColor',
			},
			{
				startValue: 1,
				endValue: 2.5,
				property: 'scale',
			},
		],
	}
]
export default class Nav extends Component {
	constructor(props) {
        super(props);

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
			}
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({navOpen: !this.state.navOpen})
    }

	render() {
		return (
			<Plx id="nav" className={`${styles.anchorLinks} ${this.state.navOpen ? "navOpen" : ""}`} >
				<button className={styles.menuButton} onClick={this.toggle}>
					<span>Menu</span>
				</button>
				<div className={styles.linkWrapper} >
					<AnchorLink href="#top" >
						<Plx
							parallaxData={top}
							className={styles.anchorBlock}
						/>
						<div className={styles.anchorText}>
							Top
						</div>
					</AnchorLink>
					<AnchorLink offset="-100" href="#department">
						<Plx
							parallaxData={team}
							className={styles.anchorBlock}
						/>
						<div className={styles.anchorText}>
							Team
						</div>
					</AnchorLink>
					<AnchorLink href="#initiatives">
						<Plx
							parallaxData={initiatives}
							className={styles.anchorBlock}
						/>
						<div className={styles.anchorText}>
							Initiatives
						</div>
					</AnchorLink>
					<AnchorLink offset="200" href="#projects">
						<Plx
							parallaxData={projects}
							className={styles.anchorBlock}
						/>
						<div className={styles.anchorText}>
							Projects
						</div>
					</AnchorLink>
					<AnchorLink href="#ops">
						<Plx
							parallaxData={ops}
							className={styles.anchorBlock}
						/>
						<div className={styles.anchorText}>
							Ops
						</div>
					</AnchorLink>
				</div>
			</Plx>
		)
	}
}
