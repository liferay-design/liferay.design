import { Link } from 'components/atoms'
import React from 'react'
const { kebabCase } = require(`lodash`)


const Tags = ({ tags }) => {
	if (!tags) return null
	const tagLinks = tags.map((tag, i) => {
		const divider = i < tags.length - 1 && <span>{` `}</span>
		return (
			<span key={tag}>
				<Link
					sx={{
						variant: 'text.tag',
					}}
					to={`/tags/${kebabCase(tag.toLowerCase())}`}
				>
					{tag}
				</Link>
				{divider}
			</span>
		)
	})
	return (
		<span>
			{tagLinks}
		</span>
	)
}

export default Tags
