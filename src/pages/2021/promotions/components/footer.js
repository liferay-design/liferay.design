/** @jsx jsx */

import { jsx, Flex, Text } from 'theme-ui'
import { Link } from 'components/atoms'
import { Component } from 'react'

import data from 'markdown/annual-reports/TwentyTwentyOne.yaml'

export default class FancyFooter extends Component {
	componentDidMount() {
		document.body.style.marginBottom = '100vh'
	}

	componentWillUnmount() {
		document.body.style.marginBottom = '0'
	}

	render() {
		const quote = data.promotionsPage.quote

		return (
			<div
				sx={{
					width: '100%',
					height: '72vh',
					bottom: 0,
					position: 'fixed',
					zIndex: -1,
				}}
			>
				<Link
					to="/2021"
					sx={{
						position: 'fixed',
						top: '2rem',
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				>
					liferay.design/2021
				</Link>
				<Flex
					sx={{
						margin: '16vh auto',
						flexDirection: 'column',
						textAlign: 'center',
						fontSize: [5, 8, null],
						fontWeight: 'heading',
					}}
				>
					<Text sx={{ variant: 'text.display', color: 'primaryl2', mb: 4 }}>
						{quote.content}
					</Text>
					<Text
						sx={{
							fontSize: '.3em',
							variant: 'text.preheader',
							letterSpacing: '.5ch',
						}}
					>
						{quote.author}
					</Text>
				</Flex>
			</div>
		)
	}
}
