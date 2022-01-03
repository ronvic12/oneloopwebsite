import './sponsors.css';

import React, { useEffect } from 'react';
import Sponsors_body from '../../components/sponsors/sponsors_body';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Sponsors = () => {
	return(
		<React.Fragment>
			<div className="sponsors-oneloop">
				<Navbar />
				<Sponsors_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Sponsors;