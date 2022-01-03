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

export default function SponsorNineteen({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Ubiquiti Networks</p>
				<p>A provider of multi-application network operating systems 
                that offers many services such as identification across networks, 
                network management, and IT customization.
                </p>
                <a href="https://www.ui.com/">https://www.ui.com/</a>
			</div>
        </div>
    )
}