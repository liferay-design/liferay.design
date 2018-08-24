import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

// import '../css/blog-post.css'; // make it pretty!

export default function Template({ data }) {
	const blog = data.markdownRemark

	return (
		<div className="blog-post-container">
			<Helmet title={`Your Blog Name - ${blog.frontmatter.title}`} />

			<div className="blog-post">
				<h1>{blog.frontmatter.title}</h1>

				<div
					className="blog-post-content"
					dangerouslySetInnerHTML={{ __html: blog.html }}
				/>
			</div>
		</div>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
	}
`
