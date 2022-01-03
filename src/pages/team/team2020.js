import './team2020.css';

import React, { useEffect } from 'react';
import Team2020_body from '../../components/team/team2020_body';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Team2020 = () => {
	return(
		<React.Fragment>
			<div className="team2020-oneloop">
				<Navbar />
				<Team2020_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Team2020;