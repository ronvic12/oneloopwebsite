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

export default function SponsorFour({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Valispace</p>
				<p>Helps engineers streamline their engineering efforts by centralizing ‘loose’ engineering data into one place. 
                This provides a way for engineers to maximize their time and effort and design with their system of detailed 
                documentation and secured user deployment.
                </p>
                <a href="https://www.valispace.com/">https://www.valispace.com/</a>
			</div>
        </div>
    )
}