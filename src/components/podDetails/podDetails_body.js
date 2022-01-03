import './podDetails_body.css';

import React, { useState, useEffect } from 'react';
import Slideshow from './podDetails_slideshow'

const PodDetails_body = () =>{
	return(
		<React.Fragment>
			<div className="oneloop-poddetails-heading"> 
				<div className="oneloop-poddetails-title"> 
					<h1> Pod Details </h1> 
				</div> 
				<div className="oneloop-poddetails-slideshow"> 
					<Slideshow/>
				</div>
			</div>

		</React.Fragment>
	);
}

export default PodDetails_body;