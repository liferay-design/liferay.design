import { Heading, Icon } from 'components/atoms'
import PropTypes from 'prop-types'
import React from 'react'
import { Grid } from 'reakit'
import styles from './styles.module.scss'

const FormNewsletter = ({ placeholderText, submitText }) => {
	return (
		<form
			method="POST"
			name="newsletter"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
			<div className={styles.field}>
				{/* <label htmlFor="email">Email</label> */}
				<span className={styles.fancyInput}>
					<input
						type="text"
						name="email"
						id="email"
						placeholder={placeholderText}
					/>
				</span>
			</div>
			<ul className="actions">
				<li>
					<span className={styles.fancyInput}>
						<input
							type="submit"
							name="submit"
							value={submitText}
							className="special"
						/>
					</span>
				</li>
			</ul>
			<input type="hidden" name="bot-field" />
			<input type="hidden" name="form-name" value="newsletter" />
		</form>
	)
}

FormNewsletter.propTypes = {
	placeholderText: PropTypes.string,
	submitText: PropTypes.string,
}

FormNewsletter.defaultProps = {
	placeholderText: 'Your Email Address',
	submitText: 'Submit',
}


export default FormNewsletter
