import './about.css';

import React, { useEffect } from 'react';
import About_body from '../../components/about/about_body';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const About = () => {
	return(
		<React.Fragment>
			<div className="about-oneloop">
				<Navbar />
				<About_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default About;