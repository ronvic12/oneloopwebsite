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

export default function SponsorSeventeen({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Keysight Technology</p>
				<p>Provides many services in technology consultation, design, 
                and software to address pressing issues for business and technological advancement.
                </p>
                <a href="https://www.keysight.com/us/en/home.html">https://www.keysight.com/us/en/home.html</a>
			</div>
        </div>
    )
}