import App from './App'
import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDom from 'react-dom'

require('styles/global.scss')

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
