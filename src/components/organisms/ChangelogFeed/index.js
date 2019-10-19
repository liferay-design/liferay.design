import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Heading, Text, Flex, Link, Icon } from 'components/atoms'
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
		<Flex className={styles.wrapper}>
			<Date
				size='2rem'
				color={colors.primaryd2}
				month={moment(node.id).format('MMM')}
				day={moment(node.id).format('DD')}
			/>
			<Flex margin="4rem 0" direction="column" key={node.id}>
				<Link to={node.titleUrl}>
					<Heading level="2">
						{node.title}{' '}
						{node.titleUrl ? (
							<Icon name="externalLink" width=".6em" />
						) : null}
					</Heading>{' '}
				</Link>
				{node.longSummary ? <Text>{node.longSummary}</Text> : ''}
				<Text>{node.id}</Text>
				<Link
					to={
						'https://github.com/liferay-design/liferay.design' +
						`${node.gitUrl}`
					}
				>
					<Icon name="github" width="1em" margin="0 0 0 .5em" />
					<Text>See full details on Github.</Text>
				</Link>
				<Text>Author: {node.author.id}</Text>
				<Flex>
					<Avatar
						src={node.author.headshot}
						title={node.author.id}
						alt={`${node.author.id}` + '‘s headshot'}
					/>
					{node.contributors ? (
						<>
							{node.contributors.map(i => (
								<div>
									<Avatar
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
				</Flex>
			</Flex>
		</Flex>
	))

	return <div>{Feed}</div>
}

ChangelogFeed.propTypes = {
	items: PropTypes.string,
}
