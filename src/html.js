import LogRocket from 'logrocket'
import PropTypes from 'prop-types'
import React, { StrictMode } from 'react'

export default class HTML extends React.Component {
	render() {
		LogRocket.init('vvepjf/liferaydesign')
		return (
			<html lang="en" {...this.props.htmlAttributes}>
				<head>
					<link rel="icon" href="/images/favicon.ico?v=1.0" />
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<title>
						Liferay Design | Articles, Events, and Resources for the Open
						Source Design Community
					</title>

					{this.props.headComponents}
				</head>
				<body {...this.props.bodyAttributes}>
					<StrictMode>
						{this.props.preBodyComponents}

						<div
							key={`body`}
							id="___gatsby"
							dangerouslySetInnerHTML={{ __html: this.props.body }}
						/>

						{this.props.postBodyComponents}
					</StrictMode>
				</body>
			</html>
		)
	}
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
}
