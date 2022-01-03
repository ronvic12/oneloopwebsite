import './teamintro.css';

import React, { useEffect } from 'react';
import Teamintro_body from '../../components/team/teamintro_body';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Teamintro = () => {
	return(
		<React.Fragment>
			<div className="teamintro-oneloop">
				<Navbar />
				<Teamintro_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Teamintro;