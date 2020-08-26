/** @jsx jsx */

import { jsx, Input, Flex } from 'theme-ui'
import { Icon } from 'components/atoms'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function SearchInput({ id }) {
	return (
		<Flex
			className={styles.searchInput}
			sx={{
				mt: [0, null, '-3rem']
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
