/** @jsx jsx */

import { jsx, Heading, Flex, Text } from 'theme-ui'

const Content = ({ pageHeader, pretitle, title, copy, inverted, ...props }) => {
	return (
		<Flex
			sx={{
				pb: 4,
				flexDirection: 'column',
				justifyContent: ['flex-start', 'center'],
				alignItems: ['flex-start', 'center'],
				textAlign: ['flex-start', 'center'],
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
							fontSize: 3,
							maxWidth: '68ch',
							color: `${inverted ? 'grayParagraph' : 'lightBlue'}`,
						}}
					>
						{paragraph}
					</Text>
				))}
		</Flex>
	)
}

export default Content
