/** @jsx jsx */

import { jsx, Input, Flex } from 'theme-ui'
import { Icon } from 'components/atoms'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function SearchInput({ id, ...props }) {
	// const imagePath = '/images/headshots/'

	return (
		<Flex
			sx={{
				mt: [0, null, '-3rem'],
				width: '100%',
				position: 'sticky',
				top: '1rem',
				zIndex: '1000',
				boxShadow:
					'0 .5rem 2rem #f7f8f9, 0 1rem 2rem #f7f8f9, 0 2rem 2rem #f7f8f9, 0 -2rem 0 #f7f8f9',
				'& > span': { width: '100%' },
			}}
		>
			<Input id={id} placeholder="Search" />
			<Icon
				name="icon_search"
				sx={{
					color: 'mainL4',
					position: 'absolute',
					top: '.8rem',
					right: '.8rem',
				}}
			/>
		</Flex>
	)
}

SearchInput.propTypes = {
	items: PropTypes.string,
}
