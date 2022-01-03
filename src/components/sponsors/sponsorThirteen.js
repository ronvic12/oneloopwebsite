import React, {useState} from 'react'
import './sponsors_body.css';

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

export default function SponsorThirteen({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">SICK Inc.</p>
				<p>Manufactures sensor technology for anything from factory 
                automation to logistics and process automation. These are 
                sold and used in a wide range of industries, and create 
                the perfect basis for controlling processes securely and 
                efficiently, protecting individuals from accidents, and 
                preventing damage to the environment.
                </p>
                <a href="https://www.sick.com/us/en/">https://www.sick.com/us/en/</a>
			</div>
        </div>
    )
}