import React, { Component } from 'react'
import styles from './styles.module.scss'

export default class FancyFooter extends Component {
	componentDidMount() {
		document.body.style.marginBottom = '100vh'
	}
	
	componentWillUnmount() {
		document.body.style.marginBottom = '0'
	}

	render() {
		return (
			<div className={styles.fancyFooter}>
				<svg
					viewBox="0 0 1440 720"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<clipPath id="clip0">
							<path d="M0 0h1440v720H0z" />
						</clipPath>
						<clipPath id="clip1">
							<path
								transform="rotate(-180 240 120)"
								d="M0 0h240v240H0z"
							/>
						</clipPath>
						<clipPath id="clip2">
							<path
								transform="rotate(-180 720 240)"
								d="M0 0h240v240H0z"
							/>
						</clipPath>
						<clipPath id="clip3">
							<path
								transform="rotate(-90 960 -240)"
								d="M0 0h240v240H0z"
							/>
						</clipPath>
						<clipPath id="clip4">
							<path
								transform="translate(960 480)"
								d="M0 0h240v240H0z"
							/>
						</clipPath>
						<pattern id="dots" x="0" y="0" width=".083" height=".083">
							<circle fill="#353747" cx="8.3" cy="8.3" r="2" />
						</pattern>
						<pattern id="blueDots" x="0" y="0" width=".2" height=".2">
							<circle fill="#0058ff" cx="20" cy="20" r="4" />
						</pattern>
					</defs>
					<g clipPath="url(#clip0)">
						<path fill="#13141F" d="M0 0h1440v720H0z" />
						<path
							fill="#fff"
							d="M0 240h240v240H0zM240 480h240v240H240zM960 480h480v240H960zM480 240h720v240H480z"
						/>
						<path
							fill="#232225"
							d="M0 480h240v240H0zM240 0h240v240H240zM480 480h240v240H480z"
						/>
						<path
							fill="#0058FF"
							d="M720 480h240v240H720zM960 0h240v240H960z"
						/>
						<path
							d="M480 480v240H240c0-132.548 107.452-240 240-240z"
							fill="#EEE"
						/>
						<path
							d="M960 480h240v240c-132.55 0-240-107.452-240-240z"
							fill="#C4C4C4"
						/>
						<path
							d="M1440 240h-240v480c132.55 0 240-107.452 240-240V240zM720 480c-132.548 0-240-107.452-240-240S587.452 0 720 0s240 107.452 240 240H720v240z"
							fill="#232225"
						/>
						<path
							d="M240 480H0V240c132.548 0 240 107.452 240 240z"
							fill="#0058FF"
						/>
						<circle cx="120" cy="120" r="60" fill="#232225" />
						<circle cx="840" cy="600" r="48" fill="#232225" />
						<path
							d="M600 240c0-66.274 53.726-120 120-120v240c-66.274 0-120-53.726-120-120z"
							fill="#0058FF"
						/>
						<path
							d="M840 240H720V120c66.274 0 120 53.726 120 120z"
							fill="#0084FF"
						/>
						<path
							d="M80 480H0v-80c44.183 0 80 35.817 80 80z"
							fill="#232225"
						/>
						<g className={styles.stroke}>
							{' '}
							<path
								className={styles.primaryStroke}
								d="M130 120h110"
							/>
							<path
								className={styles.whiteStroke}
								d="M1310 360h-110M350 120H240M1310 600h-110"
							/>
							<path
								className={styles.darkStroke}
								d="M1090 600h110M1090 360h110"
							/>
							<path
								className={styles.primaryStroke}
								d="M360 350V240"
							/>
							<circle
								cx="120"
								cy="120"
								r="9"
								className={styles.whiteStroke}
							/>
							<circle
								cx="360"
								cy="360"
								r="9"
								className={styles.whiteStroke}
							/>
							<circle
								cx="360"
								cy="120"
								r="9"
								className={styles.primaryStroke}
							/>
							<circle
								cx="1320"
								cy="360"
								r="9"
								className={styles.primaryStroke}
							/>
							<circle
								cx="1080"
								cy="360"
								r="9"
								className={styles.primaryStroke}
							/>
							<circle
								cx="1320"
								cy="600"
								r="9"
								className={styles.primaryStroke}
							/>
							<circle
								cx="1080"
								cy="600"
								r="9"
								className={styles.primaryStroke}
							/>
							<g clipPath="url(#clip1)">
								<circle
									cx="240"
									cy="240"
									r="120"
									transform="rotate(-180 240 240)"
									stroke="#fff"
								/>
							</g>
							<g clipPath="url(#clip2)">
								<circle
									cx="1200"
									cy="480"
									r="120"
									transform="rotate(-180 1200 480)"
									stroke="#fff"
								/>
							</g>
							<g clipPath="url(#clip3)">
								<circle
									cx="1200"
									cy="480"
									r="120"
									transform="rotate(-90 1200 480)"
									stroke="#fff"
								/>
							</g>
							<g clipPath="url(#clip4)">
								<circle
									cx="1200"
									cy="480"
									r="120"
									stroke="#232225"
								/>
							</g>
						</g>
						<path
							fill="#0058FF"
							d="M248 128h-16v-16h16zM368 248h-16v-16h16zM1208 368h-16v-16h16zM1328 488h-16v-16h16zM1192 592h16v16h-16zM1072 472h16v16h-16z"
						/>
						<g fill="#0058ff" className={styles.dotCircle}>
							<rect
								x="40"
								y="520"
								width="150"
								height="150"
								fill="url(#blueDots)"
							/>
							<circle cx="120" cy="510" r="4" />
							<circle cx="150" cy="510" r="4" />
							<circle cx="90" cy="510" r="4" />
							<circle cx="30" cy="570" r="4" />
							<circle cx="30" cy="600" r="4" />
							<circle cx="30" cy="630" r="4" />
							<circle cx="210" cy="570" r="4" />
							<circle cx="210" cy="600" r="4" />
							<circle cx="210" cy="630" r="4" />
							<circle cx="120" cy="690" r="4" />
							<circle cx="150" cy="690" r="4" />
							<circle cx="90" cy="690" r="4" />
						</g>
						<path
							d="M736 360L 1056 360"
							stroke="#13141F"
							strokeWidth="6"
							strokeDasharray="3 12"
						/>
						<rect
							x="1204"
							y="36"
							fill="url(#dots)"
							width="240"
							height="200"
						/>
					</g>
				</svg>
			</div>
		)
	}
}
