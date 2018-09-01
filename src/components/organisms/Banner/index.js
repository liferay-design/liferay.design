import React from 'react'
import styles from './styles.module.scss'
import { Heading } from 'components/atoms'
import { Button } from 'react-md'

const Banner = () => (
	<div className={styles.container}>
		<Heading level={1}>Blueprints</Heading>
		<Heading level={2}>Brand Guidelines For Liferay</Heading>
		<Button raised primary>Get Started</Button>
	</div>
)

export default Banner
