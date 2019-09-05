import { CardGrid, Icon, Link, Heading, Text, Container } from 'components/atoms'
import { CardDefault, FormNewsletter } from 'components/molecules'
import { Banner, Footer, Navbar, TopBlogPosts } from 'components/organisms'
import React from 'react'
import MediaQuery from 'react-responsive'
import { Grid } from 'reakit'
import styles from './styles.module.scss'
import { Helmet } from 'react-helmet'

export default() => {
	return (
		<div>
			<Helmet>
				<title>
					Newsletter | Get Monthly Email Updates from Liferay's Design Team!
				</title>
			</Helmet>
			<Navbar />
			<Container padding="4rem 0 0">
				<Heading align="center" color="white" level="1">
					Receive Monthly Updates
				</Heading>
				<Text
					align="center"
					maxWidth="54ch"
					size="medium"
					color="lightGrey"
					center
				>
					No mystery meat here! We share a monthly roundup of cool links,
					articles, job listings, and more.
				</Text>
				<div className={styles.coolForm}>
					<FormNewsletter
						placeholderText="Your Email Address"
						submitText="Subscribe"
					/>
				</div>
			</Container>
			<Container background="#fff" padding="8rem 0 8rem">
				<Heading level={2} color="black" padding="4rem">
					More musings
				</Heading>
				<TopBlogPosts />
			</Container>
			<Footer />
		</div>
	)}