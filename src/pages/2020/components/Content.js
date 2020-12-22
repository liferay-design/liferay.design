/** @jsx jsx */

import { jsx, Heading, Flex, Text } from 'theme-ui'

const Content = ({ pageHeader, pretitle, title, copy, inverted, ...props }) => {
	return (
		<Flex
			sx={{
				pb: 4,
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
			}}
			{...props}
		>
			<Text
				as="span"
				sx={{
					variant: 'text.preheader',
					mb: 4,
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
