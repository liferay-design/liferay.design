import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'

const FormNewsletter = ({ placeholderText, submitText }) => {
	return (
		<form
			method="POST"
			name="newsletter"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			data-netlify-recaptcha="true"
		>
			<div className={styles.field}>
				<input
					type="text"
					name="email"
					id="email"
					placeholder={placeholderText}
					required
				/>
				<label className={styles.label} htmlFor="email">
					Email Address
				</label>
				<input
					type="submit"
					name="submit"
					value={submitText}
					className="special"
				/>
			</div>
			<input type="hidden" name="bot-field" />
			<input type="hidden" name="form-name" value="newsletter" />
			<div data-netlify-recaptcha="true"></div>
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
