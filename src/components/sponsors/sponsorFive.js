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

export default function SponsorFive({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Seimens</p>
				<p>Siemens is the largest manufacturing company in Europe. 
                A multinational conglomerate company whose varied acquisitions 
                allowed it to be involved in wind power, gas power, energy management, 
                transportation, health care, automation and more.</p>
                <a href="https://www.siemens.com/global/en.html">https://www.siemens.com/</a>
			</div>
        </div>
    )
}