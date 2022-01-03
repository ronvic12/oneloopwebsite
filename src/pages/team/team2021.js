import './team2021.css';

import React, { useEffect } from 'react';
import Team2021_body from '../../components/team/team2021_body';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Team2021 = () => {
	return(
		<React.Fragment>
			<div className="team2021-oneloop">
				<Navbar />
				<Team2021_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Team2021;