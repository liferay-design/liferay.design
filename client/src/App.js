import { Route, BrowserRouter as Router } from 'react-router-dom'

import Events from 'pages/events'
import React from 'react'

const App = () => (
	<Router>
		<div className="liferay-design-site">
			<Route component={Events} path={'/'} />
		</div>
	</Router>
	<Route path='/disruptors' component={() => window.location = 'https://nvite.com/DesignDisruptors/n34we6'}/>

)

export default App
