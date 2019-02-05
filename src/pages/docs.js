import React from 'react'
import { Link, graphql } from 'gatsby'

export default ({ data }) => {
	return (
		<div>
			{data.allGoogleDocs.edges.map(({ node }) => (
				<div key={node.id} dangerouslySetInnerHTML={{ __html: node.doc }} />
			))}
		</div>
	)
}

export const query = graphql`
	{
		allGoogleDocs {
			edges {
				node {
					id
					doc
				}
			}
		}
	}
`
