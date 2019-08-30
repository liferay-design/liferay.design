import React from 'react'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'
import { Image } from 'components/atoms'

const shortcodes = { Image }

export default ({ children }) => (
	<MDXProvider components={shortcodes}>
		<MDXRenderer>{children}</MDXRenderer>
	</MDXProvider>
)
