import React from 'react'

import { SEO } from 'components/molecules'

import { Grid } from 'reakit'
import MediaQuery from 'react-responsive'

import { Card, Heading } from 'pages/design-week/components/_index'
import styles from './styles.module.scss'
import { sizes } from 'theme'

const DesignWeek = () => {
	return (
        <>
			<SEO
				pageTitle="Design Week 2020 | Liferay Design"
				description="Liferay's Design Department Gathering"
				previewImage="/images/design-week/open-graph.png"
				twitterHandle="@liferaydesign"
			/>

			<body className={styles.page}>
				<Grid className={styles.grid}>
					<Heading title="Design Week" />
					<Card 
                        location="Los Angeles, CA"
                        date="Mar 21—27"
                        cta="R.S.V.P."
                        ctaUrl="https://forms.liferay.com"
                    />
				</Grid>
			</body>
		</>
	)
}

export default DesignWeek
