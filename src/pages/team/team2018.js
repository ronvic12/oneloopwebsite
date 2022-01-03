import './team2018.css';

import React, { useEffect } from 'react';
import Team2018_body from '../../components/team/team2018_body';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Team2018 = () => {
	return(
		<React.Fragment>
			<div className="team2018-oneloop">
				<Navbar />
				<Team2018_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Team2018;