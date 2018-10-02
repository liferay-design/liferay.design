import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { Card, CardTitle, CardText } from 'react-md'

const LexiconCard = ({ title, text, cta, to }) => {
	return (
		<Link className={styles} to={to}>
			<Card className={styles.card} >
				<div className={styles.copy}>
					<CardTitle className={styles.title} title={title}/>
					<CardText className={styles.text} >{text}</CardText>
					<CardText className={styles.cta}>{cta}</CardText>
				</div>
			</Card>
		</Link>
	)
}

LexiconCard.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	cta: PropTypes.string,
	to: PropTypes.string,
	styles: PropTypes.string,
}

export default LexiconCard
