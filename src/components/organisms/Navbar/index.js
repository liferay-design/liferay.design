/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Container, SiteName, Icon, Link } from 'components/atoms'
import { NavItems } from 'components/organisms'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { AuthContainer } from 'components/molecules'

const Navbar = ({ white, section, underlineColor, simpleNav }) => {
	return (
		<Container>
			<nav className={white ? styles.white : styles.default}>
				{simpleNav ? (
					<Link style={{ alignSelf: 'center', marginLeft: '-.2rem' }} to="/">
						<Icon
							name="liferayDesicon"
							sx={{ fill: 'white', height: '2rem', width: '2rem' }}
						/>
					</Link>
				) : (
					<SiteName underlineColor={underlineColor} section={section} />
				)}

				{simpleNav ? null : <NavItems />}
			</nav>
		</Container>
	)
}

Navbar.propTypes = {
	href: PropTypes.string,
	underlineColor: PropTypes.string,
}

export default Navbar
