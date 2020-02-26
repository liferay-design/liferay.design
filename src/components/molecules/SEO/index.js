import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'


const SEO = ({ description, previewImage, keywords, pageTitle, twitterHandle,canonicalLink, contentType }) => {
	return (
		<Helmet>
			<title>{pageTitle}</title>
			{contentType ? (
				<meta property="og:type" content={contentType} />
			) : (
				<meta property="og:type" content="website" />
			)}
			{previewImage ? (
				<meta property="og:image" content={previewImage} />
			) : (
				<meta
					property="og:image"
					content="https://liferay.design/images/articles/design-week-team.jpeg"
				/>
			)}
			{previewImage ? (
				<meta name="twitter:image" content={previewImage} />
			) : (
				<meta
					name="twitter:image"
					content="https://liferay.design/images/articles/design-week-team.jpeg"
				/>
			)}
			<meta
				name="keyword"
				content={
					`${keywords}` +
					', Liferay, Design, Liferay Design, open source design, '
				}
			/>
			<meta property="og:description" content={description} />
			<meta name="Description" content={description} />
			<meta property="og:title" content={pageTitle} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@liferaydesign" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={description} />
			{twitterHandle ? (
				<meta name="twitter:creator" content={twitterHandle} />
			) : (
				<meta name="twitter:creator" content="@liferaydesign" />
			)}
			{canonicalLink ? <link href={canonicalLink} rel="canonical" /> : null}
		</Helmet>
	)
}

SEO.propTypes = {
	description: PropTypes.string,
	previewImage: PropTypes.string,
	keywords: PropTypes.string,
	pageTitle: PropTypes.string,
	twitterHandle: PropTypes.string,
	canonicalLink: PropTypes.string,
	contentType: PropTypes.string,
}

export default SEO
