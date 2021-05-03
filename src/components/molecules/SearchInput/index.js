/** @jsx jsx */

import { jsx, Input, Flex } from 'theme-ui'
import { Icon, Hotkey } from 'components/atoms'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { useEffect } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

export default function SearchInput({ id }) {
	const hotkeys = '/, shift + 7'

	useHotkeys(hotkeys, () => document.getElementById(`${id}`).focus(), {
		keydown: false,
		keyup: true,
	})

	const hideKeys = () => {
		document.getElementById('hotkeys').style.setProperty('opacity', '0')
	}

	const showKeys = () => {
		document.getElementById('hotkeys').style.setProperty('opacity', '1')
	}

	useEffect(() => {
		window.docsearch({
			apiKey: process.env.GATSBY_ALGOLIA_KEY || 'e743f8519124b276f2f3325e8e126246',
			indexName: 'liferay_design',
			inputSelector: `#${id}`,
		})
	}, [id])

	return (
		<Flex
			className={styles.searchInput}
			sx={{
				mt: [0, null, '-3rem'],
			}}
		>
			<Input
				onFocus={hideKeys}
				onBlur={showKeys}
				id={id}
				placeholder="Search"
			/>
			<Flex
				sx={{
					position: 'absolute',
					left: '8ch',
					justifyContent: 'space-between',
					width: 'calc(100% - 8ch - .8rem)',
					pointerEvents: 'none',
				}}
			>
				<Hotkey
					id="hotkeys"
					sx={{ mt: '.45rem', display: ['none', 'flex', null] }}
					keys={[hotkeys[0]]}
				/>
				<Icon
					name="icon_search"
					sx={{
						color: 'mainL4',
						mt: '.8rem',
					}}
				/>
			</Flex>
		</Flex>
	)
}

SearchInput.propTypes = {
	id: PropTypes.string,
}
