import React, { Component } from 'react'
import { Flex } from 'components/atoms'
import styles from './styles.module.scss'

export default class KeyArt extends Component {
	constructor(props) {
        super(props);

        this.state = {
			replay: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({replay: !this.state.replay})
	}
	
	render() {
		if (this.state.replay !== undefined) {
			setTimeout(() => {
				this.setState({
				replay: false
			  })
			}, 1);
		  }
		let replayStyles = this.state.replay ? "replay" : ""
		return (
			<Flex align="center" justify="center" direction="column" className={styles.keyArt}>
			<svg 
				fill="none"
				viewBox="0 0 652 851"
				xmlns="http://www.w3.org/2000/svg"
				className={replayStyles}>
					
				<defs>
					<pattern
						id="dotMask"
						x="4"
						y="0"
						viewBox="0 0 16 16"
						width="16"
						height="16"
						patternUnits="userSpaceOnUse"
					>
						<circle
							className={styles.dots}
							fill="white"
							cx="8"
							cy="8"
							r="1.5"
						/>
					</pattern>
					<mask id="dots" x="0" y="0" width="1" height="1">
						<rect
							x="0"
							y="0"
							width="1000"
							height="1000"
							fill="url(#dotMask)"
						/>
					</mask>
					<mask id="desicon">
						<path
							fill="white"
							d="M492 178c12.15 0 22-9.85 22-22s-9.85-22-22-22v44z"
						/>
					</mask>
				</defs>
				<g id={styles.two}>
					<polygon
						className={`${styles.grayFill} ${styles.dots}`}
						points="0, 16 96,16 96,160 176,160 176,208 0,208"
						mask="url(#dots)"
						transform="translate(-8,0)"
					/>
					<path
						className={`${styles.blueStroke} ${styles.thickestStroke}`}
						d="M76 156c0-60.751 48.801-110 109-110s109 49.249 109 110c0 60.75-49.25 110-110 110-72.9 0-132 59.6-132 132"
					/>
					<path
						className={`${styles.whiteStroke} ${styles.thickestStroke}`}
						d="M294 156c0 60.751-49.249 110-110 110M295 310c0 24.3-19.699 44-44 44h-67"
					/>
				</g>
				<g id={styles.zero}>
					<circle
						cx="492"
						cy="156"
						r="113"
						className={`${styles.whiteStroke} ${styles.thickStroke}`}
					/>
					<path
						mask="url(#desicon)"
						id={styles.desicon}
						className={styles.whiteStroke}
						strokeWidth="44"
						d="M492 178c12.15 0 22-9.85 22-22s-9.85-22-22-22"
					/>
					<path
						className={`${styles.blueStroke} ${styles.thickStroke}`}
						d="M605 156c0 62.408-50.592 113-113 113s-113-50.592-113-113"
					/>
					<polygon
						points="336, 32 392,32 364,64 336, 118"
						className={`${styles.whiteFill} ${styles.dots}`}
						mask="url(#dots)"
						transform="translate(-8,3)"
					/>
				</g>
				<g id={styles.one}>
					<path
						className={`${styles.blueStroke} ${styles.thickestStroke}`}
						d="M140 573v276"
					/>
					<path
						className={`${styles.whiteStroke} ${styles.thickestStroke}`}
						d="M140 398c0 72.902-59.098 132-132 132"
					/>
					<g className={styles.dots}>
						<rect
							x="136"
							y="570"
							className={styles.whiteFill}
							mask="url(#dots)"
							width="48"
							height="192"
						/>
						<rect
							x="184"
							y="522"
							className={styles.grayFill}
							mask="url(#dots)"
							width="136"
							height="240"
						/>
					</g>
				</g>
				<g id={styles.nine}>
					<polygon
						className={`${styles.grayFill} ${styles.dots}`}
						transform="translate(8,4)"
						points="496,300 520,332 580,464 644, 480 644,300"
						mask="url(#dots)"
					/>
					<path
						className={`${styles.lightBlack} ${styles.thickStroke}`}
						d="M603.527 491c-5.8-73.273-64.254-131.727-137.527-137.527"
					/>
					<path
						className={`${styles.whiteStroke} ${styles.thickStroke}`}
						d="M589 674c0 74.006-59.994 134-134 134h-81c-22.64 0-41 18.36-41 41"
					/>
					<path
						className={`${styles.blueStroke} ${styles.thickStroke}`}
						d="M333 849c0-22.643 18.356-41 41-41h81"
					/>
					<path
						className={`${styles.blueStroke} ${styles.thinStroke}`}
						d="M603.527 491c-5.8-73.273-64.254-131.727-137.527-137.527"
					/>
					<path
						className={`${styles.whiteStroke} ${styles.thickerStroke}`}
						d="M604 503c0 82.843-67.157 150-150 150s-150-67.157-150-150c0-39.883 15.566-76.131 40.954-103"
					/>
					<path
						className={`${styles.blueStroke} ${styles.thickerStroke}`}
						d="M304 503c0-82.843 67.157-150 150-150"
					/>
					<circle
						cx="604"
						cy="503"
						r="12"
						className={`${styles.whiteStroke} ${styles.thinnestStroke}`}
					/>
					<path
						className={`${styles.blueStroke} ${styles.thinnestStroke}`}
						d="M616 503c0 6.627-5.373 12-12 12s-12-5.373-12-12"
					/>
					<circle
						cx="454"
						cy="353"
						r="12"
						className={`${styles.lightBlack} ${styles.thinnestStroke}`}
					/>
					<path
						className={`${styles.whiteStroke} ${styles.thinnestStroke}`}
						d="M454 341c6.627 0 12 5.373 12 12s-5.373 12-12 12"
					/>
					<rect
						className={`${styles.grayFill} ${styles.dots}`}
						transform="translate(0, 4)"
						x="468"
						y="500"
						mask="url(#dots)"
						width="178"
						height="48"
					/>
					<path
						className={styles.blueStroke}
						id={styles.nineDot}
						strokeWidth="40"
						d="M452 482c11 0 20 9 20 20s-9 20-20 20-20-9-20-20 9-20 20-20z"
					/>
				</g>
			</svg>
			<button onClick={this.toggle} >
			<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.995 12.982l.866.5.012-.021.012-.022-.89-.457zM13.25 2.737l.5-.866-.5.866zm2.887 3l-.043.999.973.042.067-.972-.997-.07zm-1.008 6.745a6.5 6.5 0 0 1-8.879 2.38l-1 1.731a8.5 8.5 0 0 0 11.611-3.111l-1.732-1zm-8.879 2.38a6.5 6.5 0 0 1-2.38-8.88l-1.731-1A8.5 8.5 0 0 0 5.25 16.593l1-1.732zm-2.38-8.88a6.5 6.5 0 0 1 8.88-2.38l1-1.731A8.5 8.5 0 0 0 2.139 4.982l1.732 1zm8.88-2.38a6.465 6.465 0 0 1 2.502 2.6l1.77-.93A8.465 8.465 0 0 0 13.75 1.87l-1 1.732zm4.384 2.204l.364-5.237-1.996-.138-.363 5.237 1.995.138zm-.954-1.068l-5.07-.22-.086 1.999 5.07.219.086-1.998zm-.185 8.244a125.527 125.527 0 0 0 .89.456l.001-.002.002-.003.004-.008.01-.02a2.73 2.73 0 0 0 .106-.25c.06-.158.136-.38.209-.667.146-.574.283-1.403.283-2.488h-2c0 .915-.115 1.578-.222 1.994a4.027 4.027 0 0 1-.178.543l.001-.003.002-.004.001-.002.001-.002.89.456z" fill="currentColor"/></svg> replay </button>
		</Flex>
		)
	}
}
