import './podDetails.css';

import React, { useEffect } from 'react';
import PodDetails_body from '../../components/podDetails/podDetails_body';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const PodDetails = () => {
	return(
		<React.Fragment>
			<div className="podDetails-oneloop">
				<Navbar />
				<PodDetails_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default PodDetails;