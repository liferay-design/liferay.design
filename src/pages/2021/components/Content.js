/** @jsx jsx */

import { jsx, Heading, Flex, Text } from 'theme-ui'

const Content = ({ pageHeader, pretitle, title, copy, center, inverted, ...props }) => {
	return (
		<Flex
			sx={{
				pb: 4,
				flexDirection: 'column',
				justifyContent: [`${center ? 'center' : ['flex-start']}`, 'center'],
				alignItems: [`${center ? 'center' : ['flex-start']}`, 'center'],
				textAlign: [`${center ? 'center' : ['flex-start']}`, 'center'],
				alignSelf: `${center ? 'center' : ''}`,
				px: 2,
			}}
			{...props}
		>
			<Text
				as="span"
				sx={{
					variant: 'text.preheader',
					mb: [2, 4],
				}}
			>
				{pretitle}
			</Text>
			<Heading
				as="h2"
				sx={{
					color: `${inverted ? 'black' : 'lightBlue'}`,
					variant: `${pageHeader ? 'text.display' : 'text.l2'}`,
					maxWidth: '31ch',
				}}
			>
				{title}
			</Heading>
			{copy &&
				copy.split('\n\n').map((paragraph, i) => (
					<Text
						as="p"
						key={i}
						sx={{
							my: 3,
							variant: 'text.pLarge',
							maxWidth: '68ch',
							color: [
								`${inverted ? 'lightBlack' : 'lightBlue'}`,
								`${inverted ? 'grayParagraph' : 'lightBlue'}`,
							],
						}}
					>
						{paragraph}
					</Text>
				))}
		</Flex>
	)
}

export default Content
