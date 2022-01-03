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

export default function SponsorSeven({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">AirCaster</p>
                <p>AirCaster designs & builds air bearing systems that transport heavy loads 
                across industries which includes but is not limited to aerospace, oil, defense, 
                and automotive. They are known for their durability and customization to meet unique needs.</p>
                <a href="https://www.aircaster.com">https://www.aircaster.com</a>
            </div>
        </div>
    )
}