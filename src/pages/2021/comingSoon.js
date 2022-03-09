/** @jsx jsx */

import { jsx, Text, Flex, Box, Heading } from 'theme-ui'
import { FormNewsletter } from 'components/molecules'
import { Icon } from 'components/atoms'

const ComingSoon = () => {
	return (
		<Flex
			sx={{
				minHeight: '80vh',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Flex
				sx={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					width: '100%',
					m: 3,
					mt: 5,
					maxWidth: '1200px',
				}}
			>
				<Box sx={{ my: 3, mx: 'auto', textAlign: 'center', maxWidth: '80ch' }}>
					<Icon
						name="liferayDesicon"
						sx={{ fill: 'white', height: '4rem', width: '4rem' }}
					/>
					<Heading sx={{ my: 3, fontSize: 7 }}>Coming Soon</Heading>
					<Text sx={{ color: 'primaryl2', fontSize: 4 }}>
						Subscribe to our newsletter and get notified when we publish our
						2021 report!
					</Text>
				</Box>
				<FormNewsletter />
			</Flex>
		</Flex>
	)
}

export default ComingSoon
