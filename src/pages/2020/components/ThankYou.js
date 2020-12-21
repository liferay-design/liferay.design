/** @jsx jsx */

import { jsx, Box, Flex, Text } from 'theme-ui'

const HeaderBackground = ({ message, authorName, authorTitle, nextBody, nextTitle }) => {
	return (
		<Box sx={{ position: 'relative', mb: '20vh' }} id="message">
			<Flex sx={{ justifyContent: 'space-between', my: 5 }}>
				<Box>
					{message.split('\n\n').map((paragraph, i) => (
						<Text
							as="p"
							key={i}
							sx={{
								fontSize: 3,
								maxWidth: '56ch',
								my: 2,
							}}
						>
							{paragraph}
						</Text>
					))}
					<Text>{authorName}</Text>
					<Text>{authorTitle}</Text>
				</Box>
				<Box sx={{ mt: 4, mb: 6 }}>
					<Text sx={{ fontSize: 5 }}>{nextTitle}</Text>
					{nextBody.split('\n\n').map((paragraph, i) => (
						<Text
							as="p"
							key={i}
							sx={{
								fontSize: 3,
								maxWidth: '56ch',
								my: 2,
							}}
						>
							{paragraph}
						</Text>
					))}
				</Box>
			</Flex>
		</Box>
	)
}

export default HeaderBackground
