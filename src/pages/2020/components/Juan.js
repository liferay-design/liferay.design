/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import Plx from 'react-plx'

const Juan = ({}) => {
	const image = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			fill="none"
			viewBox="0 0 1600 1200"
			sx={{ transform: ['translateY(50vh)', 'initial'] }}
		>
			<path
				fill="#344DB5"
				d="M300 797h136v136H300zM1204 977h220v220h-220z"
				opacity=".38"
			/>
			<path fill="#395DED" d="M1384 913h40v40h-40z" opacity=".2" />
			<path fill="#FFC90A" d="M114 1033h24v24h-24z" />
			<path fill="#395DED" d="M138 307h24v24h-24z" opacity=".2" />
			<path fill="#395DED" d="M436 933h264v264H436z" />
			<path fill="#FFC90A" d="M1390 1h24v26h-24z" />
			<image
				xlinkHref="/images/2020/juan-up-transparent.png"
				x="435"
				y="594"
				width="905"
				height="610"
			/>
			<path fill="#395DED" d="M1424 953h24v24h-24z" />
			<g fill="#C4C4C4" opacity=".1">
				<path d="M1424 661h8v8h-8zM1480 661h8v8h-8zM1536 661h8v8h-8zM1452 661h8v8h-8zM1508 661h8v8h-8zM1564 661h8v8h-8zM1424 717h8v8h-8zM1480 717h8v8h-8zM1536 717h8v8h-8zM1452 717h8v8h-8zM1508 717h8v8h-8zM1564 717h8v8h-8zM1424 773h8v8h-8zM1480 773h8v8h-8zM1536 773h8v8h-8zM1452 773h8v8h-8zM1508 773h8v8h-8zM1564 773h8v8h-8zM1424 689h8v8h-8zM1480 689h8v8h-8zM1536 689h8v8h-8zM1452 689h8v8h-8zM1508 689h8v8h-8zM1564 689h8v8h-8zM1424 745h8v8h-8zM1480 745h8v8h-8zM1536 745h8v8h-8zM1452 745h8v8h-8zM1508 745h8v8h-8zM1564 745h8v8h-8zM1424 801h8v8h-8zM1480 801h8v8h-8zM1536 801h8v8h-8zM1452 801h8v8h-8zM1508 801h8v8h-8zM1564 801h8v8h-8z" />
			</g>
			<g fill="#C4C4C4" opacity=".1">
				<path d="M232 891h6v6h-6zM284 891h6v6h-6zM336 891h6v6h-6zM258 891h6v6h-6zM310 891h6v6h-6zM362 891h6v6h-6zM232 943h6v6h-6zM284 943h6v6h-6zM336 943h6v6h-6zM258 943h6v6h-6zM310 943h6v6h-6zM362 943h6v6h-6zM232 995h6v6h-6zM284 995h6v6h-6zM336 995h6v6h-6zM258 995h6v6h-6zM310 995h6v6h-6zM362 995h6v6h-6zM232 917h6v6h-6zM284 917h6v6h-6zM336 917h6v6h-6zM258 917h6v6h-6zM310 917h6v6h-6zM362 917h6v6h-6zM232 969h6v6h-6zM284 969h6v6h-6zM336 969h6v6h-6zM258 969h6v6h-6zM310 969h6v6h-6zM362 969h6v6h-6zM232 1021h6v6h-6zM284 1021h6v6h-6zM336 1021h6v6h-6zM258 1021h6v6h-6zM310 1021h6v6h-6zM362 1021h6v6h-6z" />
			</g>
		</svg>
	)
	const juanAppear = [
		{
			start: '#message',
			end: '#subscribe',
			properties: [
				{
					startValue: 0,
					endValue: 1,
					property: 'opacity',
				},
				{
					startValue: 120,
					endValue: 10,
					unit: 'vh',
					property: 'translateY',
				},
			],
		},
		{
			start: '#subscribe',
			end: '#footer',
			properties: [
				{
					startValue: 1,
					endValue: 0,
					property: 'opacity',
				},
			],
		},
	]
	return (
		<Box
			sx={{
				position: 'fixed',
				bottom: 0,
				marginLeft: ['-50%'],
				transform: 'translateX(25%)',
				width: ['160vw', '100%'],
				zIndex: -1,
				pointerEvents: 'none',
			}}
		>
			<Plx
				parallaxData={juanAppear}
				sx={{
					opacity: 0,
					transform: 'translateY(100vh)',
				}}
			>
				{image}
			</Plx>
			<div sx={{ display: ['block', 'none'], visibility: 'hidden' }}>{image}</div>
		</Box>
	)
}

export default Juan
