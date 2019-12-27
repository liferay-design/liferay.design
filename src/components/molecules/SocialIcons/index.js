import { Flex, Icon, Link } from 'components/atoms'
import React from 'react'
import styles from './styles.module.scss'

const SocialIcons = () => {
	return (
		<Flex className={styles.social} justify="space-between">
			<Link
				aria-label="Liferay.Design on dribbble"
				to="https://www.dribbble.com/liferay"
			>
				<Icon name="dribbble" />
			</Link>

			<Link
				aria-label="Liferay.Design on github"
				to="https://github.com/liferay-design/"
			>
				<Icon name="github" />
			</Link>

			<Link
				aria-label="Liferay.Design on instagram"
				to="https://www.instagram.com/liferaydesign/"
			>
				<Icon name="instagram" />
			</Link>

			<Link
				aria-label="Liferay.Design on medium"
				to="https://www.medium.com/liferaydesign"
			>
				<Icon name="medium" />
			</Link>

			<Link
				aria-label="Liferay.Design on twitter"
				to="https://twitter.com/liferaydesign"
			>
				<Icon name="twitter" />
			</Link>

			<Link
				aria-label="Liferay.Design on youtube"
				to="https://www.youtube.com/playlist?list=PLFNUy_HrVhPsBRvotF2sj2sBaTXlIlNgm"
			>
				<Icon name="youtube" />
			</Link>
			
		</Flex>
	)
}

export default SocialIcons
