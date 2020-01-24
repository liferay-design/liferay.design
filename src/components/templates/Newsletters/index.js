import { Navbar } from 'components/organisms'
import { graphql } from 'gatsby'
import React, { Component } from 'react'
import { Container } from 'components/atoms'

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
			<div>
				<Navbar section="Newsletters" />
                <Container>
                    <div
                        dangerouslySetInnerHTML={{ __html: data.archive_html }}
                    />
                </Container>
			</div>
		)
	}
}

export const pageQuery = graphql`
	query($send_time: Date) {
		newsletters(send_time: { eq: $send_time }) {
			id
			archive_html
			settings {
				preview_text
				subject_line
				title
			}
			send_time(formatString: "YYYY-MM")
		}
	}
`
