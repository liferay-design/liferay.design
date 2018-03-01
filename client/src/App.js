import { Route, BrowserRouter as Router } from 'react-router-dom'

import Events from 'pages/events'
import React from 'react'

const App = () => (
	<Router>
		<div className="liferay-design-site">
			<Route component={Events} path={'/'} />
		</div>
	</Router>
	<StaticRouter basename="/disruptors">
  		<Link to="https://nvite.com/DesignDisruptors/n34we6"/>
	</StaticRouter>
)

export default App
