import React from 'react'
import { Link as GatsbyLink } from "gatsby"

// Since DOM elements <a> cannot receive activeClassName,
// destructure the prop here and pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, ...other }) => {
	// Tailor the following test to your environment.
	// This example assumes that any internal link (intended for Gatsby)
	// will start with exactly one slash, and that anything else is external.
	const internal = /^\/(?!\/)/.test(to)

	// Use Gatsby Link for internal links, and <a> for others
	if (internal) {
		return (
			<GatsbyLink to={to} activeClassName={activeClassName} {...other}>
				{children}
			</GatsbyLink>
		)
	}
	return (
		<a href={to} {...other}>
			{children}
		</a>
	)
}

export default Link