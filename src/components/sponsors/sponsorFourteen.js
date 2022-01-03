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

export default function SponsorFourteen({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Rockwell Automation</p>
				<p>A provider of both information technology and industrial automation. 
                Many of their products are recognized across the globe for excellence.
                </p>
                <a href="https://www.rockwellautomation.com/en-us.html">https://www.rockwellautomation.com/en-us.html</a>
			</div>
        </div>
    )
}