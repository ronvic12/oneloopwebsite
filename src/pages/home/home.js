import './home.css';

import React, { useEffect } from 'react';
import Home_body from '../../components/home/home_body';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Home = () => {
	return(
		<React.Fragment>
			<div className="home-oneloop">
				<Navbar />
				<Home_body />
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Home;