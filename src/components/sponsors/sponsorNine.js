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

export default function SponsorNine({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Aqua Environment</p>
				<p>Specialize in manufacturing high pressure components such as 
                valves and regulators for gas and fluid control. Products are used 
                in wide rage of commercial firefighting, military, sports-diving, 
                natural gas, natural gas fill stations, and other applications (shipping worldwide).</p>
                <a href="https://www.aquaenvironmentinc.com/index.html">https://www.aquaenvironmentinc.com/</a>
			</div>
        </div>
    )
}