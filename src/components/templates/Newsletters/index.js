/** @jsx jsx */

import { jsx } from 'theme-ui'
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
		const newsletter = this.props.data.newsletter.edges[0]
		const prevNext = this.props.data.prevNext.edges.filter(
			item => item.node.send_time === newsletter.node.send_time,
		)

		const links = prevNext[0]

		return (
			<>
				<Link
					sx={{
						variant: 'links.nice',
						color: 'white',
						top: '0',
					}}
					to="/newsletter"
				>
					<Icon margin="0 1em" name="leftArrow" />
					All Newsletters
				</Link>
				<div
					sx={{ marginTop: '-66px' }}
					dangerouslySetInnerHTML={{ __html: newsletter.node.archive_html }}
				/>
				{links.previous ? (
					<Link
						sx={{ variant: 'links.nice' }}
						to={'/newsletter/' + links.previous.send_time}
					>
						<Icon margin="0 1em" name="leftArrow" />
						Previous Issue
					</Link>
				) : null}
				{links.next ? (
					<Link
						sx={{
							variant: 'links.nice',
							left: 'initial',
							right: '2em',
						}}
						to={'/newsletter/' + links.next.send_time}
					>
						Next Issue
						<Icon margin="0 1em" name="rightArrow" />
					</Link>
				) : null}
			</>
		)
	}
}

export const pageQuery = graphql`
	query($send_time: Date) {
		newsletter: allNewsletters(
			sort: { order: ASC, fields: send_time }
			filter: {
				settings: { title: { regex: "/Newsletter/" } }
				send_time: { eq: $send_time }
			}
		) {
			edges {
				node {
					archive_html
					send_time(formatString: "YYYY-MM")
				}
			}
		}
		prevNext: allNewsletters(
			sort: { order: ASC, fields: send_time }
			filter: {
				send_time: { ne: "" }
				settings: { title: { regex: "/Newsletter/" } }
			}
		) {
			edges {
				node {
					send_time(formatString: "YYYY-MM")
				}
				next {
					send_time(formatString: "YYYY-MM")
					settings {
						title
					}
				}
				previous {
					send_time(formatString: "YYYY-MM")
					settings {
						title
					}
				}
			}
		}
	}
`
