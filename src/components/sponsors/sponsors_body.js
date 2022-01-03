import './sponsors_body.css';

import React, { useEffect, useState } from 'react';
import SponsorOne from './sponsorOne';
import SponsorTwo from './sponsorTwo';
import SponsorThree from './sponsorThree';
import SponsorFour from './sponsorFour';
import SponsorFive from './sponsorFive';
import SponsorSix from './sponsorSix';
import SponsorSeven from './sponsorSeven';
import SponsorEight from './sponsorEight';
import SponsorNine from './sponsorNine';
import SponsorTen from './sponsorTen';
import SponsorEleven from './sponsorEleven';
import SponsorTwelve from './sponsorTwelve';
import SponsorThirteen from './sponsorThirteen';
import SponsorFourteen from './sponsorFourteen';
import SponsorFifteen from './sponsorFifteen';
import SponsorSixteen from './sponsorSixteen';
import SponsorSeventeen from './sponsorSeventeen';
import SponsorEighteen from './sponsorEighteen';
import SponsorNineteen from './sponsorNineteen';
import SponsorTwenty from './sponsorTwenty';


const Sponsors_body = () =>{
	const [showResults1, setShowResults1] = React.useState(false)
  	const onClick1 = () => setShowResults1(true)
	const [isOpen1,setIsOpen1] = useState(false)

	const [showResults2, setShowResults2] = React.useState(false)
  	const onClick2 = () => setShowResults2(true)
	const [isOpen2,setIsOpen2] = useState(false)

	const [showResults3, setShowResults3] = React.useState(false)
  	const onClick3 = () => setShowResults3(true)
	const [isOpen3,setIsOpen3] = useState(false)

	const [showResults4, setShowResults4] = React.useState(false)
  	const onClick4 = () => setShowResults4(true)
	const [isOpen4,setIsOpen4] = useState(false)

	const [showResults5, setShowResults5] = React.useState(false)
  	const onClick5 = () => setShowResults5(true)
	const [isOpen5,setIsOpen5] = useState(false)

	const [showResults6, setShowResults6] = React.useState(false)
  	const onClick6 = () => setShowResults6(true)
	const [isOpen6,setIsOpen6] = useState(false)

	const [showResults7, setShowResults7] = React.useState(false)
  	const onClick7 = () => setShowResults7(true)
	const [isOpen7,setIsOpen7] = useState(false)

	const [showResults8, setShowResults8] = React.useState(false)
  	const onClick8 = () => setShowResults8(true)
	const [isOpen8,setIsOpen8] = useState(false)

	const [showResults9, setShowResults9] = React.useState(false)
  	const onClick9 = () => setShowResults9(true)
	const [isOpen9,setIsOpen9] = useState(false)

	const [showResults10, setShowResults10] = React.useState(false)
  	const onClick10 = () => setShowResults10(true)
	const [isOpen10,setIsOpen10] = useState(false)

	const [showResults11, setShowResults11] = React.useState(false)
  	const onClick11 = () => setShowResults11(true)
	const [isOpen11,setIsOpen11] = useState(false)

	const [showResults12, setShowResults12] = React.useState(false)
  	const onClick12 = () => setShowResults12(true)
	const [isOpen12,setIsOpen12] = useState(false)

	const [showResults13, setShowResults13] = React.useState(false)
  	const onClick13 = () => setShowResults13(true)
	const [isOpen13,setIsOpen13] = useState(false)

	const [showResults14, setShowResults14] = React.useState(false)
  	const onClick14 = () => setShowResults14(true)
	const [isOpen14,setIsOpen14] = useState(false)

	const [showResults15, setShowResults15] = React.useState(false)
  	const onClick15 = () => setShowResults15(true)
	const [isOpen15,setIsOpen15] = useState(false)

	const [showResults16, setShowResults16] = React.useState(false)
  	const onClick16 = () => setShowResults16(true)
	const [isOpen16,setIsOpen16] = useState(false)

	const [showResults17, setShowResults17] = React.useState(false)
  	const onClick17 = () => setShowResults17(true)
	const [isOpen17,setIsOpen17] = useState(false)

	const [showResults18, setShowResults18] = React.useState(false)
  	const onClick18 = () => setShowResults18(true)
	const [isOpen18,setIsOpen18] = useState(false)

	const [showResults19, setShowResults19] = React.useState(false)
  	const onClick19 = () => setShowResults19(true)
	const [isOpen19,setIsOpen19] = useState(false)

	const [showResults20, setShowResults20] = React.useState(false)
  	const onClick20 = () => setShowResults20(true)
	const [isOpen20,setIsOpen20] = useState(false)

	return(
		<React.Fragment>
			<div className="oneloop-sponsors-body">
				<div className="oneloop-sponsors-title">
					<h1>Sponsors</h1>
					<h3>Meet our sponsors!</h3>
				</div>
				<div className="sponsor-ratings">
					<div className="platinum">
						<h2>Platinum</h2>
						<div className="platinum-sponsors">
							<div className="platinum-sponsors-col col-1">
								<ul>
									<li>Large company logo on pod</li>
									<li>Logo on T-Shirt</li>
									<li>Website Endorsement</li>
									<li>Invitation to Campus-Review Day</li>
									<li>Facebook Post</li>
								</ul>
							</div>
							<div className="platinum-sponsors-col col-2">
								<ul>
									<li>Instagram Video Post + 1 Mention/ Month</li>
									<li>Large Signed Team Poster</li>
									<li>Monthly Updates</li>
									<li>Access to Meeting Slides</li>
									<li>Resume Booklets</li>
									<li>Team Q&A</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="gold">
						<h2>Gold</h2>
						<div className="gold-sponsors">
							<div className="gold-sponsors-col col-1">
								<ul>
									<li>Medium company logo on pod </li>
									<li>Logo on T-Shirt</li>
									<li>Website Endorsement</li>
									<li>Invitation to Campus-Review Day</li>
								</ul>
							</div>
							<div className="gold-sponsors-col col-2">
								<ul>
									<li>Instagram Video Post + 1 Mention/ Month</li>
									<li>Facebook Post</li>
									<li>Signed Team Frame</li>
									<li>Monthly Updates</li>
									<li>Access to Meeting Slides</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="silver">
						<h2>Silver</h2>
						<div className="silver-sponsors">
							<div className="silver-sponsors-col col-1">
								<ul>
									<li>Small company logo on pod </li>
									<li>Logo on T-Shirt</li>
									<li>Website Endorsement</li>
									<li>Invitation to Campus-Review Day</li>
								</ul>
							</div>
							<div className="silver-sponsors-col col-2">
								<ul>
									<li>Instagram Video Post + 1 Mention/ Month</li>
									<li>Signed Team Frame</li>
									<li>Monthly Updates</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="sponsor-logos">
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<button onClick={() => setIsOpen1(true)} className="sponsor"><img src="images/logo/etel-logo.png"/></button>
							<SponsorOne open ={isOpen1} onClose = {() => setIsOpen1(false)}></SponsorOne>
							<button onClick={() => setIsOpen2(true)} className="sponsor"><img src="images/logo/Beckhoff_Logo.svg.png"/></button>
							<SponsorTwo open ={isOpen2} onClose = {() => setIsOpen2(false)}></SponsorTwo>
						</div>
						<div className="sponsor-row-bottom-half">
							<button onClick={() => setIsOpen3(true)} className="sponsor"><img src="images/logo/ANSYS_Logo.png"/></button>
							<SponsorThree open ={isOpen3} onClose = {() => setIsOpen3(false)}></SponsorThree>
							<button onClick={() => setIsOpen4(true)} className="sponsor"><img src="images/logo/Valispace_Logo.png"/></button>
							<SponsorFour open ={isOpen4} onClose = {() => setIsOpen4(false)}></SponsorFour>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<button onClick={() => setIsOpen5(true)} className="sponsor"><img src="images/logo/siemens-logo.png"/></button>
							<SponsorFive open ={isOpen5} onClose = {() => setIsOpen5(false)}></SponsorFive>
							<button onClick={() => setIsOpen6(true)} className="sponsor"><img src="images/logo/WCBranham_logo.gif"/></button>
							<SponsorSix open ={isOpen6} onClose = {() => setIsOpen6(false)}></SponsorSix>
						</div>
						<div className="sponsor-row-bottom-half">
							<button onClick={() => setIsOpen7(true)} className="sponsor"><img src="images/logo/air-caster-squarelogo.png"/></button>
							<SponsorSeven open ={isOpen7} onClose = {() => setIsOpen7(false)}></SponsorSeven>
							<button onClick={() => setIsOpen8(true)} className="sponsor"><img src="images/logo/FluidFlow_logo.jpg"/></button>
							<SponsorEight open ={isOpen8} onClose = {() => setIsOpen8(false)}></SponsorEight>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<button onClick={() => setIsOpen9(true)} className="sponsor"><img src="images/logo/AquaEnvironment_Logo.png"/></button>
							<SponsorNine open ={isOpen9} onClose = {() => setIsOpen9(false)}></SponsorNine>
							<button onClick={() => setIsOpen10(true)} className="sponsor"><img src="images/logo/TitanFittings_logo.png"/></button>
							<SponsorTen open ={isOpen10} onClose = {() => setIsOpen10(false)}></SponsorTen>
						</div>
						<div className="sponsor-row-bottom-half">
							<button onClick={() => setIsOpen11(true)} className="sponsor"><img src="images/logo/uc-davis-mechanical-aerospace-engineering-new-faculty-2020.jpg"/></button>
							<SponsorEleven open ={isOpen11} onClose = {() => setIsOpen11(false)}></SponsorEleven>
							<button onClick={() => setIsOpen12(true)} className="sponsor"><img src="images/logo/Gerberlabs_logo.png"/></button>
							<SponsorTwelve open ={isOpen12} onClose = {() => setIsOpen12(false)}></SponsorTwelve>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<button onClick={() => setIsOpen13(true)} className="sponsor"><img src="images/logo/SICKInc_Logo.jpg"/></button>
							<SponsorThirteen open ={isOpen13} onClose = {() => setIsOpen13(false)}></SponsorThirteen>
							<button onClick={() => setIsOpen14(true)} className="sponsor"><img src="images/logo/Rockwell_Automation_Logo.png"/></button>
							<SponsorFourteen open ={isOpen14} onClose = {() => setIsOpen14(false)}></SponsorFourteen>
						</div>
						<div className="sponsor-row-bottom-half">
							<button onClick={() => setIsOpen15(true)} className="sponsor"><img src="images/logo/Citris_logo.svg"/></button>
							<SponsorFifteen open ={isOpen15} onClose = {() => setIsOpen15(false)}></SponsorFifteen>
							<button onClick={() => setIsOpen16(true)} className="sponsor"><img src="images/logo/TCMetal_Electric_Steel_Logo.png"/></button>
							<SponsorSixteen open ={isOpen16} onClose = {() => setIsOpen16(false)}></SponsorSixteen>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<button onClick={() => setIsOpen17(true)} className="sponsor"><img src="images/logo/KeySight_Technology_Logo.png"/></button>
							<SponsorSeventeen open ={isOpen17} onClose = {() => setIsOpen17(false)}></SponsorSeventeen>
							<button onClick={() => setIsOpen18(true)} className="sponsor"><img src="images/logo/SecondOrderEffects_Logo.png"/></button>
							<SponsorEighteen open ={isOpen18} onClose = {() => setIsOpen18(false)}></SponsorEighteen>
						</div>
						<div className="sponsor-row-bottom-half">
							<button onClick={() => setIsOpen19(true)} className="sponsor"><img src="images/logo/Ubiquiti_Networks_Logo.svg.png"/></button>
							<SponsorNineteen open ={isOpen19} onClose = {() => setIsOpen19(false)}></SponsorNineteen>
							<button onClick={() => setIsOpen20(true)} className="sponsor"><img src="images/logo/CompositeOne_Logo.png"/></button>
							<SponsorTwenty open ={isOpen20} onClose = {() => setIsOpen20(false)}></SponsorTwenty>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Sponsors_body;