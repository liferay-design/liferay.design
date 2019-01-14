import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Flex, Heading, Image } from 'components/atoms'
import styles from './styles.module.scss'
import { Footer } from 'components/organisms'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Plx from 'react-plx'
import { PrincipleCard, PrinciplesHeader } from 'pages/principles/components/_index'

const Principles = () => {
	return (
		<div className={styles.pagestyles}>
			<PrinciplesHeader />
			<AnchorLink href="#principles" className={styles.scrollDown}>
				<svg
					className={styles.downArrow}
					width="39"
					height="48"
					viewBox="0 0 39 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21.5587 1.03906C21.5587 0.470534 21.0978 0.00965071 20.5293 0.00965071C19.9608 0.00965071 19.4999 0.470534 19.4999 1.03906H21.5587ZM20.5293 44.9606H19.4999V47.4459L21.2572 45.6885L20.5293 44.9606ZM37.7278 29.2179C38.1298 28.8159 38.1298 28.1642 37.7278 27.7621C37.3258 27.3601 36.674 27.3601 36.272 27.7621L37.7278 29.2179ZM19.4999 1.03906V44.9606H21.5587V1.03906H19.4999ZM21.2572 45.6885L37.7278 29.2179L36.272 27.7621L19.8014 44.2327L21.2572 45.6885Z"
						fill="#0B63CE"
					/>
					<path
						d="M14.7576 40.8219C15.1483 41.2349 15.1302 41.8865 14.7172 42.2772C14.3042 42.6679 13.6526 42.6498 13.2619 42.2367L14.7576 40.8219ZM1.25213 29.5407C0.861434 29.1276 0.879532 28.4761 1.29255 28.0854C1.70557 27.6947 2.3571 27.7128 2.7478 28.1258L1.25213 29.5407ZM13.2619 42.2367L1.25213 29.5407L2.7478 28.1258L14.7576 40.8219L13.2619 42.2367Z"
						fill="#3B3945"
					/>
				</svg>
			</AnchorLink>

			<Flex align="center" justify="center" className={styles.cardWrap} id="principles">
				<PrincipleCard />
			</Flex>
		</div>
	)
}

export default Principles
