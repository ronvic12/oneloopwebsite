import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import About from './pages/about/about';
import Home from './pages/home/home';
import Join from './pages/joinUs/join';
import PodDetails from './pages/podDetails/podDetails';
import Team2018 from './pages/team/team2018';
import Team2019 from './pages/team/team2019';
import Team2020 from './pages/team/team2020';
import Team2021 from './pages/team/team2021';
import Teamintro from './pages/team/teamintro';
import Sponsors from './pages/sponsors/sponsors';

import Aos from 'aos';

function App() {

	useEffect(() => {
		Aos.init({ duration: 1200 });
	});

	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/joinus">
						<GoogleReCaptchaProvider reCaptchaKey="6Lczs4gcAAAAABOkJB7dXACNfPOaYZksEi5HTpAD">
							<Join />
						</GoogleReCaptchaProvider>
					</Route>
					<Route path="/poddetails">
						<PodDetails />
					</Route>
					<Route path="/teamintro">
						<Teamintro />
					</Route>
					<Route path="/team2018">
						<Team2018 />
					</Route>
					<Route path="/team2019">
						<Team2019 />
					</Route>
					<Route path="/team2020">
						<Team2020 />
					</Route>
					<Route path="/team2021">
						<Team2021 />
					</Route>
					<Route path="/sponsors">
						<Sponsors />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
