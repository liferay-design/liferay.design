import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import { Flex, Heading, Image } from 'components/atoms'
import styles from './styles.module.scss'
import { Footer } from 'components/organisms'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Plx from 'react-plx'
import {
	PrincipleCard,
} from 'pages/principles/components/_index'

const Principles = () => {
	return (
		<div className={styles.pagestyles}>
		<Flex
				align="center"
				justify="center"
				className={styles.cardWrap}
			>
			<PrincipleCard />
			</Flex>
			
		</div>
	)
}

export default Principles