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

export default function SponsorOne({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">ETEL</p>
				<p>ETEL is a company based in Switzerland which designs and builds motion systems in-house. 
                They create systems that meet a range of needs from high-precision to high-power. 
                </p>
                <a href="https://www.etel.ch">https://www.etel.ch</a>
			</div>
        </div>
    )
}