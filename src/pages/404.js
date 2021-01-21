/** @jsx jsx */

import { jsx, Styled, Text, Flex, Image } from 'theme-ui'
import { MainLayout } from 'components/templates'
import { RecentBlogPosts } from 'components/organisms'
import { Container, Link } from 'components/atoms'
import { useStaticQuery, graphql } from 'gatsby'
import { avatarPath, firstWord, makeAuthorSlug } from 'utils'
import { SEO } from 'components/molecules'

export default () => {
	const H1 = Styled.h1

	const data = useStaticQuery(graphql`
		{
			allAuthorsYaml(
				filter: { active: { eq: true }, id: { ne: "Nate Cavanaugh" } }
			) {
				edges {
					node {
						id
					}
				}
			}
		}
	`)

	const Authors = data.allAuthorsYaml.edges

	const random = Authors[Math.floor(Math.random() * Authors.length)]

	const randomAuthor = random.node

	console.log(randomAuthor, 'why do we keep getting the same one??')

	return (
		<MainLayout>
			<SEO
				pageTitle="404 &mdash; Page Not Found &mdash; Liferay.Design"
				previewImage={`${avatarPath(randomAuthor.id)}`}
			/>
			<Container>
				<Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
					<H1
						sx={{
							position: 'relative',
							fontSize: ['20vmin', '20vmax', null],
							mb: 0,
							color: 'white',
						}}
					>
						4
						<Link to={'/team/' + `${makeAuthorSlug(randomAuthor.id)}`}>
							<Image
								sx={{
									mb: '-.16em',
									mx: '.1em',
									height: '1em',
									width: '1em',
									borderRadius: '.5em',
								}}
								alt="0"
								src={`${avatarPath(randomAuthor.id)}`}
							/>
						</Link>
						4
					</H1>
					<Text sx={{ fontSize: 4, my: 2, color: 'white' }}>
						Something went wrong!
					</Text>
					<Text sx={{ fontSize: 4, mb: 4, color: 'mainL3' }}>
						Let us know —{' '}
						<Link
							sx={{ color: 'mainL3', textDecoration: 'underline' }}
							to="https://twitter.com/liferaydesign"
						>
							Tweet @liferaydesign
						</Link>
						.
					</Text>
				</Flex>
			</Container>
			<RecentBlogPosts
				heading={
					"While you're here check out some recent posts by " +
					`${firstWord(randomAuthor.id)}`
				}
				sx={{ textAlign: 'center' }}
				teammate={`${makeAuthorSlug(randomAuthor.id)}`}
			/>
		</MainLayout>
	)
}
