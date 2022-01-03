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

export default function SponsorTwelve({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Gerber Labs</p>
				<p>The leading provider of printed circuit boards (PCB’s) for anyone 
                from large companies to individuals working on home projects. Provides 
                low-cost and high-quality custom boards made easily accessible to the public.
                </p>
                <a href="https://www.gerberlabs.com/">https://www.gerberlabs.com/</a>
			</div>
        </div>
    )
}