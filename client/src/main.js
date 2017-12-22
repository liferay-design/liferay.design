import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Events from 'pages/events';

require('styles/global.scss');

window.LiferayDesign = {};

class Site extends React.Component {
	render() {
		return (
			<Router>
				<div className="liferay-design-site" key="app">
					<Route
						component={Events}
						path={'/'}
					/>
				</div>
			</Router>
		);
	}
}

window.LiferayDesign.run = node => {
	ReactDom.render(
		<Site />,
		node
	);
};