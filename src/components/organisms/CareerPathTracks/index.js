import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Accordion } from 'components/molecules'
import styles from './styles.module.scss'

export const CareerPathTracks = ({
	vertical,
	description,
	summary,
	signals,
	title,
	track,
	completeTrack
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
		.filter(
			edgeItem =>
				edgeItem.node.vertical === vertical || edgeItem.node.label === track,
		)
		.map(({ node }) => (
			<>
				{completeTrack ? null : <h3>{node.label}</h3>}
				{completeTrack || description ? <p>{node.description}</p> : null}
				<div className={description ? styles.signalList : null}>
					{completeTrack || summary ? (
						node.levels.map(level => (
							<div>
								<h2>{level.summary}</h2>
								{completeTrack || signals ? (
									<ul>
										{level.signals.map(signal => (
											<li>{signal}</li>
										))}
									</ul>
								) : null}
							</div>
						))
					) : (
						<Accordion title={'See all ' + node.label + ' milestones'}>
							<ol className={styles.niceList}>
								{node.levels.map(level => (
									<li>
										<h3>{level.summary}</h3>
										<ul>
											{level.signals.map(signal => (
												<li>{signal}</li>
											))}
										</ul>
									</li>
								))}
							</ol>
						</Accordion>
					)}
				</div>
			</>
		))

	return (
		<div>
			{title ? <h2>{vertical}</h2> : null}
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
