import PropTypes from 'prop-types'
import classes from './Heading.scss'

const Heading = ({ align, className, color, children, level }) => {
	const Header = `h${level}`

	return (
		<Header className={className} style={{ color, textAlign: align }}>
			{children}
		</Header>
	)
}

Heading.propTypes = {
	align: PropTypes.string,
	className: PropTypes.string,
	color: PropTypes.string,
	children: PropTypes.node,
	level: PropTypes.number.isRequired,
}

Heading.defaultProps = {
	color: 'black',
	textAlign: 'left',
}

export default Heading
