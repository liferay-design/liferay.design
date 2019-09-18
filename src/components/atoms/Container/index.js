import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'
import { Heading, Flex, NiceLink } from 'components/atoms'
import { spacing } from 'theme'

const Container = ({ banner, children, background, padding, linkDestination, linkText, heading, ...props }) => {
	return (
		<div
			className={styles.wrapper}
			style={{ background: `${background}`, padding: `${padding}` }}
		>
			<div className={styles.container}>
				<Flex justify="space-between">
					{heading ? (
						<Heading
							color="white"
							level={2}
							padding={spacing.medium}
							{...props}
						>
							{heading}
						</Heading>
					) : null}
					{linkText ? (
						<NiceLink to={linkDestination}>{linkText}</NiceLink>
					) : null}
				</Flex>
				{children}
			</div>
			{banner ? <div style={{background:"white", padding:`${spacing.medium}`}} ></div> : null}
		</div>
	)
}

Container.propTypes = {
	children: PropTypes.node,
	heading: PropTypes.string,
	padding: PropTypes.string,
	background: PropTypes.string,
	linkDestination: PropTypes.string,
	linkText: PropTypes.string,
}

export default Container
