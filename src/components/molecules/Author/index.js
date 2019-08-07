import { Text, Link, Image, Flex } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const Author = ({ id, avatar, slug }) => {
	return (
		<Flex align="center" className={styles.author}>
			<Image imgSrc={avatar} className={styles.avatar} />
			<Text>
				by {''}
				<Link to={'/team/' + `${slug}`}>{id}</Link>
			</Text>
		</Flex>
	)
}

Author.propTypes = {
	id: PropTypes.string,
}

export default Author
