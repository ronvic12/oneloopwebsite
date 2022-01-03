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

export default function SponsorFifteen({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">CITRIS</p>
				<p>An institute opened by the university of california to help 
                further the research might of the general university of california system, 
                and help it to connect with the entrepreneurial spirit of silicon valley, 
                bridging the gap between companies, students, and policy makers. 
                </p>
                <a href="https://citris-uc.org/">https://citris-uc.org/</a>
			</div>
        </div>
    )
}