import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Link, Text, Heading } from 'components/atoms'
import moment from 'moment'
import styles from './styles.module.scss'
import { Date } from 'components/molecules'
import { colors } from 'theme/'

export default ({}) => {
	const data = useStaticQuery(graphql`
		{
			allNewsletters(
				filter: {
					settings: { title: { regex: "/Newsletter/" } }
					emails_sent: { gt: 20 }
				}
			) {
				edges {
					node {
						settings {
							title
							subject_line
							preview_text
						}
						send_time
					}
				}
			}
		}
	`)

	const Newsletters = data.allNewsletters.edges.map(({ node }) => (
		<Link to={`${'/newsletter/' + moment(node.send_time).format('YYYY-MM')}`}>
			<Flex margin="2rem auto" className={styles.wrapper}>
				<Date
					className={styles.date}
					size="2rem"
					color={colors.grey}
					month={moment(node.send_time).format('MMM')}
					day={moment(node.send_time).format('DD')}
				/>
				<Flex direction="column" margin="0 1rem" width="100%">
					<Heading level={2}>
						{node.settings.title} 
					</Heading>{' '}
					<Text type="p">{node.settings.subject_line}</Text>
				</Flex>
			</Flex>
		</Link>
	))

	return <div>{Newsletters}</div>
}
