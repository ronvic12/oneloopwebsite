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

export default function SponsorEighteen({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Second Order Effects</p>
				<p>Develops and designs many solutions to challenges that 
                are solved by their broad range of expertise in electronics, 
                automotive, healthcare, and industrial automation industries. 
                Reaching a solution that produces maximized results.
                </p>
                <a href="https://soeffects.com/">https://soeffects.com/</a>
			</div>
        </div>
    )
}