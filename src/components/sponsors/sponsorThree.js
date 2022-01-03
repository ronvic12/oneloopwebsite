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

export default function SponsorThree({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">ANSYS</p>
				<p>Develops and markets multiphysics engineering simulation software for product design, 
                testing and operation and offers its products and services to customers worldwide.</p>
                <a href="https://www.ansys.com/">https://www.ansys.com/</a>
			</div>
        </div>
    )
}