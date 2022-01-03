import './teamintro_body.css';

import React, { useEffect } from 'react';

const Teamintro_body = () =>{
	return(
		<React.Fragment>
			<div className="oneloop-teamintro-body">
				<div className="oneloop-team-title">
					<h1>Team Introduction</h1>
					<img id="teamPic" src="/images/team.svg"/>
				</div>
				<div className="oneloop-team-bio">
					<p>OneLoop was founded in 2016 by a group of engineering students 
					at UC Davis in response to SpaceX’s announcement 
					of its annual Hyperloop competition. The 
					team’s mission is to further Hyperloop technologies and 
					achieve a top position at the SpaceX Hyperloop Pod 
					Competition.</p>

					<p>OneLoop was one of the top 21 teams in the 2019 
					Hyperloop Pod Competition and was invited to the SpaceX 
					HQ in Hawthorne to take part in the final round of the 
					competition. Based on the number of tests passed, 
					OneLoop placed 3rd in the United States and top-ten 
					in the world.</p>
				</div>
				<h2>Faculty Advisor</h2>
				<div className="oneloop-team-advisor">
					<div className="Advisor-profile">
						<img id="oneloop-advisor" src="/images/profAdvisor.svg"/>
					</div>
					<div className="Advisor-bio">
						<h4>Professor C.P “Case” Van Dam</h4>
						<ul>
							<li>Professor of Mechanical and Aerospace Engineering</li>
							<li>University of California, Davis</li>
						</ul>
					</div>
				</div>
				<div className="oneloop-previous-teams">
					<h2>Previous Teams</h2>
					<div className="oneloop-previous-teams">
						<a href="/team2020">2020-2021</a>
						<a href="/team2019">2019-2020</a>
						<a href="/team2018">2018-2019</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Teamintro_body;