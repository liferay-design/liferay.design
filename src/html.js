import React, { StrictMode } from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
	render() {
		return (
			<html {...this.props.htmlAttributes}>
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, shrink-to-fit=no"
					/>
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
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
