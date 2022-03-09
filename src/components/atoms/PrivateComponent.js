/** @jsx jsx */

import { AuthContainer } from 'components/molecules'
import { jsx, Box } from 'theme-ui'

export default function PrivateComponent({ children }) {
	return (
		<Box
			sx={{
				display: 'inline',
				position: 'relative',
				':hover > :nth-of-type(1)': { visibility: 'visible' },
			}}
		>
			<Box sx={{ visibility: 'hidden', position: 'absolute', top: 4, left: 2, }}>
				<AuthContainer />
			</Box>
			<Box sx={{ display: 'inline' }}>{children}</Box>
		</Box>
	)
}

// TODO
// 1. Mock this up
// 2. Abstract AuthContainer so it can be styled in situ