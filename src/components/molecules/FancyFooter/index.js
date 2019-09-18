import React, { Component } from 'react'
import styles from './styles.module.scss'

export default class FancyFooter extends Component {
	componentDidMount() {
		document.body.style.marginBottom = '100vh'
	}

	render() {
		return (
			<div className={styles.fancyFooter}>
				<svg
					viewBox="0 0 1440 720"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0)">
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
						<path stroke="#0058FF" stroke-width="6" d="M130 120h110" />
						<path
							stroke="#fff"
							stroke-width="6"
							d="M1310 360h-110M350 120H240M1310 600h-110"
						/>
						<path
							stroke="#232225"
							stroke-width="6"
							d="M1090 600h110M1090 360h110"
						/>
						<path stroke="#0058FF" stroke-width="6" d="M360 350V240" />
						<circle cx="120" cy="120" r="9" stroke="#fff" stroke-width="6" />
						<circle cx="360" cy="360" r="9" stroke="#fff" stroke-width="6" />
						<circle
							cx="360"
							cy="120"
							r="9"
							stroke="#0058FF"
							stroke-width="6"
						/>
						<circle
							cx="1320"
							cy="360"
							r="9"
							stroke="#0058FF"
							stroke-width="6"
						/>
						<circle
							cx="1080"
							cy="360"
							r="9"
							stroke="#0058FF"
							stroke-width="6"
						/>
						<circle
							cx="1320"
							cy="600"
							r="9"
							stroke="#0058FF"
							stroke-width="6"
						/>
						<circle
							cx="1080"
							cy="600"
							r="9"
							stroke="#0058FF"
							stroke-width="6"
						/>
						<g clip-path="url(#clip1)">
							<circle
								cx="240"
								cy="240"
								r="120"
								transform="rotate(-180 240 240)"
								stroke="#fff"
								stroke-width="6"
							/>
						</g>
						<g clip-path="url(#clip2)">
							<circle
								cx="1200"
								cy="480"
								r="120"
								transform="rotate(-180 1200 480)"
								stroke="#fff"
								stroke-width="6"
							/>
						</g>
						<g clip-path="url(#clip3)">
							<circle
								cx="1200"
								cy="480"
								r="120"
								transform="rotate(-90 1200 480)"
								stroke="#fff"
								stroke-width="6"
							/>
						</g>
						<g clip-path="url(#clip4)">
							<circle
								cx="1200"
								cy="480"
								r="120"
								stroke="#232225"
								stroke-width="6"
							/>
						</g>
						<path
							fill="#0058FF"
							d="M248 128h-16v-16h16zM368 248h-16v-16h16zM1208 368h-16v-16h16zM1328 488h-16v-16h16zM1192 592h16v16h-16zM1072 472h16v16h-16z"
						/>
						<g fill="#0058ff" class="dot-circle">
							<circle cx="90" cy="510" r="4" />
							<circle cx="120" cy="510" r="4" />
							<circle cx="150" cy="510" r="4" />
							<circle cx="90" cy="540" r="4" />
							<circle cx="120" cy="540" r="4" />
							<circle cx="150" cy="540" r="4" />
							<circle cx="30" cy="570" r="4" />
							<circle cx="60" cy="660" r="4" />
							<circle cx="90" cy="570" r="4" />
							<circle cx="120" cy="570" r="4" />
							<circle cx="150" cy="570" r="4" />
							<circle cx="180" cy="660" r="4" />
							<circle cx="210" cy="570" r="4" />
							<circle cx="30" cy="600" r="4" />
							<circle cx="60" cy="540" r="4" />
							<circle cx="90" cy="600" r="4" />
							<circle cx="120" cy="600" r="4" />
							<circle cx="150" cy="600" r="4" />
							<circle cx="180" cy="540" r="4" />
							<circle cx="210" cy="600" r="4" />
							<circle cx="30" cy="630" r="4" />
							<circle cx="60" cy="570" r="4" />
							<circle cx="90" cy="630" r="4" />
							<circle cx="120" cy="630" r="4" />
							<circle cx="150" cy="630" r="4" />
							<circle cx="180" cy="570" r="4" />
							<circle cx="210" cy="630" r="4" />
							<circle cx="60" cy="600" r="4" />
							<circle cx="90" cy="660" r="4" />
							<circle cx="120" cy="660" r="4" />
							<circle cx="150" cy="660" r="4" />
							<circle cx="180" cy="600" r="4" />
							<circle cx="60" cy="630" r="4" />
							<circle cx="90" cy="690" r="4" />
							<circle cx="120" cy="690" r="4" />
							<circle cx="150" cy="690" r="4" />
							<circle cx="180" cy="630" r="4" />
						</g>
						<path
							d="M1056 361.5a1.5 1.5 0 1 0 0-3v3zm-320 0h.952v-3H736v3zm10.476 0h1.905v-3h-1.905v3zm11.429 0h1.905v-3h-1.905v3zm11.428 0h1.905v-3h-1.905v3zm11.429 0h1.905v-3h-1.905v3zm11.428 0h1.905v-3h-1.905v3zm11.429 0h1.905v-3h-1.905v3zm11.429 0h1.904v-3h-1.904v3zm11.428 0h1.905v-3h-1.905v3zm11.429 0h1.905v-3h-1.905v3zm11.428 0h1.905v-3h-1.905v3zm11.429 0h1.905v-3h-1.905v3zm11.428 0h1.905v-3h-1.905v3zm11.429 0h1.905v-3h-1.905v3zm11.429 0h1.904v-3h-1.904v3zm11.428 0h1.905v-3h-1.905v3zm11.429 0h1.904v-3h-1.904v3zm11.428 0h1.905v-3h-1.905v3zm11.429 0h1.905v-3h-1.905v3zm11.428 0h1.905v-3h-1.905v3zm11.429 0h1.905v-3h-1.905v3zm11.429 0h1.904v-3h-1.904v3zm11.428 0h1.905v-3h-1.905v3zm11.429 0h1.904v-3h-1.904v3zm11.425 0h1.91v-3h-1.91v3zm11.43 0h1.91v-3h-1.91v3zm11.43 0h1.91v-3h-1.91v3zm11.43 0h1.9v-3h-1.9v3zm11.43 0h.95v-3h-.95v3z"
							fill="#13141F"
						/>
						<g fill="#353747">
							<circle cx="1230" cy="70" r="2" />
							<circle cx="1250" cy="70" r="2" />
							<circle cx="1270" cy="70" r="2" />
							<circle cx="1290" cy="70" r="2" />
							<circle cx="1310" cy="70" r="2" />
							<circle cx="1330" cy="70" r="2" />
							<circle cx="1350" cy="70" r="2" />
							<circle cx="1370" cy="70" r="2" />
							<circle cx="1390" cy="70" r="2" />
							<circle cx="1410" cy="70" r="2" />
							<circle cx="1430" cy="70" r="2" />
							<circle cx="1230" cy="50" r="2" />
							<circle cx="1250" cy="50" r="2" />
							<circle cx="1270" cy="50" r="2" />
							<circle cx="1290" cy="50" r="2" />
							<circle cx="1310" cy="50" r="2" />
							<circle cx="1330" cy="50" r="2" />
							<circle cx="1350" cy="50" r="2" />
							<circle cx="1370" cy="50" r="2" />
							<circle cx="1390" cy="50" r="2" />
							<circle cx="1410" cy="50" r="2" />
							<circle cx="1430" cy="50" r="2" />
							<circle cx="1230" cy="90" r="2" />
							<circle cx="1250" cy="90" r="2" />
							<circle cx="1270" cy="90" r="2" />
							<circle cx="1290" cy="90" r="2" />
							<circle cx="1310" cy="90" r="2" />
							<circle cx="1330" cy="90" r="2" />
							<circle cx="1350" cy="90" r="2" />
							<circle cx="1370" cy="90" r="2" />
							<circle cx="1390" cy="90" r="2" />
							<circle cx="1410" cy="90" r="2" />
							<circle cx="1430" cy="90" r="2" />
							<circle cx="1230" cy="110" r="2" />
							<circle cx="1250" cy="110" r="2" />
							<circle cx="1270" cy="110" r="2" />
							<circle cx="1290" cy="110" r="2" />
							<circle cx="1310" cy="110" r="2" />
							<circle cx="1330" cy="110" r="2" />
							<circle cx="1350" cy="110" r="2" />
							<circle cx="1370" cy="110" r="2" />
							<circle cx="1390" cy="110" r="2" />
							<circle cx="1410" cy="110" r="2" />
							<circle cx="1430" cy="110" r="2" />
							<circle cx="1230" cy="130" r="2" />
							<circle cx="1250" cy="130" r="2" />
							<circle cx="1270" cy="130" r="2" />
							<circle cx="1290" cy="130" r="2" />
							<circle cx="1310" cy="130" r="2" />
							<circle cx="1330" cy="130" r="2" />
							<circle cx="1350" cy="130" r="2" />
							<circle cx="1370" cy="130" r="2" />
							<circle cx="1390" cy="130" r="2" />
							<circle cx="1410" cy="130" r="2" />
							<circle cx="1430" cy="130" r="2" />
							<circle cx="1230" cy="150" r="2" />
							<circle cx="1250" cy="150" r="2" />
							<circle cx="1270" cy="150" r="2" />
							<circle cx="1290" cy="150" r="2" />
							<circle cx="1310" cy="150" r="2" />
							<circle cx="1330" cy="150" r="2" />
							<circle cx="1350" cy="150" r="2" />
							<circle cx="1370" cy="150" r="2" />
							<circle cx="1390" cy="150" r="2" />
							<circle cx="1410" cy="150" r="2" />
							<circle cx="1430" cy="150" r="2" />
							<circle cx="1230" cy="170" r="2" />
							<circle cx="1250" cy="170" r="2" />
							<circle cx="1270" cy="170" r="2" />
							<circle cx="1290" cy="170" r="2" />
							<circle cx="1310" cy="170" r="2" />
							<circle cx="1330" cy="170" r="2" />
							<circle cx="1350" cy="170" r="2" />
							<circle cx="1370" cy="170" r="2" />
							<circle cx="1390" cy="170" r="2" />
							<circle cx="1410" cy="170" r="2" />
							<circle cx="1430" cy="170" r="2" />
							<circle cx="1230" cy="190" r="2" />
							<circle cx="1250" cy="190" r="2" />
							<circle cx="1270" cy="190" r="2" />
							<circle cx="1290" cy="190" r="2" />
							<circle cx="1310" cy="190" r="2" />
							<circle cx="1330" cy="190" r="2" />
							<circle cx="1350" cy="190" r="2" />
							<circle cx="1370" cy="190" r="2" />
							<circle cx="1390" cy="190" r="2" />
							<circle cx="1410" cy="190" r="2" />
							<circle cx="1430" cy="190" r="2" />
							<circle cx="1230" cy="210" r="2" />
							<circle cx="1210" cy="70" r="2" />
							<circle cx="1210" cy="50" r="2" />
							<circle cx="1210" cy="90" r="2" />
							<circle cx="1210" cy="110" r="2" />
							<circle cx="1210" cy="130" r="2" />
							<circle cx="1210" cy="150" r="2" />
							<circle cx="1210" cy="170" r="2" />
							<circle cx="1210" cy="190" r="2" />
							<circle cx="1210" cy="210" r="2" />
							<circle cx="1250" cy="210" r="2" />
							<circle cx="1270" cy="210" r="2" />
							<circle cx="1290" cy="210" r="2" />
							<circle cx="1310" cy="210" r="2" />
							<circle cx="1330" cy="210" r="2" />
							<circle cx="1350" cy="210" r="2" />
							<circle cx="1370" cy="210" r="2" />
							<circle cx="1390" cy="210" r="2" />
							<circle cx="1410" cy="210" r="2" />
							<circle cx="1430" cy="210" r="2" />
							<circle cx="1230" cy="230" r="2" />
							<circle cx="1210" cy="230" r="2" />
							<circle cx="1250" cy="230" r="2" />
							<circle cx="1270" cy="230" r="2" />
							<circle cx="1290" cy="230" r="2" />
							<circle cx="1310" cy="230" r="2" />
							<circle cx="1330" cy="230" r="2" />
							<circle cx="1350" cy="230" r="2" />
							<circle cx="1370" cy="230" r="2" />
							<circle cx="1390" cy="230" r="2" />
							<circle cx="1410" cy="230" r="2" />
							<circle cx="1430" cy="230" r="2" />
						</g>
					</g>
					<defs>
						<clipPath id="clip0">
							<path fill="#fff" d="M0 0h1440v720H0z" />
						</clipPath>
						<clipPath id="clip1">
							<path
								fill="#fff"
								transform="rotate(-180 240 120)"
								d="M0 0h240v240H0z"
							/>
						</clipPath>
						<clipPath id="clip2">
							<path
								fill="#fff"
								transform="rotate(-180 720 240)"
								d="M0 0h240v240H0z"
							/>
						</clipPath>
						<clipPath id="clip3">
							<path
								fill="#fff"
								transform="rotate(-90 960 -240)"
								d="M0 0h240v240H0z"
							/>
						</clipPath>
						<clipPath id="clip4">
							<path
								fill="#fff"
								transform="translate(960 480)"
								d="M0 0h240v240H0z"
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
		)
	}
}
