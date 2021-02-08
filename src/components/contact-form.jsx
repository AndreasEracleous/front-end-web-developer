import React from 'react';
import { navigate } from 'gatsby-link';
// import Recaptcha from 'react-google-recaptcha'

const ContactForm = () => {
	const [state, setState] = React.useState({});
	const recaptchaRef = React.createRef();

	// const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY
	/*
  if (typeof RECAPTCHA_KEY === 'undefined') {
    throw new Error(`
    Env var SITE_RECAPTCHA_KEY is undefined! 
    You probably forget to set it in your Netlify build environment variables. 
    Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
    Note this demo is specifically for Recaptcha v2
    `)
  }
  */

	const encode = data => {
		return Object.keys(data)
			.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
			.join('&');
	};

	const handleChange = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		const form = e.target;
		// const recaptchaValue = recaptchaRef.current.getValue()

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': form.getAttribute('name'),
				// 'g-recaptcha-response': recaptchaValue,
				...state,
			}),
		})
			.then(() => navigate(form.getAttribute('action')))
			.catch(error => alert(error));
	};

	return (
		<form
			className="mt-4"
			name="contact"
			method="post"
			action="/thanks/"
			data-netlify="true"
			netlify-honeypot="bot-field"
			onSubmit={handleSubmit}
		>
			<noscript>
				<p>This form won’t work with Javascript disabled</p>
			</noscript>
			<div className="d-none">
				<label>
					Don’t fill this out if you're human: <input name="bot-field" />
				</label>
			</div>
			<div className="row">
				<div className="col-lg form-group">
					<label htmlFor="inputName">Name</label>
					<input
						type="text"
						name="name"
						className="form-control form-control-lg"
						id="inputName"
						onChange={handleChange}
						required
					/>
				</div>
				<div className="col-lg form-group">
					<label htmlFor="inputEmail">Email address</label>
					<input
						type="email"
						name="email"
						className="form-control form-control-lg"
						id="inputEmail"
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="inputSubject">Subject</label>
				<input
					type="text"
					name="subject"
					className="form-control form-control-lg"
					id="inputSubject"
					onChange={handleChange}
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="inputMessage">Message</label>
				<textarea
					name="message"
					className="form-control"
					id="inputMessage"
					rows="8"
					onChange={handleChange}
					required
				/>
			</div>
			{/* <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} /> */}
			<button
				type="submit"
				className="btn btn-lg btn-primary mt-3 mt-md-0 px-5 float-right"
			>
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
