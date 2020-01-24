import { graphql } from 'gatsby'
import React, { Component } from 'react'
import { Link, Icon } from 'components/atoms'

export default class Newsletters extends Component {
	componentDidMount() {
		document.getElementById('typography.js').setAttribute('media', 'max-width: 1px') // neutralize typography.js on this page
	}
	componentWillUnmount() {
		document.getElementById('typography.js').removeAttribute('media') // re-enable typography.js when you navigate away from this page
	}

	render() {
		const data = this.props.data.newsletters

		return (
			<>
				<Link style={{color:'white',position:'absolute',padding:'2em', left:'2em',top:'0'}} to="/newsletter">
					<Icon margin="0 1em" name='leftArrow'/>
					All Newsletters
				</Link>
				<div style={{marginTop:'-66px'}} dangerouslySetInnerHTML={{ __html: data.archive_html }} />
			</>
		)
	}
}

export const pageQuery = graphql`
	query($send_time: Date) {
		newsletters(send_time: { eq: $send_time }) {
			archive_html
		}
	}
`
