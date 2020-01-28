import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.scss'
import ReCAPTCHA from 'react-google-recaptcha'

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
				{process.env.GATSBY_RECAPTCHA_KEY ? (
					<div className={styles.captcha}>
						<ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} />
					</div>
				) : (
					console.log('no recaptcha key')
				)}
				<input
					type="submit"
					name="submit"
					value={submitText}
					className="special"
				/>
			</div>
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
