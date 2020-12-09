/** @jsx jsx */

import { Helmet } from 'react-helmet'
import { jsx, Text } from 'theme-ui'
import { Component } from 'react'

export default class FancyFooter extends Component {
	componentDidMount() {
		document.body.style.marginBottom = '100vh'
	}

	componentWillUnmount() {
		document.body.style.marginBottom = '0'
	}

	render() {
		return (
			<div
				sx={{
					width: '100%',
					height: '50vh',
					bottom: 0,
					position: 'fixed',
					zIndex: -1,
				}}
			>
				<Helmet>
					<style type="text/css">
						{`::-webkit-scrollbar {
                            display: none;
                            @-moz-document url-prefix() {
                                :root {
                                    scrollbar-width: none;
                                }
                            }
                        }`}
					</style>
				</Helmet>
				<Text sx={{ textAlign: 'center' }}>Bye Felicia</Text>
			</div>
		)
	}
}
