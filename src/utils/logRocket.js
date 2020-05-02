import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export class LogRocket extends Component {
	componentDidMount() {
		window.LogRocket && window.LogRocket.init('vvepjf/liferaydesign')
	}

	render() {
		return (
			<Helmet>
				<script
					src="https://cdn.lr-ingest.io/LogRocket.min.js"
					crossorigin="anonymous"
				/>
			</Helmet>
		)
	}
}

export default LogRocket
