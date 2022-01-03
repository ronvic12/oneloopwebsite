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

export default function SponsorTwo({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Beckhoff</p>
				<p>Works on the development and implementation of PC-based control technology all over the globes. 
                This work spans over multiple different industries and product lines, cemented by their global presence.
                </p>
                <a href="https://www.beckhoff.com/en-us/">https://www.beckhoff.com/</a>
			</div>
        </div>
    )
}