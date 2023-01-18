import React from 'react';

export default function Header() {
	return (
		<div>
			<header className ="header">
				<p className="name">Kayle Abesamis</p>
				<p className="title">Junior Web Developer</p>
				<a href="https://jinxlearns2code.github.io/" alt="github-link" target="_blank" className="website">https://jinxlearns2code.github.io/</a>
			</header>
			<div className="buttons">
				<a href="mailto:jinxlearns2code@gmail.com" alt="email-address" className="email-address" target="_blank"><img src="../dist/images/mail-icon.png" className="mail-icon" />Email</a>
				<a href="https://au.linkedin.com/in/kayle-abesamis-96b95991" alt="linkedin-profile" className="linkedin-profile" target="_blank"><img src="../dist/images/linkedin-icon.png" className="linkedin-icon" />LinkedIn</a>
			</div>
		</div>
	)
}