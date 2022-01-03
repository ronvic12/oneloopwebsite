import './join.css';

import React, { useEffect } from 'react';
import Join_body from '../../components/joinUs/join_body';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Join = () => {
	return(
		<React.Fragment>
			<div className="join-oneloop">
				<Navbar />
				<Join_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Join;