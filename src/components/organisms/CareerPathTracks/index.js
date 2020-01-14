import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

export const CareerPathTracks = ({
	vertical,
	description,
	summary,
	signals,
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
		.filter(edgeItem => edgeItem.node.vertical === vertical)
		.map(({ node }) => (
			<>
				<h2>{node.label}</h2>
				{description ? <p>{node.description}</p> : null}
				<div>
					{summary
						? node.levels.map(level => (
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
						: null}
				</div>
			</>
		))

	return <div>{Tracks}</div>
}

CareerPathTracks.propTypes = {
	vertical: PropTypes.string,
	description: PropTypes.bool,
	signals: PropTypes.bool,
	summary: PropTypes.bool,
}

export default CareerPathTracks
