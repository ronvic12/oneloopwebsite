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

export default function SponsorTwenty({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Composite One</p>
				<p>Lead supplier in composite materials with high 
                performance ratings and used across many industries 
                including aerospace, construction and infrastructure.
                </p>
                <a href="https://www.compositesone.com/">https://www.compositesone.com/</a>
			</div>
        </div>
    )
}