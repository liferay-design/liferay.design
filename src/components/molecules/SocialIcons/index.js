/** @jsx jsx */

import { jsx, Flex } from 'theme-ui'
import { Icon, Link } from 'components/atoms'

const SocialIcons = ({ ...props }) => {
	const socials = [
		{
			url: 'https://www.dribbble.com/liferay',
			name: 'dribbble',
		},
		{
			url: 'https://figma.com/@liferay',
			name: 'figma',
		},
		{
			url: 'https://github.com/liferay-design/',
			name: 'github',
		},
		{
			url: 'https://www.instagram.com/liferaydesign/',
			name: 'instagram',
		},
		{
			url: 'https://www.medium.com/liferaydesign',
			name: 'medium',
		},
		{
			url: 'https://twitter.com/liferaydesign',
			name: 'twitter',
		},
		{
			url:
				'https://www.youtube.com/playlist?list=PLFNUy_HrVhPsBRvotF2sj2sBaTXlIlNgm',
			name: 'youtube',
		},
	]

	return (
		<Flex
			sx={{
				justifyContent: 'space-between',
				width: ['100%', '50%', '320px'],
				margin: ['0 -.2rem 3rem -.2rem', '1rem 0', 'initial'],
				order: [-1, null, 'initial'],
				maxWidth: ['360px', null, 'initial'],
				'> a': {
					transform: 'translateY(0) scale(0.95)',
					transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
					'&:hover': {
						transform: 'translateY(-0.4rem) scale(1)',
						transition:
							'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
						svg: {
							fill: 'primary',
						},
					},
				},
			}}
			{...props}
		>
			{socials.map(item => (
				<Link
					key={item.name}
					aria-label={'Liferay.Design on ' + item.name}
					to={item.url}
				>
					<Icon sx={{ height: '1.5rem', width: '1.5rem' }} name={item.name} />
				</Link>
			))}
		</Flex>
	)
}

export default SocialIcons
