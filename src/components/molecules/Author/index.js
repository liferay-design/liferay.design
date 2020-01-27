import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Image, Link, Text, Flex } from 'components/atoms'
import { headshotPath, makeAuthorSlug } from 'utils'

export default ( {id, guest, ...props} ) => {
	const data = useStaticQuery(graphql`
		{
            allAuthorsYaml {
                edges {
                    node {
                        id
                    }
                }
            }
        }
	`)

	const author = data.allAuthorsYaml.edges
		.filter(edges => edges.node.id === id)
		.map(({ node }) => (
			<Flex {...props} align="center">
				<Link to={'/team/' + makeAuthorSlug(node.id)}>
					<div style={{ marginRight: '.5rem', width: '3rem' }}>
						<Image circle src={headshotPath(node.id)} />
					</div>
				</Link>
				<Text size="medium" color="grey">
					by {''}
					<Link to={'/team/' + makeAuthorSlug(node.id)}>{id}</Link>
				</Text>
			</Flex>
		))

	return (
        <div>{author}</div>
	)}
