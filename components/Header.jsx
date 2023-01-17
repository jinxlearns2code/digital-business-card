import React from 'react';

export default function Header() {
	return (
		<div>
			<header className ="header">
				<p className="name">Kayle Abesamis</p>
				<p className="title">Frontend Developer</p>
				<p className="website">https://jinxlearns2code.github.io/</p>
			</header>
			<div className="buttons">
				<a href="mailto:jinxlearns2code@gmail.com" alt="email-address" className="email-address" target="_blank"><img src="../images/mail-icon.png" className="mail-icon" />Email</a>
				<a href="https://au.linkedin.com/in/kayle-abesamis-96b95991" alt="linkedin-profile" className="linkedin-profile" target="_blank"><img src="../images/linkedin-icon.png" className="linkedin-icon" />LinkedIn</a>
			</div>
		</div>
	)
}