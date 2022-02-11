import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const submitForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		// @ts-ignore
		e.target.reset();

		const res = await fetch(`${process.env.GATSBY_API_URL}/message`, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				email: email,
				message: message,
			}),
		});
	};

	return (
		<form className="contact-form" onSubmit={submitForm}>
			<span className="input-container horizontal small-gap align-center">
				<span className="vertical">
					<label>Name</label>
					<input
						onChange={(e) => {
							setName(e.target.value);
						}}
						className="contact-input contact align-center"
						type="text"
					/>
				</span>
				<span className="vertical">
					<label>Email</label>
					<input
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						className="contact-input contact align-center"
						type="email"
					></input>
				</span>
			</span>
			<span className="contact-textarea-container">
				<label>How Can I Help?</label>
				<textarea
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					className="contact-textarea contact align-center"
				></textarea>
			</span>
			<button className="contact contact-button" type="submit">
				Send
			</button>
		</form>
	);
};

export { Contact };
