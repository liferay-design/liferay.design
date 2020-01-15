import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import {Link} from 'components/atoms'

export const CareerPathTracks = ({
	vertical,
	description,
	summary,
	signals,
	title,
	track,
	...props
}) => {
	const data = useStaticQuery(graphql`
		{
			allPathTracksJson {
				edges {
					node {
						id
						vertical
						label
						description
						levels {
							summary
							signals
						}
					}
				}
			}
		}
	`)

	const Tracks = data.allPathTracksJson.edges
		// .filter(edgeItem => edgeItem.node.label === track)
		.filter(edgeItem => edgeItem.node.vertical === vertical || edgeItem.node.label === track)
		.map(({ node }) => (
			<>
				<h3>{node.label}</h3>
				{description ? <p>{node.description}</p> : null}
				<div>
					{summary ? (
						node.levels.map(level => (
							<div>
								<p>{level.summary}</p>
								{signals ? (
									<ul>
										{level.signals.map(signal => (
											<li>{signal}</li>
										))}
									</ul>
								) : null}
							</div>
						))
					) : (
						<Link
							to={
								'/handbook/grow/' +
								`${node.vertical}`.replace(/\s+/g, '-').toLowerCase() +
								'/' +
								`${node.label}`.replace(/\s+/g, '-').toLowerCase()
							}
						>
							Go to all {node.label} Milestones
						</Link>
					)}
				</div>
			</>
		))

	return (
		<div>{title ? <h2>
			{vertical}
		</h2> : null}
			<div>{Tracks}</div>
		</div>
	)
}

CareerPathTracks.propTypes = {
	vertical: PropTypes.string,
	description: PropTypes.bool,
	signals: PropTypes.bool,
	title: PropTypes.bool,
	track: PropTypes.string,
	summary: PropTypes.bool,
}

export default CareerPathTracks
