/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, Icon, Flex } from 'components/atoms'

export default ({ children, ...props }) => (
	<Link
		sx={{
			color: `primary`,
			fontWeight: `heavy`,
			svg: {
				ml: '2',
				transform: 'translateX(0)',
				transition:
					'transition: transform 0.4s cubic-bezier(0.075, 1.2, 0.165, 1);',
			},
			'&:hover': {
				svg: {
					transition: 'transform 0.2s cubic-bezier(0.075, 1.2, 0.165, 1)',
					transform: 'translateX(1rem)',
				},
			},
		}}
		{...props}
	>
		<Flex align="center">
			{children}
			<Icon
				height="1.4rem"
				name="arrow"
				sx={{
					stroke: 'primary',
				}}
			/>
		</Flex>
	</Link>
)
