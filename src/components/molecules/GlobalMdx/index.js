import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Image } from 'components/atoms'
import { DoDont } from 'components/molecules'

const shortcodes = { Image, DoDont }

export default ({ children }) => (
	<div>
		<MDXProvider components={shortcodes}>{children}</MDXProvider>
	</div>
)
