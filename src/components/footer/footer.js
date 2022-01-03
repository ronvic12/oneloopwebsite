import './footer.css';

import React, { useEffect } from 'react';

const Footer = () =>{
	return(
		<React.Fragment>
			<div className="oneloop-footer">
				<a href="/"><img src="images/OneLoop.svg" /></a>
				<div className="oneloop-links">
					<a href="https://www.linkedin.com/company/davishyperloop/"><img src="images/linkedin.svg" /></a>
					<a href="https://twitter.com/davishyperloop"><img src="images/twitter.svg" /></a>
					<a href="/"><img src="images/mail.svg" /></a>
					<a href="https://www.instagram.com/davishyperloop/"><img src="images/instagram.svg" /></a>
					<a href="https://www.facebook.com/oneloopdavis"><img src="images/facebook.svg" /></a>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Footer;