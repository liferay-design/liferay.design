import { Route, BrowserRouter as Router } from 'react-router-dom'

import Events from 'pages/events'
import Home from 'pages/home'
import React from 'react'

const App = () => (
	<Router>
		<div className="liferay-design-site">
			<Route component={Home} path={'/'} />
			<Route
				path="/disruptors"
				component={() => (window.location = 'https://nvite.com/DesignDisruptors/n34we6')}
			/>
		</div>
	</Router>
)

export default App
