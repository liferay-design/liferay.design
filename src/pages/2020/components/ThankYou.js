/** @jsx jsx */

import { jsx, Box, Flex, Text } from 'theme-ui'

const HeaderBackground = ({ message, authorName, authorTitle, nextBody, nextTitle }) => {
	// dont built until there is content
	if ((message, authorName, authorTitle, nextBody, nextTitle)) {
		return (
			<Box
				sx={{
					position: 'relative',
				}}
				id="message"
			>
				<Flex
					sx={{
						variant: 'boxes.copyTwoCol',
						mb: 4,
					}}
				>
					<Box>
						{message.split('\n\n').map((paragraph, i) => (
							<Text
								as="p"
								key={i}
								sx={{
									variant: 'text.pMedium',
								}}
							>
								{paragraph}
							</Text>
						))}
						<Text sx={{ fontSize: 4, mt: 4, fontWeight: 'bold' }}>
							{authorName}
						</Text>
						<Text sx={{ opacity: 0.8 }}>{authorTitle}</Text>
					</Box>
					<Box
						sx={{
							mt: 5,
							mb: 6,
						}}
					>
						<Text
							sx={{
								fontSize: 5,
							}}
						>
							{nextTitle}
						</Text>
						{nextBody.split('\n\n').map((paragraph, i) => (
							<Text
								as="p"
								key={i}
								sx={{
									variant: 'text.pMedium',
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
	return `null` // not sure if this is the best way to do this?
}
export default HeaderBackground
