import {List, Map} from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import classNames from 'components/header/Header.scss';
import Navbar from 'components/navbar/Navbar';

const ARTICLES = 'articles';
const CAREERS = 'careers';
const EVENTS = 'events';
const TEAM = 'team';

export const navKeys = {
	[TEAM]: 'team',
	[ARTICLES]: 'articles',
	[EVENTS]: 'events',
	[CAREERS]: 'careers'
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
					href={`/{option}`}
					options={List([TEAM, ARTICLES, EVENTS, CAREERS])}
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

Header.defaultProps = {
	selected: TEAM
};

export default Header;