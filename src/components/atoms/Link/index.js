import { Link as GatsbyLink } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React from 'react'
import {colors} from 'theme'

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
			<AniLink
				fade
				bg="red"
				duration={.5}
				to={to}
				activeClassName={activeClassName}
				{...other}
			>
				{children}
			</AniLink>
		)
	}
	return (
		<a href={to} {...other}>
			{children}
		</a>
	)
}

export default Link
