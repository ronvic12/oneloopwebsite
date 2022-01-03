import './team2019.css';

import React, { useEffect } from 'react';
import Team2019_body from '../../components/team/team2019_body';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Team2019 = () => {
	return(
		<React.Fragment>
			<div className="team2019-oneloop">
				<Navbar />
				<Team2019_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Team2019;