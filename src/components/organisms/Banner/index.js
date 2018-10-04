import React from 'react'
import styles from './styles.module.scss'
import { Flex, Heading } from 'components/atoms'
import { Button } from 'react-md'

const Banner = () => (
	<Flex background="blue" height="100vh" direction="column" align="center" justify="center" className={styles.container}>
		<Heading level={1}>Blueprints</Heading>
		<Heading level={2}>Brand Guidelines For Liferay</Heading>
		<Button raised primary>Get Started</Button>
	</Flex>
)

export default Banner
