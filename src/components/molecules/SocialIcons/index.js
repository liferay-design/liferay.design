/** @jsx jsx */

import { jsx, Flex } from 'theme-ui'
import { Icon, Link } from 'components/atoms'

const SocialIcons = ({ socials, ...props }) => {
	return (
		<Flex {...props}>
			{socials
				.filter(item => item != null)
				.map(item => (
					<Link
						sx={{ variant: 'buttons.icon' }}
						key={item.name}
						aria-label={'Liferay.Design on ' + item.name}
						to={item.url}
					>
						<Icon
							sx={{ height: '1.5rem', width: '1.5rem' }}
							name={item.name}
						/>
					</Link>
				))}
		</Flex>
	)
}

SocialIcons.defaultProps = {
	socials: [
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
	],
}

export default SocialIcons
