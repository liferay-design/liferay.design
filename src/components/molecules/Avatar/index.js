import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Image, Link } from 'components/atoms'

export default ( {name, guest, ...props} ) => {
	const data = useStaticQuery(graphql`
		{
            allAuthorsYaml {
                edges {
                    node {
                        id
                        slug
                        headshot
                    }
                }
            }
        }
	`)

	const person = data.allAuthorsYaml.edges
        .filter(edges => edges.node.id === name)
        .map(({ node }) => (
            <Link to={'/team/' + `${node.slug}`}> 
                <div
                    style={{width:'3rem'}}
                >
                    <Image circle src={node.headshot} />
                </div>
            </Link>
        ))

	return (
        <div>{person}</div>
	)}

