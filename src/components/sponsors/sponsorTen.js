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

export default function SponsorTen({open, children, onClose}){
    if (!open) return null
    return (
        <div style = {OVERLAY_STYLES}>
	        <div className="sponsorPopUp">
				<button onClick={onClose}>&#x2715;</button>
				<p className="Title">Titan Fittings</p>
				<p>Stainless steel line is composed of over 10,000 stainless fittings 
                in multiple product families that include hydraulic adapters, stainless 
                hose ends, instrumental tube fittings, and Titan stainless valves. 
                Company manufactures precise stainless components for large corporate and 
                government clients nationally and has evolved into supplying high quality standard 
                fittings for industrial applications globally. </p>
                <a href="https://www.titanfittings.com/">https://www.titanfittings.com/</a>
			</div>
        </div>
    )
}