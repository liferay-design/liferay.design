/** @jsx jsx */

import { jsx, Box, Grid, Text } from 'theme-ui'

const ThankYou = ({ message, authorName, authorTitle, nextBody, nextTitle }) => {
	// dont built until there is content
	if ((message, authorName, authorTitle, nextBody, nextTitle)) {
		return (
			<Box
				sx={{
					position: 'relative',
				}}
				id="message"
			>
				<Grid
					sx={{
						variant: 'boxes.gridTwoCol',
						mb: 4,
					}}
				>
					<Box sx={{ gridColumnStart: 1 }}>
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
					</Box>
					<Box sx={{ gridColumnStart: 1, mt: [2, 0] }}>
						<Text sx={{ fontSize: 4, fontWeight: 'bold' }}>{authorName}</Text>
						<Text sx={{ variant: 'text.pMedium', opacity: 0.8 }}>
							{authorTitle}
						</Text>
					</Box>
					<Box
						sx={{
							mt: [2, 5],
							gridColumnStart: [1, 3],
							gridRowStart: [2, 1],
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
				</Grid>
			</Box>
		)
	}
	return `null` // not sure if this is the best way to do this?
}
export default ThankYou
