import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CardGrid, Text, Container } from 'components/atoms'
import { CardDefault } from 'components/molecules'

export default ({ teammate, currentPost, ...props }) => {
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

	const Tracks = data.allPathTracksJson.edges.map(({ node }) => (
		<>
			<h2>{node.label}</h2>
			<p>{node.description}</p>
			<div>
				{node.levels.map(level => (
					<div>
						<p>{level.summary}</p>
						<ul>
							{level.signals.map(signal => (
								<li>{signal}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</>
	))

	return <div>{Tracks}</div>
}
