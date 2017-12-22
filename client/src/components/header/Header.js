import {List, Map} from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import classNames from 'components/header/Header.scss';
import Navbar from 'components/navbar/Navbar';

const AGENDA = 'agenda';
const TEAM = 'team';
const VENUE = 'venue';

export const navKeys = {
	[VENUE]: 'venue',
	[AGENDA]: 'agenda',
	[TEAM]: 'team'
}

class Header extends React.Component {
	render() {
		const {
			selected
		} = this.props;

		return (
			<div className={classNames.container}>
				<h2 className={classNames.siteName}>
					{"Liferay.Design"}
				</h2>

				<Navbar
					className={classNames.navbar}
					href={`#{option}`}
					options={List([VENUE, AGENDA, TEAM])}
					optionsMap={Map(navKeys)}
					selected={selected}
					key="navbar"
				/>
			</div>
		);
	}
}

Header.propTypes = {
	selected: PropTypes.string
};

export default Header;