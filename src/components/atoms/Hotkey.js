/** @jsx jsx */

import { jsx, Flex, Text } from 'theme-ui'

export default function Hotkey({ id, keys, ...props }) {
	const keyArray = keys.map(item => (
		<Text key={id} {...props} sx={{ variant: 'text.hotkey' }}>
			{item}
		</Text>
	))

	return (
		<Flex id={id}>
			{keyArray}
		</Flex>
	)
}
