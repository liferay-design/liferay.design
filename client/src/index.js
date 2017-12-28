import App from './App'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDom from 'react-dom'

require('theme/global.scss')
// require('theme/reset.scss')
// commenting out the reset b/c its not working / might not be necessary //

const render = Component => {
	ReactDom.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root'),
	)
}

render(App)

if (module.hot) {
	module.hot.accept('./App', () => {
		render(App)
	})
}
