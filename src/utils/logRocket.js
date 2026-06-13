import { Component } from 'react'
import LogRocketLib from 'logrocket'

const APP_ID = 'vvepjf/liferaydesign'

export class LogRocket extends Component {
	componentDidMount() {
		// Load from the bundled npm package (version-locked via package-lock)
		// instead of the rolling CDN URL. The CDN file is unversioned, so the
		// pinned SRI hash broke whenever LogRocket shipped a new build and the
		// browser blocked LogRocket.min.js outright.
		LogRocketLib.init(APP_ID)
	}

	render() {
		return null
	}
}

export default LogRocket
