import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Heading, Text, Flex, Link, Icon, Image } from 'components/atoms'
import PropTypes from 'prop-types'
import { Avatar } from 'react-md'
import moment from 'moment'
import styles from './styles.module.scss'
import { Date } from 'components/molecules'
import { colors } from 'theme/'

export default function ChangelogFeed({ items, ...props }) {
	const data = useStaticQuery(graphql`
		{
			allChangelogYaml(sort: { order: DESC, fields: [id] }) {
				totalCount
				edges {
					node {
						id
						gitUrl
						titleUrl
						author {
							id
							headshot
						}
						title
						icon
						longSummary
						contributors {
							id
							headshot
						}
						buildPreview
					}
				}
			}
		}
	`)

	const Feed = data.allChangelogYaml.edges.slice(0, `${items}`).map(({ node }) => (
		<Flex margin="4rem 0" key={node.id} className={styles.wrapper}>
			<Date
				size="2rem"
				color={colors.primaryd2}
				month={moment(node.id).format('MMM')}
				day={moment(node.id).format('DD')}
			/>
			<Flex direction="column" margin="0 1rem" width="100%">
				<Link to={node.titleUrl}>
					<Heading level={2}>
						{node.title}{' '}
						{node.titleUrl ? (
							<Icon name="externalLink" width=".6em" />
						) : null}
						{node.longSummary ? <Text>{node.longSummary}</Text> : ''}
					</Heading>{' '}
				</Link>
				<Flex justify="space-between">
					<Flex direction='row-reverse' className={styles.avatarWrapper}>
						{node.contributors ? (
							<>
								{node.contributors.map(i => (
									<div>
										<Image
											className={styles.avatar}
											role='presentation'
											title={i.id}
											src={i.headshot}
											alt={`${i.id}` + '‘s headshot'}
										/>
									</div>
								))}
							</>
						) : (
							''
						)}
						<Image
							className={styles.avatar}
							role='presentation'
							src={node.author.headshot}
							title={node.author.id}
							alt={`${node.author.id}` + '‘s headshot'}
						/>
					</Flex>
					<Link
						to={
							'https://github.com/liferay-design/liferay.design' +
							`${node.gitUrl}`
						}
					>
						<Flex align="center" className={styles.github}>
							<Icon name="github" width="1em" margin="0 .5em" />
							<Text>View on Github</Text>
						</Flex>
					</Link>
				</Flex>
			</Flex>
		</Flex>
	))

	return <div>{Feed}</div>
}

ChangelogFeed.propTypes = {
	items: PropTypes.string,
}
