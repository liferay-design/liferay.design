/** @jsx jsx */

import { jsx } from 'theme-ui'
import React from 'react'

class Redirect extends React.Component {
	componentDidMount() {
		window.location.replace('https://designweek.framer.website/')
	}
	render() {
		return null
	}
}

const DesignWeek = () => {
	return <Redirect />
}

export default DesignWeek
