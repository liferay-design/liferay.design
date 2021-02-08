/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, Icon } from 'components/atoms'

export default ({ eventUrl, ...props }) => (
	<Link
		to={eventUrl}
		sx={{
			color: `text`,
            width: 'fit-content',
			fontSize: 2,
			background: 'red',
			fontWeight: `heavy`,
			variant: 'labels.fill',
            display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
            cursor: 'pointer',
			'> svg::after': {
				content: '""',
				position: 'absolute',
				border: 'solid 2px #FFF',
				borderRadius: '50%',
				height: '1.2em',
				width: '1.2em',
				top: 0,
				left: 0,
				display: 'block',
			},
		}}
		{...props}
	>
		<Icon
			name="liferayDesicon"
			sx={{
				height: '1em',
				mr: 1,
				fill: 'white',
				position: 'relative',
			}}
		/>
		Live!
	</Link>
)
