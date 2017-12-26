import { Route, BrowserRouter as Router } from 'react-router-dom'

import Events from 'pages/events'
import React from 'react'

const App = () => (
	<Router>
		<div className="liferay-design-site" key="app">
			<Route component={Events} path={'/'} />
		</div>
	</Router>
)

export default App
