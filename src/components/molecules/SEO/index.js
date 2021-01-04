import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

const SEO = ({
	description,
	previewImage,
	previewImageAlt,
	keywords,
	pageTitle,
	twitterHandle,
	canonicalLink,
	contentType,
}) => {
	return (
		<Helmet>
			<title>{pageTitle}</title>
			{/*  Essential META Tags per https://css-tricks.com/essential-meta-tags-social-media/ */}
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={description} />
			<meta
				property="og:image"
				content={
					previewImage
						? 'https://liferay.design' + previewImage
						: 'https://liferay.design/images/articles/design-week-team.jpeg'
				}
			/>
			<meta name="twitter:card" content="summary_large_image" />

			{/*  Non-Essential, But Recommended */}
			{previewImageAlt ? (
				<meta name="twitter:image:alt" content={previewImageAlt} />
			) : null}

			{/*  Non-Essential, But Required for Analytics */}
			<meta name="twitter:site" content="@liferaydesign" />

			{/* Additional Useful Tags */}
			<meta property="og:type" content={contentType ? contentType : 'website'} />
			<meta
				name="keyword"
				content={
					`${keywords}` +
					', Liferay, Design, Liferay Design, open source design, '
				}
			/>
			<meta
				name="twitter:creator"
				content={twitterHandle ? twitterHandle : '@liferaydesign'}
			/>
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
